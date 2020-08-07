const express = require("express");
const router = express.Router();

// Drscriptions
// @route GET api/posts
// @
// access Public

router.get("/", (req, res) => {
  res.send("Posts route");
});

module.exports = router;
