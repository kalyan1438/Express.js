import express from "express";
import * as ctrl from "../controllers/user.controller.js";


const router = express.Router();
router.post("/", ctrl.createUser);
router.get("/", ctrl.getAll); 
router.get("/:id", ctrl.getById);
router.delete("/:id", ctrl.deleteUser);
router.put("/:id", ctrl.updateUser);

export default router;