const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const eventsFromFile = fs.readFileSync("./data/events.json");
  const events = JSON.parse(eventsFromFile);

  res.json(events);
});

module.exports = router;
