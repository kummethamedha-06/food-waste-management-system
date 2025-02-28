const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const donationRoutes = require("./routes/donationRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => res.send("Server is running!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
