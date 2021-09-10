'use strict';
const { Sequelize } = require('sequelize');
const { database } = require("../../config");

const sequelize = new Sequelize(database.url);

module.exports = sequelize;