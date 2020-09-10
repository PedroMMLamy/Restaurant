const mongoose = require('mongoose');
const User = require('../models/User.model')
const Table = require('../models/table');
const { findByIdAndRemove } = require('../models/User.model');

require('../configs/db.config');

const users = [
        {
        username: 'andre',
        email: 'bruno.lucas14@hotmail.com',
        encryptedPassword: '11111',
        firstName: 'Andre',
        lastName: 'Pedro',
        role: 'restricted'
    },
];

User.create(users)
.then(dbUsers => {
    console.log(`Created ${dbUsers.length} users`);
    mongoose.connection.close();
})
.catch(err =>
    console.log(`An error occurred while creating a account user in db: ${err}`))


const tables = [
        {
          tableNumber: 1,
          size: 4,
         
        },
        {
            tableNumber: 2,
            size: 6,
            
        },
        {
            tableNumber: 3,
            size: 4,
            
        }
    ];

    Table.create(tables)
  .then(tablesFromDB => {
    console.log(`Created ${tablesFromDB.length} tables`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating tables: ${err}`));
