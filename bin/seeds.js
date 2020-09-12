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
        role: 'restricted',
        cellPhone: '923892383'

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
        TableNumber: 1,
        capacity: 4,
        IsAvailable: true
         
        },
        {
        TableNumber: 2,
        capacity: 6,
        IsAvailable: true
            
        },
        {
        TableNumber: 3,
        capacity: 4,
        IsAvailable: true
            
        }
    ];

    Table.create(tables)
  .then(tablesFromDB => {
    console.log(`Created ${tablesFromDB.length} tables`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating tables: ${err}`));
