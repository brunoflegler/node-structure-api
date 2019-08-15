const Sequelize = require('sequelize')
const databaseConfig = require('../config/database')
const models = Object.values(require('./../app/models'))

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models
      .map(model => model.init(this.connection))
      .map(
        model =>
          model && model.associate && model.associate(this.connection.models)
      )
  }
}

module.exports = new Database()
