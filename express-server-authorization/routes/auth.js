import express from 'express';
import Auth from '../controllers/auth';
const router = express.Router();

router.post('/', Auth.logIn);


export default router;