import express from "express";

import { showCodingCat } from "../controllers/standard.js";

const routerstd = express.Router();


routerstd.get('/', showCodingCat);


export default routerstd;