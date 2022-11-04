import { PostDatabase } from "../data/PostDatabase";
import { generateId } from '../services/generatedId'
import {POST_TYPES} from '../types/enumTypes'
import { InvalidRequest } from './../error/InvalidRequest';


export class PostBusiness {
    public async createPost(photo: string, description: string, type: POST_TYPES, authorId: string) {
        if (!photo || !description || !type || !authorId) {
            throw new InvalidRequest()
         }

         const newPost = {
            id : generateId(),
            photo,
            description,
            type,
            authorId
         }

         const postDatabase = new PostDatabase();
         await postDatabase.createPost(newPost)
    }

    public async getPost(id : string) {
        const postDatabase = new PostDatabase();
        const result = await postDatabase.getPost(id);

        return result
    }
}