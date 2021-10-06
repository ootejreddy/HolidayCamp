const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./appError");
app.use(morgan("tiny"));

const verifyPassword = (req, res, next) => {
  const password = req.query.password;
  if (password === "chickennugget") {
    next();
  }
  // res.send("sorry you need a password");
  throw new AppError(401, "Password Required");
};
//const addDate
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method.toUpperCase(), req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I lobe dogs");
  next();
});

app.get("/", (req, res, next) => {
  console.log(`request date:${req.requestTime}`);
  res.send("Home page");
});

app.get("/dogs", (req, res, next) => {
  res.send("woof woof!");
});

app.get("/secret", verifyPassword, (req, res, next) => {
  res.send("chicken Nuggets are tasty");
});

app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/admin", (req, res) => {
  throw new AppError(403, "you're not an admin");
});

app.use((req, res) => {
  res.status(404).send("Not Found!");
});

// app.use((err, req, res, next) => {
//   console.log("**** error ****");

// });
app.use((err, req, res, next) => {
  console.log(err);
  const { status = 500, message = "something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(4000, (req, res) => {
  console.log("another server running at 4000");
});
