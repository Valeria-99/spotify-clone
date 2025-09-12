import { Router } from "express";
import { getAlbumsById, getAllAlbums } from "../controller/album.controller";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumsById);

export default router;

