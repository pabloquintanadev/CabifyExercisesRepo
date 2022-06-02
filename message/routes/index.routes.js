const router = require("express").Router();

router.use("/messages", require('./messages.routes'))

// router.use("/messagesDB", require('./messagesDB.routes'))

module.exports = router;
