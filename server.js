const express = require("express");
const cookieParser = require("cookie-parser");

const connectDb = require("./config/db");

require("express-async-errors");

const auth = require("./src/routes/auth");
const profile = require("./src/routes/profile");

const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

connectDb();

const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json({ extended: true }));

app.use("/api/auth", auth);
app.use("/api/profile", profile);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
