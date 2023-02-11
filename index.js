const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || process.argv[2];
const eventRoutes = require("./routes/events");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use("/events", eventRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
