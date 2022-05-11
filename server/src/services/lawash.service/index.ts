import { Lawash } from "../../models";
import { ILawash } from "../../types";

export class LawashService {
  async findAll() {
    return await Lawash.find();
  }

  async findById(id: string) {    
    return await Lawash.findById(id);
  }

  async create(lawash: ILawash) {
    const res = await Lawash.find({title: lawash.title})
    if(res.length) return `Lawash name: [${lawash.title}] - already exists`;

    return await Lawash.create(lawash);
  }
}