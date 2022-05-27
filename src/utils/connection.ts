//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  // OUR TODO SCHEMA
  const MotiveSchema = new mongoose.Schema({
    img: String,
    motives: String,
  });

  // OUR TODO MODEL
  const Motive =
    mongoose.models.Motive || mongoose.model("motive", MotiveSchema);

  return { conn, Motive };
};
