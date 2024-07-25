import { Router } from 'express';
import { register, login, getUserInfo } from '../controllers/authController';
import { profile } from 'console';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user/:id', getUserInfo);
router.get('/profile', authenticateToken, profile);

export default router;
