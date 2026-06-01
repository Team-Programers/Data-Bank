import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: [
        "http://localhost:5173"
    ],
    credentials: true
}))
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("Hello World!") 
})
export default app



