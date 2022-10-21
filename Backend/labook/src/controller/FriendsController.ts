import { Request, Response } from "express";
import { FriendsBusiness } from '../business/FriendsBusiness'

export class FriendsController {
  async makeFriendship(req: Request, res: Response) {
    try {
      const { idUser, idFriend } = req.body;

      const friends = {
        idUser,
        idFriend,
      };

      const friendBusiness = new FriendsBusiness();
      await friendBusiness.makeFriendship(friends);

      res.status(200).send({ message: "I don't like you!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async deleteFriendship(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const friendsBusiness = new FriendsBusiness();
      await friendsBusiness.deleteFriendship(id);

      res.status(200).send({ message: "I don't like you!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}