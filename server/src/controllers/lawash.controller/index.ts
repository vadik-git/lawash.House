import { Response, Request } from "express";
import { LawashService } from "../../services";

class LawashController {
  constructor(private LawashService: LawashService) {}

  async getAllLawash(req: Request, res: Response) {
    const lawash = await this.LawashService.getAll();

    return res.status(200).json(lawash);
  }

  async createLawash(req: Request, res: Response) {
    const lawash = await this.LawashService.create(req.body);
    
    if(typeof lawash === 'string') {
      return res.status(400).json(lawash);
    }

    return res.status(200).json(lawash);
  }
}

export const lawashController = new LawashController(new LawashService());