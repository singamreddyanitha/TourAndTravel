import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../Controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// 

// update user route 
router.put("/:id", verifyUser, updateUser);

// delete user route 
router.delete("/:id", verifyUser,  deleteUser);

// get single user route 
router.get("/:id", verifyUser, getSingleUser);

// get all user route 
router.get("/", verifyAdmin, getAllUser);

export default router;