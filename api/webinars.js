const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const webinarRoutes = require("../backend/routes/webinars"); 

const app = express();

app.use(cors({ origin: "https://med-iq.vercel.app" })); 
app.use(express.json());
app.use("/", webinarRoutes);

let isConnected = false;

async function connectToDatabase() {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      isConnected = true;
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw new Error("Database connection failed");
    }
  }
}

module.exports = async (req, res) => {
  try {
    await connectToDatabase();
    return app(req, res);
  } catch (error) {
    return res.status(500).json({ error: "Server error, please try again later" });
  }
};