const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const webinarRoutes = require("./routes/webinars");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/webinars", webinarRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected"); 
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB connection error:", err));

