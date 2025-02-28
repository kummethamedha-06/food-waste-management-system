const express = require("express");
const feedbackController = require("../controllers/feedbackController");

const router = express.Router();

router.get("/", feedbackController.getFeedback);
router.post("/", feedbackController.addFeedback);

module.exports = router;
