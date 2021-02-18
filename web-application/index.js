const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world welcome to gnx");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});