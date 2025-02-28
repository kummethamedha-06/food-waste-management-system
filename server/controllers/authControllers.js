const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    const { email, password, username, age, phoneNumber, address, role } = req.body;
    if (!email || !password || !username || !age || !phoneNumber || !address || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    User.findByEmail(email, async (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });
        if (results.length > 0) return res.status(400).json({ error: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        User.create({ email, password: hashedPassword, username, age, phoneNumber, address, role }, (err) => {
            if (err) return res.status(500).json({ error: "Error registering user" });
            res.status(201).json({ message: "User registered successfully!" });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    User.findByEmail(email, async (err, results) => {
        if (err) return res.status(500).json({ error: "Database query error" });
        if (results.length === 0) return res.status(401).json({ error: "User not found" });

        const user = results[0];
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, "secret_key", { expiresIn: "1h" });
        res.json({ message: "Login successful", token, role: user.role });
    });
};
