import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

export const authenticate: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    (req as AuthenticatedRequest).user = jwt.verify(token, 'secret');
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};