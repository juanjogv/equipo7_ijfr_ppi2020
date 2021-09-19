'use strict';

require('dotenv').config();


module.exports = {
  async init() {
    const sequelize = require('../sequelize');
    try {
      await sequelize.sync();
      console.log('Connection to DB has been established successfully.');
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
  }
};
