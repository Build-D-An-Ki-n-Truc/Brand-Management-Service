const mongoose = require('mongoose');
const {db: {host, name, port}} = require('../config/config.mongodb');

const MAX_POOL_SIZE = 50
const SOCKET_TIME_OUT = 30000
const connectString = process.env.MONGOURI || `mongodb://${host}:${port}/${name}`
console.log(`MongoDB URI: ${connectString}`)

class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        mongoose.set('debug', true)
        mongoose.set('debug', {color: true})

        mongoose.connect( connectString, {
            poolSize: MAX_POOL_SIZE,
            socketTimeoutMS: SOCKET_TIME_OUT
        })
            .then(_ => { console.log('Connected to MongoDB') })
            .catch(error => { console.log('Error connecting to MongoDB', error) })
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database()
        }
        return this.instance
    }
}

const instanceDB = Database.getInstance()
module.exports = instanceDB