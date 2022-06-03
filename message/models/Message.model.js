const mongoose = require("mongoose")
const { Schema, model } = mongoose

const messageSchema = new Schema({
    destination: String,
    message: String,
    number: Number,
    status: {
        type: String,
        enum: ['PENDANT', 'SENT', 'CONFIRMED'],
        default: 'PENDANT'
    }
})

module.exports = model("Message", messageSchema)