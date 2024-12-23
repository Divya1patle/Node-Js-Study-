import { Router } from 'express';
const router = Router();
import { signUpUser } from '../controllers/signup.controller.js';


router.post('/signup',signUpUser );

export default router;