'use strict'

const Sequelize = require('sequelize')
const { Model } = Sequelize

class Example extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'name',
        },
      },
      { sequelize, tableName: 'examples' }
    )
  }
}

module.exports = Example
