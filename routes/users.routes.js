
const express = require('express');
const router = express.Router();

// ********* require user model in order to use it *********
const User = require('../models/User.model');

// ****************************************************************************************
// GET route to display all the users
// ****************************************************************************************

router.get('/Users', (req, res) => {
  user.find()
    .then(allTheUsersFromDB => {
      console.log(allTheUsersFromDB);
      res.render('users-list', { users: allTheUsersFromDB });
    })
    .catch(err =>
      console.log(`Err while getting the users from the  DB: ${err}`)
    );
});

// ****************************************************************************************
// GET route for displaying the form to create a new user
// ****************************************************************************************

router.get('/users/create', (req, res) => res.render('user-create'));

// ****************************************************************************************
// POST route for saving a new user in the database
// ****************************************************************************************

router.post('/users/create', (req, res) => {
  // console.log(req.body);
  const { username, firstName, lastName, passwordHash, email, cellPhone } = req.body;

  User.create({ username, firstName, lastName, passwordHash, email, cellPhone })
    // .then(userFromDB => console.log(`New user created: ${userFromDB.username}.`))
    .then(() => res.redirect('/users'))
    .catch(error => `Error while creating a new user: ${error}`);
});

// ****************************************************************************************
// GET route for querying a specific user from the database
// ****************************************************************************************

router.get('/users/:id/edit', (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(userToEdit => {
      // console.log(userToEdit);
      res.render('user-edit', userToEdit);
    })
    .catch(error =>
      console.log(`Error while getting a single user for edit: ${error}`)
    );
});

// ****************************************************************************************
// POST route to save changes after updates in a specific user
// ****************************************************************************************

router.post('/users/:id/edit', (req, res) => {
  const { id } = req.params;
  const { username, firstName, lastName, passwordHash, email, cellPhone } = req.body;

  User.findByIdAndUpdate(
    id,
    { username, firstName, lastName, passwordHash, email, cellPhone},
    { new: true }
  )
    .then(updatedUser => res.redirect(`/users/${updatedUser._id}`))
    .catch(error =>
      console.log(`Error while updating a single user: ${error}`)
    );
});

// ****************************************************************************************
// POST route to delete a specific user
// ****************************************************************************************

router.post('/users/:id/delete', (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then(() => res.redirect('/users'))
    .catch(error => console.log(`Error while deleting a user: ${error}`));
});

// ****************************************************************************************
// GET route for displaying the user details page
// ****************************************************************************************

router.get('/users/:someUserId', (req, res) => {
  const { someUserId } = req.params;
  User.findById(someUserId)
    .then(foundUser => {
      // console.log('Did I find a user?', founUser);
      res.render('user-details', foundUser);
    })
    .catch(err =>
      console.log(`Err while getting the specific user from the  DB: ${err}`)
    );
});

module.exports = router;
