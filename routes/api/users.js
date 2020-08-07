const express = require("express");
const router = express.Router();

// Drscriptions
// @route GET api/users
// @
// access Public

router.get("/", (req, res) => {
  res.send("Users route");
});

module.exports = router;
