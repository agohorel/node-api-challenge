const express = require("express");
const actions = require("../data/helpers/actionModel.js");
const projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allActions = await actions.get();
    res.status(200).json(allActions);
  } catch (error) {
    res.status(500).json({ error: "Server error :(" });
  }
});

router.post("/:id", validateProjectID, validateProject, async (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  try {
    const payload = { ...body, project_id: id };
    const newAction = await actions.insert(payload);
    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({ error: "Server error :(" });
  }
});

async function validateProjectID(req, res, next) {
  const { id } = req.params;
  try {
    const project = await projects.get(id);
    if (!project) {
      res.status(404).json({ message: "Invalid project ID." });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ error: "Server error :(" });
  }
}

function validateProject(req, res, next) {
  const { body } = req;
  if (!body.description || !body.notes) {
    res.status(400).json({
      message: "Please provide a description and notes for this action."
    });
  } else {
    next();
  }
}

module.exports = router;
