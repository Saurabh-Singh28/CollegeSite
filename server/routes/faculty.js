const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult, query } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { uploadSingle } = require('../middleware/upload');

const router = express.Router();
const prisma = new PrismaClient();

// Get all faculty (public)
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('department').optional().trim(),
  query('search').optional().trim()
], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { department, search } = req.query;

    const where = {
      isActive: true
    };

    if (department) {
      where.department = department;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { designation: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [faculty, total] = await Promise.all([
      prisma.faculty.findMany({
        where,
        orderBy: { name: 'asc' },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          designation: true,
          department: true,
          qualification: true,
          experience: true,
          photo: true,
          bio: true
        }
      }),
      prisma.faculty.count({ where })
    ]);

    res.json({
      faculty,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get faculty error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single faculty (public)
router.get('/:id', async (req, res) => {
  try {
    const faculty = await prisma.faculty.findFirst({
      where: {
        id: req.params.id,
        isActive: true
      }
    });

    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    res.json({ faculty });
  } catch (error) {
    console.error('Get faculty error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create faculty (admin/editor)
router.post('/', authenticateToken, requireRole(['ADMIN', 'EDITOR']), uploadSingle('photo'), [
  body('name').notEmpty().trim(),
  body('designation').notEmpty().trim(),
  body('department').notEmpty().trim(),
  body('qualification').notEmpty().trim(),
  body('experience').optional().trim(),
  body('email').optional().isEmail().normalizeEmail(),
  body('phone').optional().trim(),
  body('bio').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, designation, department, qualification, experience, email, phone, bio } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const faculty = await prisma.faculty.create({
      data: {
        name,
        designation,
        department,
        qualification,
        experience,
        email,
        phone,
        photo,
        bio
      }
    });

    res.status(201).json({ message: 'Faculty created successfully', faculty });
  } catch (error) {
    console.error('Create faculty error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update faculty (admin/editor)
router.put('/:id', authenticateToken, requireRole(['ADMIN', 'EDITOR']), uploadSingle('photo'), [
  body('name').optional().notEmpty().trim(),
  body('designation').optional().notEmpty().trim(),
  body('department').optional().notEmpty().trim(),
  body('qualification').optional().notEmpty().trim(),
  body('experience').optional().trim(),
  body('email').optional().isEmail().normalizeEmail(),
  body('phone').optional().trim(),
  body('bio').optional().trim(),
  body('isActive').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const updateData = { ...req.body };

    if (req.file) {
      updateData.photo = `/uploads/${req.file.filename}`;
    }

    const faculty = await prisma.faculty.update({
      where: { id },
      data: updateData
    });

    res.json({ message: 'Faculty updated successfully', faculty });
  } catch (error) {
    console.error('Update faculty error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete faculty (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.faculty.delete({
      where: { id }
    });

    res.json({ message: 'Faculty deleted successfully' });
  } catch (error) {
    console.error('Delete faculty error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
