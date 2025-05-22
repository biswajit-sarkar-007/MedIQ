const express = require("express");
const Webinar = require("../models/Webinar");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const webinars = await Webinar.find();
    res.json(webinars);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
