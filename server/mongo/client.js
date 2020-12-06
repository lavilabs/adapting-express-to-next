"use strict";
const { MongoClient } = require("mongodb");
//mongo library
require("dotenv").config();
const { MONGO_URI } = process.env;

module.exports = async () => {
  return await MongoClient(MONGO_URI);
};
