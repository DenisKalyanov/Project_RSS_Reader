const express = require("express");

const connectDb = require("./config/db");

require("express-async-errors");

const auth = require("./src/routes/auth");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

connectDb();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: true }));

app.use("/api/auth", auth);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
