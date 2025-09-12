import express from 'express';
import { Router } from "express";
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/", protectRoute, getAllUsers) ;
// todo: getMessage

export default router;