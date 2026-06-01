import app from "./app.js";
import connectDb from "./config/db.js";
const port = process.env.PORT || 3000;
async function startServer() {
    await connectDb()
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

startServer()