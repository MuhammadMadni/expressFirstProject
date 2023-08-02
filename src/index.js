// const express = require("express");
// const app = express;

// app.get("/", (req, res) => {
//   res.send("hello word from express");
// }); /*  get(Read), create(write), put(update), delete(delete)*/

// app.listen(8000, () => {
//   console.log("sever runing   lising port number 8000");
// });
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates");

// builtin middleware

// to set the view engine
app.set("view engine", "hbs");
app.set("views", templatesPath);

// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// template engine router
app.get("/", (req, res) => {
  res.render("index.hbs");
});

// app.get("/about", (req, res) => {
//   res.send("Hello about page");
// });

app.listen(port, () => {
  console.log(` Your app listening on port ${port}`);
});
