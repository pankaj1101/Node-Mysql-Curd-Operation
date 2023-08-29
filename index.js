const express = require("express");
const app = express();
const route = require("./routes/user");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.post("/", (req, res) => {
  res.send("Api Working");
});

app.use("/api", route);
app.use(bodyParser.json());

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server Started at Port:", PORT);
    });
  } catch (error) {}
};

start();
