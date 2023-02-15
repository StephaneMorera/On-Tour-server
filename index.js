const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || process.argv[2];
const eventRoutes = require("./routes/events");
const profileRoutes = require("./routes/profile");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use("/events", eventRoutes);
app.use("/profile", profileRoutes);
app.use("/profile/:id", profileRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
