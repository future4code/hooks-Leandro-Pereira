import { v4 as generateId } from 'uuid'

export type GenericList = {
    id: string;
    product:string,
    price:number
}

export const products:GenericList[] = [
    {
        id: generateId(),
        product: "Leite",
        price: 6.7
    },
    {
        id: generateId(),
        product: "Peixe",
        price: 27.30
    },
    {
        id: generateId(),
        product: "Açucar Mascavo",
        price: 6.7
    }
]