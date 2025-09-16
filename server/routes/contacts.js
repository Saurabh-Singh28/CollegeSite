const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult, query } = require('express-validator');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Submit contact form (public)
router.post('/', [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().trim(),
  body('subject').notEmpty().trim(),
  body('message').notEmpty().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message
      }
    });

    res.status(201).json({ message: 'Contact form submitted successfully', contact });
  } catch (error) {
    console.error('Submit contact error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all contacts (admin only)
router.get('/', authenticateToken, requireRole(['ADMIN']), [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('isRead').optional().isBoolean()
], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { isRead } = req.query;

    const where = {};
    if (isRead !== undefined) {
      where.isRead = isRead === 'true';
    }

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.contact.count({ where })
    ]);

    res.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single contact (admin only)
router.get('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id: req.params.id }
    });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({ contact });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Mark contact as read (admin only)
router.put('/:id/read', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    const contact = await prisma.contact.update({
      where: { id: req.params.id },
      data: { isRead: true }
    });

    res.json({ message: 'Contact marked as read', contact });
  } catch (error) {
    console.error('Mark contact as read error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete contact (admin only)
router.delete('/:id', authenticateToken, requireRole(['ADMIN']), async (req, res) => {
  try {
    await prisma.contact.delete({
      where: { id: req.params.id }
    });

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
