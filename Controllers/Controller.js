
// Import Library
const util = require('util')

// Import Connection
const db = require('./../Database/Connection')
const query = util.promisify(db.query).bind(db)

// Import Function HashPassword
const hashPassword = require('./../Helpers/Hash')

// Import JWT Sign / Men-generate Sebuah JWT Token
const jwtSign = require('./../Helpers/JWTSign')

module.exports = {
    //
}