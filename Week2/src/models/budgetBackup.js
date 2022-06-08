import mongoose from "mongoose";

import databaseBackup from "../databaseBackup.js";

const budgetBackupSchema = new mongoose.Schema({
    amount: Number,
});

export default databaseBackup.model("BudgetBackup", budgetBackupSchema);
