import express from "express";
import {
  getUser,
  loginUser,
  currentUser,
} from "../controller/userController.js";
import validateToken from "../middleware/validateTokenHandle.js";


const router = express.Router();

router.post("/register", getUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);



export default router;