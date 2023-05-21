const Sequelize = require('sequelize');
const bancodedados = require('../db');
const Fornecedor = bancodedados.define('fornecedor', {
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  nome:{
    type:Sequelize.STRING,
    allowNull:false
  },
  telefone:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false
  },
  produto:{
    type:Sequelize.STRING,
    allowNull:true
  }
})
module.exports = Fornecedor
