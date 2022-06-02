const router = require("express").Router();

const checkIfEmpty = require("../utils/checkIfEmpty")

const ApiService = require('../service/api.service')
const messageService = new ApiService()

router.get("/", (req, res) => {
    res.json("Hello world!")
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
                .then(response => { res.status(200).json(response.data) })
                .catch(err => res.status(500).json({ message: "This action returns a 500 error" }))
        }
    } else if (!req.body.destination) {
        res.status(400).json({ message: 'Destination key is required' })
    } else if (!req.body.message) {
        res.status(400).json({ message: 'Message key is required' })
    }

});


module.exports = router;
