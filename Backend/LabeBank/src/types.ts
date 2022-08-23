export type Transactions = {
    value:number,
    date:Date,
    description:string
}

export type Account = {
    name:string,
    cpf:string,
    birthDate: Date,
    // bankBalance:number,
    // bankStatement:Transactions[]
}
