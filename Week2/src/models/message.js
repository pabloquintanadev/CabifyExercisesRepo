import mongoose from "mongoose";

import database from "../database.js";
import databaseBackup from "../databaseBackup.js";

const messageSchema = new mongoose.Schema({
  destination: String,
  body: String,
  status: {
    type: String,
    enum: ["ERROR", "OK", "TIMEOUT"],
  },
  cost: Number
});

const Message = database.model("Message", messageSchema);
const BackUpMessage = databaseBackup.model("Message", messageSchema);

export { Message, BackUpMessage }
