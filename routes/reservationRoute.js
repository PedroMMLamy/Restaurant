var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Reservation = require("../models/Reservation.model");
const Table = require("../models/Table.model");

const Islogged =((req, res, next) => {
  if(req.session.currentUser) {
    next();
  }
  else {
    res.redirect('/');
  }
});

// ****************************************************************************************
// GET route to display all the tables
// ****************************************************************************************

router.get('/list-of-tables', Islogged , (req ,res ) => {
  Table.find({ IsAvailable: { $ne: false } })
    .then(allTheTablesFromDB => {
      console.log(allTheTablesFromDB);
      res.render('list-of-tables', { tables: allTheTablesFromDB });
    })
    .catch(err =>
      console.log(`Err while getting the tables from the  DB: ${err}`)
    );
});


router.get('/reservation/:id', Islogged , (req ,res ) => {
  const { id } = req.params
  res.render('reservation', 
  { 
    tableId : id,
    firstName: req.session.currentUser.firstName,
    lastName: req.session.currentUser.lastName,
    cellPhone: req.session.currentUser.cellPhone,
    username: req.session.currentUser.username,
  })
});


router.post("/reservation/:id", (req, res) =>  {
  const { datebooking }  = req.body;
  const { id } = req.params;
      Reservation.create(
        {
        date: datebooking, 
        table: id, 
        user: req.session.currentUser._id
       })
    .then(() => {
      Table.findByIdAndUpdate(id,{IsAvailable: false})
      .then(updatedTable => {
       return  res.redirect('/homepage')
      })
      .catch(err => console.log(err))
    })
    .catch(error => `Error while creating a new booking: ${error}`);
});



module.exports = router;

