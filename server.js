const express = require("express");
const path = require("path");
const api = require("./routes/api");

const app = express();

app.use("/", (req, res) => {
  console.log(req.query);
});

app.use(express.static(path.join(__dirname, "/dist/")));

app.use("/api", api);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(3000);
