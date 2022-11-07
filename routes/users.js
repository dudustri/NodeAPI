import express from "express";

import { createUser, getAllUsers, getUserByID, deleteUser, updateUser} from "../controllers/users.js";

const router = express.Router();

//the routes of this file are starting with /users
router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUserByID);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;