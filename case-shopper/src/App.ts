import express from 'express'
import cors from 'cors'

export const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`)
})