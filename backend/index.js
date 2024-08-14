import express from "express";

const port = process.env.PORT || 3000;

const app = express();

app.get("/test", (req, res) => {
  res.send("It works!");
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
