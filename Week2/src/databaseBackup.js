import mongoose from "mongoose";

// const server = "mongodb2:27018";
const server = "127.0.0.1:27018";
const databaseBackup = "cabify_bootcamp_backup";

export default mongoose.createConnection(`mongodb://${server}/${databaseBackup}`, {
  useNewUrlParser: true,
});
