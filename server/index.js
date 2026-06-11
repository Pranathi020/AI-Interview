import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
dotenv.config({ override: true })
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()
app.use(cors({
    origin: (origin, callback) => {
        // Allow same-origin (no Origin header) and local dev ports.
        if (!origin) return callback(null, true)
        if (/^http:\/\/localhost:517\d$/.test(origin)) return callback(null, true)
        return callback(new Error(`CORS blocked origin: ${origin}`))
    },
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

const PORT = process.env.PORT || 6000
const start = async () => {
    const ok = await connectDb()
    if (!ok) {
        console.log("MongoDB is not connected. API will not work until MongoDB is reachable.")
    }
    app.listen(PORT , ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}

start()

// trigger restart