const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const profileController = require("../controllers/profile");

router.post("/", authMiddleware, profileController.createProfile);

router.post("/", authMiddleware, profileController.createProfile);

module.exports = router;
