export type User = {
    id: string,
    name: string,
    email: string,
    type: string,
}


export enum Type{
    OPERATIONS = "OPERATIONS",
    TEACHER = "TEACHER",
    CX = "CX"
}