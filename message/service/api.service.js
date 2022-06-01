const axios = require('axios')

module.exports = class ApiService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'http://messageapp:3000'
        })
    }

    createMessage(destination, body) {
        return this.axiosApp.post('/message', { destination, body })
    }

}
