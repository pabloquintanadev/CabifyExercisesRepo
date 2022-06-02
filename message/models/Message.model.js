const mongoose = require("mongoose")
const { Schema, model } = mongoose

const messageSchema = new Schema({
    destination: {
        type: String
    },
    message: {
        type: String
    },
    number: {
        type: Number
    }
})

module.exports = model("Message", messageSchema)