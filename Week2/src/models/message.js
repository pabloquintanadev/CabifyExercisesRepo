import mongoose from "mongoose";

import database from "../database.js";

const messageSchema = new mongoose.Schema({
  destination: String,
  body: String,
  status: {
    type: String,
    enum: ["ERROR", "OK", "TIMEOUT"],
  },
  cost: Number
});

export default database.model("Message", messageSchema);
