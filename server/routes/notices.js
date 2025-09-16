const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult, query } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get all notices (public)
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
        { content: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [notices, total] = await Promise.all([
      prisma.notice.findMany({
        where,
        orderBy: [
          { isImportant: 'desc' },
          { publishedAt: 'desc' }
        ],
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          content: true,
          category: true,
          isImportant: true,
          publishedAt: true,
          author: {
            select: {
              name: true
            }
          }
        }
      }),
      prisma.notice.count({ where })
    ]);

    res.json({
      notices,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get notices error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single notice (public)
router.get('/:id', async (req, res) => {
  try {
    const notice = await prisma.notice.findFirst({
      where: {
        id: req.params.id,
        isActive: true
      },
      select: {
        id: true,
        title: true,
        content: true,
        category: true,
        isImportant: true,
        publishedAt: true,
        author: {
          select: {
            name: true
          }
        }
      }
    });

    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }

    res.json({ notice });
  } catch (error) {
    console.error('Get notice error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create notice (admin/editor)
router.post('/', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('title').notEmpty().trim(),
  body('content').notEmpty().trim(),
  body('category').notEmpty().trim(),
  body('isImportant').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, category, isImportant = false } = req.body;

    const notice = await prisma.notice.create({
      data: {
        title,
        content,
        category,
        isImportant,
        authorId: req.user.id
      },
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });

    res.status(201).json({ message: 'Notice created successfully', notice });
  } catch (error) {
    console.error('Create notice error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update notice (admin/editor)
router.put('/:id', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('title').optional().notEmpty().trim(),
  body('content').optional().notEmpty().trim(),
  body('category').optional().notEmpty().trim(),
  body('isImportant').optional().isBoolean(),
  body('isActive').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const updateData = req.body;

    // Check if notice exists
    const existingNotice = await prisma.notice.findUnique({
      where: { id }
    });

    if (!existingNotice) {
      return res.status(404).json({ message: 'Notice not found' });
    }

    const notice = await prisma.notice.update({
      where: { id },
      data: updateData,
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });

    res.json({ message: 'Notice updated successfully', notice });
  } catch (error) {
    console.error('Update notice error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete notice (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;

    const notice = await prisma.notice.findUnique({
      where: { id }
    });

    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }

    await prisma.notice.delete({
      where: { id }
    });

    res.json({ message: 'Notice deleted successfully' });
  } catch (error) {
    console.error('Delete notice error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
