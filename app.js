const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 6996
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoute = require("./routes/auth")

app.use("/auth", authRoute)

app.listen(port, () => {
    console.log(`Server up and running on ${port}`)
})