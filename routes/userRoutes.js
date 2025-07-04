import { Router } from "express";
import {Register, Login,auth} from "../controller/userController.js";

const router = Router();



router.post("/register", Register)
router.post("/login", Login)
router.get('/dashboard', auth, (req, res) => {
  res.send(`Welcome back, ${req.user.username}`);
});
// router.put("/update", Update)
// router.get("/logout", Logout)


export default router;