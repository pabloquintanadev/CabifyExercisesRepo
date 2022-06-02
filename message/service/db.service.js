const axios = require('axios')
const messageDB = require('./../models/Message.model')

module.exports = class DBService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'http://localhost:9001/api'
        })
    }

    storeMessage(messageInfo) {
        return messageDB
            .create(messageInfo)
            .then(res => res.data)
            .catch(err => err.data)

    }

}
