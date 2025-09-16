const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult, query } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { uploadSingle } = require('../middleware/upload');

const router = express.Router();
const prisma = new PrismaClient();

// Get all downloads (public)
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('category').optional().trim(),
  query('search').optional().trim()
], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { category, search } = req.query;

    const where = {
      isActive: true
    };

    if (category) {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [downloads, total] = await Promise.all([
      prisma.download.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.download.count({ where })
    ]);

    res.json({
      downloads,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get downloads error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single download (public)
router.get('/:id', async (req, res) => {
  try {
    const download = await prisma.download.findFirst({
      where: {
        id: req.params.id,
        isActive: true
      }
    });

    if (!download) {
      return res.status(404).json({ message: 'Download not found' });
    }

    res.json({ download });
  } catch (error) {
    console.error('Get download error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create download (admin/editor)
router.post('/', authenticateToken, requireRole(['ADMIN', 'EDITOR']), uploadSingle('file'), [
  body('title').notEmpty().trim(),
  body('description').optional().trim(),
  body('category').notEmpty().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'File is required' });
    }

    const { title, description, category } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;
    const fileSize = (req.file.size / 1024 / 1024).toFixed(2) + ' MB';

    const download = await prisma.download.create({
      data: {
        title,
        description,
        fileUrl,
        category,
        fileSize
      }
    });

    res.status(201).json({ message: 'Download created successfully', download });
  } catch (error) {
    console.error('Create download error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update download (admin/editor)
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

    const download = await prisma.download.update({
      where: { id },
      data: updateData
    });

    res.json({ message: 'Download updated successfully', download });
  } catch (error) {
    console.error('Update download error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete download (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.download.delete({
      where: { id }
    });

    res.json({ message: 'Download deleted successfully' });
  } catch (error) {
    console.error('Delete download error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
