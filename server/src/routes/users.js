import express from "express"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import { UserModel } from "../models/Users.js"

const router = express.Router()

router.post("/register", async (req, res) => {
    const { username, password } = req.body
    const user = await UserModel.findOne({ username: username })

    if (user) {
        return res.json({ message: "User already exists." })
    }

    const hashedPassword = await bcryptjs.hash(password, 10)

    const newUser = new UserModel({
        username: username,
        password: hashedPassword
    })
    await newUser.save()

    res.json({ message: "User was created successfully." })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await UserModel.findOne({ username: username })

    if (!user) {
        return res.json({ message: "User not found." })
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password)
    if (!isPasswordValid) {
        return res.json({ message: "Invalid credentials." })
    }

    const token = jwt.sign({ id: user._id }, "SECRET")
    res.json({ token, userID: user._id })
})

export { router as userRouter }