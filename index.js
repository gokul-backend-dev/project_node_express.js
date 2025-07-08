import express from 'express'

const app = express();

app.listen(5001, () => console.log("Api running on port 5001"))

app.get("/hi", (req, res) => res.json('My Api running---->'))