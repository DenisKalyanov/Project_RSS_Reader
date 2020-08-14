const express = require("express");

const auth = require("./src/routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));

app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
