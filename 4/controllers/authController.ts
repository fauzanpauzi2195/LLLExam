import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const mockUser = {
  id: 1,
  username: 'admin',
  password: 'password',
};

export const login = (req: Request, res: Response): Response => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign(
      { id: mockUser.id, username: mockUser.username },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' }
    );
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
};