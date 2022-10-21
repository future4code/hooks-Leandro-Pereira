import express from "express";
import { FriendsController } from '../controller/FriendsController'

export const friendRouter = express.Router();
const friendsController = new FriendsController();

friendRouter.post("/create", friendsController.makeFriendship)

friendRouter.delete("/delete/:id", friendsController.deleteFriendship)