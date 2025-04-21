import { Router } from 'express';
import { login } from '../controllers/authController';

const router = Router();

router.post('/login', async (req, res, next) => {
    try {
      await login(req, res);
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

export default router;