import express from 'express';
import { body } from 'express-validator';
import { register, login, logout } from '../controllers/authController.js';
import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    body('role').isIn(['admin', 'consultant', 'student']),
    validateRequest
  ],
  register
);

router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').exists(),
    validateRequest
  ],
  login
);

router.post('/logout', logout);

export default router;