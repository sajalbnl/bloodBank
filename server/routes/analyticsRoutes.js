const express = require("express");
const authMiddelware = require("../middelwares/authMiddelware");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticsController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsContoller);

module.exports = router;