const Feedback = require("../models/Feedback");

exports.getFeedback = (req, res) => {
    Feedback.getAll((err, results) => {
        if (err) return res.status(500).json({ error: "Error fetching feedback" });
        res.json(results);
    });
};

exports.addFeedback = (req, res) => {
    const feedbackText = req.body.feedback_text;
    if (!feedbackText) {
        return res.status(400).send("Feedback is required");
    }

    Feedback.create(feedbackText, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send("Thank you for your feedback!");
    });
};
