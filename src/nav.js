const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.write("<h1>This is our home page<h1>");
  res.write("<h2>This is our home page<h2>");
  res.send();
});

app.get("/", (req, res) => {
  res.send("This is our home page");
});

app.get("/about", (req, res) => {
  res.send("This is our about page");
});

app.get("/contact", (req, res) => {
  res.send("This is our contact page");
});

app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Muhammad Madni",
    },
    {
      id: 1,

      name: "Muhammad Madni",
    },
    {
      id: 1,
      name: "Muhammad Madni",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listing on ${port} port`);
});
