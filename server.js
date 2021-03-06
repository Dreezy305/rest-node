const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

const sayHi = (req, res) => {
  res.send("hi");
};

const sendBody = (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b),
  });
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/", sayHi);

app.post("/add", sendBody);

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
