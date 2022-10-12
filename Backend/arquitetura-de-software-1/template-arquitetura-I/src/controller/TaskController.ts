import { Request, Response } from 'express';
import { TaskBusiness } from '../business/TaskBusiness';

export class TaskController {
    public createTask = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { title, description, deadline, authorId } = req.body

            if (
                !title ||
                !description ||
                !deadline ||
                !authorId
            ) {
                throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
            }

            const id: string = Date.now().toString()

            const input = {
                id,
                title,
                description,
                deadline,
                authorId,
            }

            const taskBusiness = new TaskBusiness()
            await taskBusiness.createTask(input)

            res.status(201).send({ message: "Tarefa criada!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}