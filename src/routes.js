const express = require('express')
const Router = express.Router()
const handle = require('express-async-handler')
const controllers = require('./app/controllers')

/**
 * users create
 */

Router.get('/', handle(controllers.ExampleController.index))

module.exports = Router
