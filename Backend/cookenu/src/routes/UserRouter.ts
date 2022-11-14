import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();
const userController = new UserController();


userRouter.get("/profile", userController.getUserLogged);
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);
userRouter.put('/editUser', userController.editUser)

