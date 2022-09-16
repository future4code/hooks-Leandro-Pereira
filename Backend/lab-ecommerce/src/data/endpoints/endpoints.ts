import { app } from '../../index'
import { connection } from '../connection'
import { v4 as generateId } from 'uuid'


// exercise 01

app.post('/createUser', async (req, res) => {
    let errorCode = 400;
    try {

        const { name, email, password } = req.body

        if(!name || !email || !password){
            throw new Error("Incomplete Data!")
        }

        const newUser = {
            id: generateId(),
            name,
            email,
            password
        }

        await connection.raw(`
        INSERT INTO labecommerce_users (id, name, email, password)
        VALUES("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}");
    `)

        res.status(200).send("New user created successfully!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// exercise 02

app.get('/getAllUsers', async (req, res) => {
    let errorCode = 400;

    try {

        const result = await connection.raw(`
            SELECT * FROM labecommerce_users
            ORDER BY name ASC
        `)

        res.status(200).send(result[0])

    } catch (error) {
        throw new Error("Something went wrong!")
    }

})

// exercise 03

app.post('/createProducts', async (req, res) => {
    let errorCode = 400;
    try {

        const { name, price, image_url } = req.body

        if(!name || !price || !image_url){
            throw new Error('Incomplete Data!')
        }

        const newProduct = {
            id: generateId(),
            name,
            price,
            image_url
        }

        await connection.raw(`
        INSERT INTO labecommerce_products (id, name, price, image_url)
        VALUES("${newProduct.id}", "${newProduct.name}", "${newProduct.price}", "${newProduct.image_url}");
    `)

        res.status(200).send("New product created successfully!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// exercise 04

app.get('/getAllProducts', async (req, res) => {
    let errorCode = 400;

    try {

        const result = await connection.raw(`
            SELECT * FROM labecommerce_products
            ORDER BY name ASC
        `)

        res.status(200).send(result[0])

    } catch (error) {
        throw new Error("Something went wrong!")
    }

})

// exercise 05


