const Donation = require("../models/Donation");

exports.getDonations = (req, res) => {
    Donation.getAll((err, results) => {
        if (err) return res.status(500).json({ error: "Error fetching donations" });
        res.json(results);
    });
};

exports.addDonation = (req, res) => {
    const { foodname, meal_type, category, quantity, email, phoneno, district, address } = req.body;
    Donation.create({ foodname, meal_type, category, quantity, email, phoneno, district, address }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Donation added successfully" });
    });
};
