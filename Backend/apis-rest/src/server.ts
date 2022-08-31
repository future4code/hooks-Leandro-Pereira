import { app } from './app';
import { AddressInfo } from 'net'
import { users } from './data'



// exercicio 1
app.get("/users", (req, res) => {
    res.send(users)
})

// exercicio 2

app.get("/users/type/:type", (req, res) => {
    const userType = req.params.type


})

// exercicio 3

app.get("/users/search/:userName", (req, res) => {
    try {
        const userName = req.params.userName

        let userFound = false

        const searchUser = users.filter((user) => {
            if (user.name === userName) {
                userFound = true
                return user
            }
        })

        if (userFound === false) {
            throw new Error("User not found")
        }

        res.send(searchUser)
    } catch (err: any) {
        switch (err.message) {
            case "User not found":
                res.status(404)
                break
            default:
                res.status(500)
        }

        res.send("Something Went Wrong")
    }
})

//exercicio 4

app.put("/users/create", (req, res) => {
    const { id, name, email, type, age } = req.body

    const newUser = {
        id,
        name,
        email,
        type,
        age,
    }

    users.push(newUser)
    res.send(users)
})

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});