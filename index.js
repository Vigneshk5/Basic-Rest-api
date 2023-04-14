/** @format */

const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());


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

app.get("/comment/id:", async (res, req) => {
  const id = req.params.id;
  let content;
  try {
    content = await fs.readFile(`data/comment/${id}.txt`, "utf-8");
  } catch (err) {
    return console.log("not found");
  }

  res.json({
    content: content,
  });
});

app.post("/comment", async (res, req) => {
  const id = uuid();
  const content = res.body.content;
  if (!content) {
    return console.log("error");
  } else {
    console.log(content);
  }
  await fs.mkdir("data/comment", { recursive: true });
  await fs.writeFile(`data/comment/${id}.txt`, content);

  res.status(201).json({
    id: id,
  });
});

app.listen(3000, () => console.log("server is running..."));
