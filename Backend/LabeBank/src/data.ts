export type Transactions = {
    value:number,
    date:string,
    description:string
}

export type Client = {
    name:string,
    cpf:string,
    birthDate: string,
    bankBalance:number,
    bankStatement:Transactions[]
}

export const clients: Client[] = [{
    name: "Leandro",
    cpf: "123456789",
    birthDate: "04/06/1985",
    bankBalance: 1560,
    bankStatement: []
},
{
    name: "Sandra",
    cpf: "987654321",
    birthDate: "30/03/1980",
    bankBalance: 3325,
    bankStatement: [],
}]      