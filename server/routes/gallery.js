const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult, query } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { uploadMultiple } = require('../middleware/upload');

const router = express.Router();
const prisma = new PrismaClient();

// Get all gallery items (public)
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('category').optional().trim()
], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;
    const { category } = req.query;

    const where = {
      isActive: true
    };

    if (category) {
      where.category = category;
    }

    const [gallery, total] = await Promise.all([
      prisma.gallery.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.gallery.count({ where })
    ]);

    res.json({
      gallery,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get gallery error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single gallery item (public)
router.get('/:id', async (req, res) => {
  try {
    const item = await prisma.gallery.findFirst({
      where: {
        id: req.params.id,
        isActive: true
      }
    });

    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.json({ item });
  } catch (error) {
    console.error('Get gallery item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create gallery items (admin/editor)
router.post('/', authenticateToken, requireRole(['ADMIN', 'EDITOR']), uploadMultiple('images', 10), [
  body('title').notEmpty().trim(),
  body('description').optional().trim(),
  body('category').notEmpty().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'At least one image is required' });
    }

    const { title, description, category } = req.body;
    const images = req.files.map(file => `/uploads/${file.filename}`);

    // Create multiple gallery items for each image
    const galleryItems = await Promise.all(
      images.map(imageUrl =>
        prisma.gallery.create({
          data: {
            title,
            description,
            imageUrl,
            category
          }
        })
      )
    );

    res.status(201).json({ message: 'Gallery items created successfully', gallery: galleryItems });
  } catch (error) {
    console.error('Create gallery error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update gallery item (admin/editor)
router.put('/:id', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('title').optional().notEmpty().trim(),
  body('description').optional().trim(),
  body('category').optional().notEmpty().trim(),
  body('isActive').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const updateData = req.body;

    const item = await prisma.gallery.update({
      where: { id },
      data: updateData
    });

    res.json({ message: 'Gallery item updated successfully', item });
  } catch (error) {
    console.error('Update gallery item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete gallery item (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.gallery.delete({
      where: { id }
    });

    res.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Delete gallery item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
