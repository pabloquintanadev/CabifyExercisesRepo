const router = require("express").Router();

const checkIfEmpty = require("../utils/checkIfEmpty")

const ApiService = require('../service/api.service')
const messageService = new ApiService()

const DBService = require('../service/db.service')
const messageDBService = new DBService()

const messageDB = require('./../models/Message.model')

router.get("/", (req, res) => {
    messageDB
        .find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

router.post("/", (req, res, next) => {

    const { destination, message, number } = req.body

    if (destination && message && number) {
        if (checkIfEmpty(destination) && checkIfEmpty(message)) {
            res.status(422).json({ message: 'Destination and message fields are required' })
        } else if (destination && checkIfEmpty(destination)) {
            res.status(422).json({ message: 'Destination field is required' })
        } else if (number && checkIfEmpty(number)) {
            res.status(422).json({ message: 'Number field is required' })
        } else if (message && checkIfEmpty(message)) {
            res.status(422).json({ message: 'Message field is required' })
        } else if (Object.keys(req.body).length > 3) {
            res.status(413).json({ message: 'Payload must not contain keys different to _destination_, _message_ and _number_' })
        } else {
            messageService
                .createMessage({ destination, body: message })
                .then(() => {
                    messageDBService
                        .storeMessage({ destination, message, number, status: 'CONFIRMED' })
                        .then(_response => res.status(200).json({ message: "Message succesfully stored in DB, sent and confirmed" }))
                        .catch(_err => res.status(500).json({ message: "Message could not be stored" }))
                })
                .catch(err => {
                    if (err.response.status === 500) {
                        messageDBService
                            .storeMessage({ destination, message, number, status: 'PENDANT' })
                            .then(_response => res.status(500).json({ message: "Message succesfully stored in DB, but it was not sent" }))
                            .catch(_err => res.status(500).json({ message: "Message could not be stored" }))
                    } else if (err.response.status === 504) {
                        messageDBService
                            .storeMessage({ destination, message, number, status: 'SENT' })
                            .then(_response => res.status(504).json({ message: "Message succesfully stored in DB as sent but not confirmed because of a server timeout" }))
                            .catch(_err => res.status(500).json({ message: "Message could not be stored" }))
                    }
                })
        }
    } else if (!destination) {
        res.status(400).json({ message: 'Destination key is required' })
    } else if (!number) {
        res.status(400).json({ message: 'Number key is required' })
    } else if (!message) {
        res.status(400).json({ message: 'Message key is required' })
    }
})

router.delete("/", (req, res) => {
    messageDB
        .deleteMany()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

module.exports = router;
