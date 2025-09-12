import { Router } from "express";
// import { createSong } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.<i class="fas fa-gitter    "></i>('/songs', protectRoute, requireAdmin, createSong);


export default router;

