import { Response, Request } from "express";

import { LawashService } from "../../services";

class LawashController {
  constructor(private LawashService: LawashService) {}

  async getAllLawash(req: Request, res: Response) {
    const lawash = await this.LawashService.findAll();

    return res.status(200).json(lawash);
  }

  async getOneById(req: Request, res: Response) {    
    const lawash = await this.LawashService.findById(req.params.id);

    return res.status(200).json(lawash);
  }

  async createLawash(req: Request, res: Response) {    
    const lawash = await this.LawashService.create(req.body);
    
    if(typeof lawash === 'string') {
      return res.status(400).json(lawash);
    }

    return res.status(200).json(lawash);
  }

  async updateLawash(req: Request, res: Response) {
    const lawash = await this.LawashService.update(req.body._id, req.body);

    return res.status(200).json(lawash);
  }

  async deleteLawash(req: Request, res: Response) {
    const lawash = await this.LawashService.delete({_id: req.params.id});

    return res.status(200).json(lawash);
  }
}

export const lawashController = new LawashController(new LawashService());
