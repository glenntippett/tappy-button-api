import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config()

const PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.json({
    "person": {
      "name": "Glenn"
    }
  });
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
