const express = require("express");
const projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from projects router");
});

module.exports = router;
