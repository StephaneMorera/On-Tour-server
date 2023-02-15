const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const eventsFromFile = fs.readFileSync("./data/profile.json");
  const events = JSON.parse(eventsFromFile);

  res.json(events);
});

router.post("/", (req, res) => {
  const eventsFromFile = fs.readFileSync("./data/profile.json");
  const events = JSON.parse(eventsFromFile);

  events.push(req.body);

  fs.writeFileSync("./data/profile.json", JSON.stringify(events));
  res.json("Added to favorites");
});

router.delete("/:id", (req, res) => {
  const eventsFromFile = fs.readFileSync("./data/profile.json");
  const events = JSON.parse(eventsFromFile);
  const id = +req.params.id;
  const eventToDelete = events.find((el) => el.id === id);
  const index = events.indexOf(eventToDelete);

  events.splice(index, 1);

  fs.writeFileSync("./data/profile.json", JSON.stringify(events));
  res.json("success");
});

module.exports = router;
