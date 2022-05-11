import { Router } from "express";

import { LawashController } from "../../controllers";
import { ValidateBodyReq, ValidateParamsId } from "../../middleware";

const router: Router = Router();

router.get("/getAll", LawashController.getAllLawash.bind(LawashController));
router.get("/:id", ValidateParamsId(), LawashController.getOneById.bind(LawashController));
router.post("/create", ValidateBodyReq, LawashController.createLawash.bind(LawashController));
router.put("/update", ValidateParamsId(), LawashController.updateLawash.bind(LawashController));
router.delete("/delete/:id", ValidateParamsId(), LawashController.deleteLawash.bind(LawashController));

export default router;
