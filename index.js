const express = require("express");
const cors = require("cors");
const server = express();
const projectRouter = require("./projects/projectRouter.js");
const actionRouter = require("./actions/actionRouter.js");
const port = 5000;

server.use(express.json());
server.use(cors());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.listen(port, () => console.log(`server listening on port ${port}`));
