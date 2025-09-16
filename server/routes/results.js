const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult, query } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { uploadSingle } = require('../middleware/upload');

const router = express.Router();
const prisma = new PrismaClient();

// Get all results (public)
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('examType').optional().trim(),
  query('semester').optional().trim(),
  query('year').optional().trim()
], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { examType, semester, year } = req.query;

    const where = {
      isActive: true
    };

    if (examType) {
      where.examType = examType;
    }

    if (semester) {
      where.semester = semester;
    }

    if (year) {
      where.year = year;
    }

    const [results, total] = await Promise.all([
      prisma.result.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.result.count({ where })
    ]);

    res.json({
      results,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get results error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single result (public)
router.get('/:id', async (req, res) => {
  try {
    const result = await prisma.result.findFirst({
      where: {
        id: req.params.id,
        isActive: true
      }
    });

    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.json({ result });
  } catch (error) {
    console.error('Get result error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create result (admin/editor)
router.post('/', authenticateToken, requireRole(['ADMIN', 'EDITOR']), uploadSingle('file'), [
  body('title').notEmpty().trim(),
  body('description').optional().trim(),
  body('examType').notEmpty().trim(),
  body('semester').optional().trim(),
  body('year').notEmpty().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'File is required' });
    }

    const { title, description, examType, semester, year } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;

    const result = await prisma.result.create({
      data: {
        title,
        description,
        fileUrl,
        examType,
        semester,
        year
      }
    });

    res.status(201).json({ message: 'Result created successfully', result });
  } catch (error) {
    console.error('Create result error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update result (admin/editor)
router.put('/:id', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('title').optional().notEmpty().trim(),
  body('description').optional().trim(),
  body('examType').optional().notEmpty().trim(),
  body('semester').optional().trim(),
  body('year').optional().notEmpty().trim(),
  body('isActive').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const updateData = req.body;

    const result = await prisma.result.update({
      where: { id },
      data: updateData
    });

    res.json({ message: 'Result updated successfully', result });
  } catch (error) {
    console.error('Update result error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete result (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.result.delete({
      where: { id }
    });

    res.json({ message: 'Result deleted successfully' });
  } catch (error) {
    console.error('Delete result error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
