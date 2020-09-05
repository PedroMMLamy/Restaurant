const express = require('express');
const router = express.Router();

// ********* require user model in order to use it *********
const User = require('../models/User.model');


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