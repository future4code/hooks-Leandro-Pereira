import { app } from '../../index'
import { connection } from '../connection'
import { v4 as generateId } from 'uuid'
import {Users, Products, Purchases} from './types'
import transporter from '../mailerTransporter'
// import dotenv from "dotenv"
// import nodemailer from 'nodemailer'


// exercise 01

app.post('/createUser', async (req, res) => {
    let errorCode = 400;
    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("Incomplete Data!")
        }

        const newUser:Users = {
            id: generateId(),
            name,
            email,
            password
        }

        await connection.raw(`
        INSERT INTO labecommerce_users (id, name, email, password)
        VALUES("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}");
    `)

        const sendEmail = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: "sandrapira_couto@hotmail.com",
            subject: email,
            text: "Testando 123, Testando",
            html: `<p>Oi eu sou Tommy quer ser meu amiguinho?!</p>`
        })

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

        if (!name || !price || !image_url) {
            throw new Error('Incomplete Data!')
        }

        const newProduct:Products = {
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

app.post("/createPurchases", async (req, res) => {
    let errorCode = 400

    try {

        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            throw new Error("Something went wrong!")
        }

        const getPrice = await connection("labecommerce_products")
            .where({ id: product_id })
            .select()

        if (!getPrice) {
            throw new Error("produto não encontrado!")
        }

        const totalPrice = getPrice[0].price * quantity

        const newPurchase:Purchases = {
            id: generateId(),
            user_id,
            product_id,
            quantity,
            total_price: totalPrice
        }

        await connection.raw(`
                INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
                VALUES("${newPurchase.id}", "${newPurchase.user_id}","${newPurchase.product_id}", 
                ${newPurchase.quantity}, ${newPurchase.total_price});
            `)

        res.status(200).send("successful purchase")

    } catch (error: any) {
        res.status(400).send(error.message)
    }

})

// exercise 06

app.get('/getUsers/:user_id/purchases', async (req, res) => {
    let errorCode = 400
    try {
        const { user_id } = req.params

        const userPurchases = await connection.raw(`
        SELECT name, email, product_id, quantity, total_price from labecommerce_users
        JOIN labecommerce_purchases ON labecommerce_purchases.user_id = labecommerce_users.id
        WHERE labecommerce_users.id = "${user_id}";
    `)


        if (userPurchases[0].length === 0) {
            throw new Error("Purchase not found!")
        }

        res.status(200).send(userPurchases[0])

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }


})
