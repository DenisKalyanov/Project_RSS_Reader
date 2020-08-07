const express = require("express");
const connectDb = require("./config/db");

const app = express();
connectDb();

//created check page by adress localhost:5000
app.get("/", (req, res) => {
  res.send("Server is running, display in your browser");
});

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running, COOL!");
});
