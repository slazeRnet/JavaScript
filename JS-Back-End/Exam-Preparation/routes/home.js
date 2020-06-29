const router = require('express').Router()
const handler = require('../handlers/home')
const isAuth = require('../utils/isAuth')

module.exports = router