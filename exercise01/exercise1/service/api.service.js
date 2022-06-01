const axios = require('axios')

module.exports = class ApiService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    createMessage(destination, body) {
        console.log('llego al api handler')
        return this.axiosApp.post('/message', { destination, body })
    }

}
