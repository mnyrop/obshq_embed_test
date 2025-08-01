const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile('docs/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}/`))
