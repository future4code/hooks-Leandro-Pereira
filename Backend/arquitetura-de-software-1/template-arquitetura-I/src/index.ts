import { app } from "./app"
import {UserController} from './controller/UserController'
import { TaskController } from './controller/TaskController';

const userController = new UserController()
app.post('/user', userController.createUser)

const taskController = new TaskController()
app.post('/task', taskController.createTask)


