const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).json({ name: "Jane Doe" });
});

app.listen(port, () => console.log(`Running on Port ${port}...`));
