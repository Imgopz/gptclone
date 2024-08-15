import express from "express";
import ImageKit from "imagekit";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const connnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongo DB!");
  } catch (error) {
    console.log(error);
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(port, () => {
  connnect();
  console.log("Server is running on " + port);
});
