const router = require("express").Router();

const ApiService = require('../service/api.service')
const messageService = new ApiService()

router.get("/", (req, res) => {
    res.json("Hello world!")
})

router.post("/", (req, res, next) => {

    const { destination, message } = req.body

    messageService
        .createMessage({ destination, body: message })
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json(err))

});


module.exports = router;
