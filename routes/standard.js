import express from "express";

import { showCodingCat } from "../controllers/standard.js";

const router = express.Router();

router.get('/', showCodingCat);

export default router;