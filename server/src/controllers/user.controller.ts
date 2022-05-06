import { Response, Request } from "express";
import { UserService } from "../services";

class UserController {
  constructor(private userService: UserService) {}

  async getAll(req: Request, res: Response) {
    const users = await this.userService.getAllUsers();

    return res.status(200).json(users);
  }
}

const userController = new UserController(new UserService());

export default userController;
