const express = require("express");
const router = express.Router();

// Drscriptions
// @route GET api/profile
// @
// access Private

router.get("/", (req, res) => {
  res.send("Profile route");
});

module.exports = router;
