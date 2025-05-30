const express = require('express');
const cors = require('cors');

const app = new express();

app.use(cors());

const PORT = process.env.PORT;
const PASS = process.env.PASS

app.get("/nomes", async (req, res) => {
    res.json([{"nome":"eva"},{"nome":"adão"},{"nome":"abel"}])
})

app.listen(PORT, () => {
    console.log("servidor ligado na porta "+ PORT + " " + PASS)
})