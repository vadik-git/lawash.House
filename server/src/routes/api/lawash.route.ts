import { Router } from "express";

import { LawashController } from "../../controllers";
import { ValidateBodyReq } from "../../middleware";

const router: Router = Router();

router.get("/get", LawashController.getAllLawash.bind(LawashController));
router.post("/create", ValidateBodyReq, LawashController.createLawash.bind(LawashController));

export default router;
