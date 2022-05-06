import { userDB } from "../../models";

export class UserService {
  async getAllUsers() {
    return await userDB.get().then((elem: any) => {
      return elem.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })};
}