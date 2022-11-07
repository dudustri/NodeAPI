import express from "express";

import { showCodingCat } from "../controllers/standard.js";

const router = express.Router();

//showing the code cat when receive a get without params

router.get('/', showCodingCat);

export default router;