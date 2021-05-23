const express = require("express");
const app = express();
require("dotenv").config();
const foodData = require("./db.json")

app.use(express.json())

// get all data
app.get("/", async (req, res) => {
    return res.status(500).send(foodData)
})

app.listen(process.env.PORT || 2244, async () => {
    console.log("Listening on port 2244");
})