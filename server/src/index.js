import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import { userRouter } from "./routes/users.js"
import { recipesRouter } from "./routes/recipes.js"

const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)

mongoose.connect(
    "mongodb+srv://dbkynetic:Kynetic123123@cluster0.f80a2n8.mongodb.net/?retryWrites=true&w=majority"
)

app.listen(PORT, () => console.log(`::: Server listening on ${PORT}...`))