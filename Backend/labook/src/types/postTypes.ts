import {POST_TYPES} from './enumTypes'

export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}

