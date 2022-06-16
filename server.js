const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

app.listen(3000, () => {
  console.log(`Servidor Rodando`);
});
