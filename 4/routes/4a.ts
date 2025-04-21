import { Router } from 'express';
import { hello } from '../controllers/4a';

const router = Router();
router.get('/hello', hello);
export default router;