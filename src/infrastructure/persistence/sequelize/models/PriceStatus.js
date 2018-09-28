'use strict'

const DataTypes = require('sequelize').DataTypes

module.exports = sequelize => {
  return sequelize.define('price_status', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}
