const mongoose = require("mongoose");
require("dotenv/config");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://mongodb:27017";
mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "messageapp"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });
