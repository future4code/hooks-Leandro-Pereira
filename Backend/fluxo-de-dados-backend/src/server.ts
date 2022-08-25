import { app } from './app'
import { AddressInfo } from 'net'
import { products } from './data'
import { v4 as generateId } from 'uuid'



app.get('/test', (req, res) => {
    res.send("This request is functional")
})

app.post('/products/addProduct', (req, res) => {
    const { product, price } = req.body

    try {
        const newProduct = {
            id: generateId(),
            product,
            price
        }

        products.push(newProduct)

        res.send(products)

    } catch (error: any) {

        throw new Error("Something went wrong")
    }

})

app.get("/products/getProduct", (req, res) => {
    res.send(products)
})

app.put("/products/editProduct/:id", (req, res) => {
    const idProduct = req.params.id
    const newPrice = req.body.price

    products.map((product) => {
        try {
            if (typeof newPrice !== "number") {
                throw new Error("price different from number")
            } else if (newPrice <= 0) {
                throw new Error("price less or than equal zero")
            } else if (product.id === idProduct) {
                product.price = newPrice
                res.send(products)
            } else {
                throw new Error("product not found")
            }
        } catch (error:any) {
            console.error(error.message)
        }
    })

})


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
}); 