// export type Product = {
//     id: string,
//     name: string,clear
//     price: number
// }

export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number
    ) {
        this.id = id
        this.name = name
        this.price = price
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }
}