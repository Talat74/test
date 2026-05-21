const express = require("express");
const fs = require("fs");
const yaml = require("js-yaml");

const app = express();

// load config file
const config = yaml.load(fs.readFileSync("config/config.yaml", "utf8"));

// routes

app.get(["/", "/test"], (req, res) => {
  res.send(`Hello from ${config.app_name}`);
});

app.get(["/health", "/test/health"], (req, res) => {
  res.json({ status: "ok" });
});

app.get(["/version", "/test/version"], (req, res) => {
  res.json({ version: config.version });
});
// start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

