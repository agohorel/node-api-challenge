const express = require("express");
const actions = require("../data/helpers/actionModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from actions router");
});

module.exports = router;
