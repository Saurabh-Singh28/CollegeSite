const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get all pages (public)
router.get('/', async (req, res) => {
  try {
    const pages = await prisma.page.findMany({
      where: { isActive: true },
      orderBy: { title: 'asc' },
      select: {
        id: true,
        slug: true,
        title: true,
        metaTitle: true,
        metaDescription: true
      }
    });

    res.json({ pages });
  } catch (error) {
    console.error('Get pages error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single page by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const page = await prisma.page.findFirst({
      where: {
        slug: req.params.slug,
        isActive: true
      }
    });

    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    res.json({ page });
  } catch (error) {
    console.error('Get page error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create page (admin/editor)
router.post('/', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('slug').notEmpty().trim(),
  body('title').notEmpty().trim(),
  body('content').notEmpty().trim(),
  body('metaTitle').optional().trim(),
  body('metaDescription').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { slug, title, content, metaTitle, metaDescription } = req.body;

    // Check if slug already exists
    const existingPage = await prisma.page.findUnique({
      where: { slug }
    });

    if (existingPage) {
      return res.status(400).json({ message: 'Page slug already exists' });
    }

    const page = await prisma.page.create({
      data: {
        slug,
        title,
        content,
        metaTitle,
        metaDescription
      }
    });

    res.status(201).json({ message: 'Page created successfully', page });
  } catch (error) {
    console.error('Create page error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update page (admin/editor)
router.put('/:id', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('slug').optional().notEmpty().trim(),
  body('title').optional().notEmpty().trim(),
  body('content').optional().notEmpty().trim(),
  body('metaTitle').optional().trim(),
  body('metaDescription').optional().trim(),
  body('isActive').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const updateData = req.body;

    // Check if page exists
    const existingPage = await prisma.page.findUnique({
      where: { id }
    });

    if (!existingPage) {
      return res.status(404).json({ message: 'Page not found' });
    }

    // Check if new slug conflicts with existing pages
    if (updateData.slug && updateData.slug !== existingPage.slug) {
      const slugExists = await prisma.page.findFirst({
        where: {
          slug: updateData.slug,
          id: { not: id }
        }
      });

      if (slugExists) {
        return res.status(400).json({ message: 'Page slug already exists' });
      }
    }

    const page = await prisma.page.update({
      where: { id },
      data: updateData
    });

    res.json({ message: 'Page updated successfully', page });
  } catch (error) {
    console.error('Update page error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete page (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.page.delete({
      where: { id }
    });

    res.json({ message: 'Page deleted successfully' });
  } catch (error) {
    console.error('Delete page error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
