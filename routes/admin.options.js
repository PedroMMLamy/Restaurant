const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminUsers = require('../models/User.admin.model');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminUsers],
};

module.exports = options;