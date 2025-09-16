const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult, query } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get all courses (public)
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('search').optional().trim()
], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { search } = req.query;

    const where = {
      isActive: true
    };

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { code: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        orderBy: { name: 'asc' },
        skip,
        take: limit
      }),
      prisma.course.count({ where })
    ]);

    res.json({
      courses,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single course (public)
router.get('/:id', async (req, res) => {
  try {
    const course = await prisma.course.findFirst({
      where: {
        id: req.params.id,
        isActive: true
      }
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json({ course });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create course (admin/editor)
router.post('/', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('name').notEmpty().trim(),
  body('code').notEmpty().trim(),
  body('description').notEmpty().trim(),
  body('duration').notEmpty().trim(),
  body('eligibility').notEmpty().trim(),
  body('syllabus').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, code, description, duration, eligibility, syllabus } = req.body;

    // Check if course code already exists
    const existingCourse = await prisma.course.findUnique({
      where: { code }
    });

    if (existingCourse) {
      return res.status(400).json({ message: 'Course code already exists' });
    }

    const course = await prisma.course.create({
      data: {
        name,
        code,
        description,
        duration,
        eligibility,
        syllabus
      }
    });

    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update course (admin/editor)
router.put('/:id', authenticateToken, requireRole(['ADMIN', 'EDITOR']), [
  body('name').optional().notEmpty().trim(),
  body('code').optional().notEmpty().trim(),
  body('description').optional().notEmpty().trim(),
  body('duration').optional().notEmpty().trim(),
  body('eligibility').optional().notEmpty().trim(),
  body('syllabus').optional().trim(),
  body('isActive').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const updateData = req.body;

    // Check if course exists
    const existingCourse = await prisma.course.findUnique({
      where: { id }
    });

    if (!existingCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if new code conflicts with existing courses
    if (updateData.code && updateData.code !== existingCourse.code) {
      const codeExists = await prisma.course.findFirst({
        where: {
          code: updateData.code,
          id: { not: id }
        }
      });

      if (codeExists) {
        return res.status(400).json({ message: 'Course code already exists' });
      }
    }

    const course = await prisma.course.update({
      where: { id },
      data: updateData
    });

    res.json({ message: 'Course updated successfully', course });
  } catch (error) {
    console.error('Update course error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete course (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.course.delete({
      where: { id }
    });

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Delete course error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
