const express = require("express");
const connectDb = require("./config/db");

const app = express();

connectDb();

const PORT = process.env.PORT || 5000;

//created check page by adress localhost:5000
app.get("/", (req, res) => {
  res.send("Server is running, display in your browser");
});

app.listen(PORT, () => {
  console.log("Server is running, COOL!");
});
