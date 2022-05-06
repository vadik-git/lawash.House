import { Router } from "express";
import userController from "../../controllers/user.controller";

const router: Router = Router();

router.get("/get", userController.getAll.bind(userController));

export default router;
