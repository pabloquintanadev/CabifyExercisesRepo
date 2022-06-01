const router = require("express").Router();

const ApiService = require('./../service/api.service')
const service = new ApiService()

router.post("/", (req, res, next) => {

    const { destination, body } = req.body

    service
        .createMessage({ destination, body })
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json(err))

});


module.exports = router;
