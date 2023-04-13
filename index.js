/** @format */

const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/outfit", (req, res) => {
  const tops = ["blue", "green"];
  const pants = ["pink", "black", "orange"];
  const hat = ["red", "green"];
  res.json({
    top: _.sample(tops),
    pants: _.sample(pants),
    hats: _.sample(hat),
  });
});

app.listen(3000, () => console.log("server is running..."));
