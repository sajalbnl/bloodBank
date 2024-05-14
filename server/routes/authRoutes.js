const express = require("express");
const bodyParser = require("body-parser");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddelware = require("../middelwares/authMiddelware");

const router = express.Router();

// Use body-parser middleware to parse JSON explicitly
router.use(bodyParser.json());

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);
//GET CURRENT USER || GET
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;
