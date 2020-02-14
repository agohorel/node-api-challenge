const express = require("express");
const projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allProjects = await projects.get();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ error: "Server error :(" });
  }
});

router.post("/", validateProject, async (req, res) => {
  const { body } = req;
  try {
    const newProject = await projects.insert(body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Server error :(" });
  }
});

function validateProject(req, res, next) {
  const { body } = req;

  if (!body.name || !body.description) {
    res.status(400).json({
      message: "Please provide a name and description for the project"
    });
  } else {
    next();
  }
}

module.exports = router;
