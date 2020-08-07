const express = require("express");
const router = express.Router();

// Drscriptions
// @route GET api/auth
// @
// access Private

router.get("/", (req, res) => {
  res.send("Auntification route");
});

module.exports = router;
