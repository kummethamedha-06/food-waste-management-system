const express = require("express");
const donationController = require("../controllers/donationController");

const router = express.Router();

router.get("/", donationController.getDonations);
router.post("/", donationController.addDonation);

module.exports = router;
