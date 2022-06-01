const axios = require("axios")

module.exports = class ApiService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'http://messageapp:3000'
        })
    }

    createMessage(messageInfo) {
        
        return this.axiosApp.post('/message', messageInfo)
    }

}