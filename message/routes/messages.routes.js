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

router.delete("/", (req, res) => {
    messageDB
        .deleteMany()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

router.post("/", (req, res, next) => {

    const { destination, message } = req.body

    if (destination && message) {
        if (checkIfEmpty(destination) && checkIfEmpty(message)) {
            res.status(422).json({ message: 'Destination and message fields are required' })
        } else if (destination && checkIfEmpty(destination)) {
            res.status(422).json({ message: 'Destination field is required' })
        } else if (message && checkIfEmpty(message)) {
            res.status(422).json({ message: 'Message field is required' })
        } else if (Object.keys(req.body).length > 2) {
            res.status(413).json({ message: 'Payload must not contain keys different to _destination_ and _message_' })
        } else {
            messageService
                .createMessage({ destination, body: message })
                .then(() => {
                    messageDBService
                        .storeMessage({ destination, message })
                        .then(response => res.status(200).json({ message: "Message succesfully stored in DB" }))
                        .catch(err => res.status(500).json({ message: "Message could not be stored" }))
                })
                .catch(err => res.status(500).json({ message: "The request could not be sent" }))
        }
    } else if (!req.body.destination) {
        res.status(400).json({ message: 'Destination key is required' })
    } else if (!req.body.message) {
        res.status(400).json({ message: 'Message key is required' })
    }

})


module.exports = router;
