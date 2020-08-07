const express = require("express");
const router = express.Router();

// Drscriptions
// @route GET api/auth
// @desc Test route
// access Public

router.get("/", (req, res) => {
  try {
    throw res.send("Auntification route");
  } catch (error) {
  }
});

module.exports = router;