var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Reservation = require("../models/reservation.model");
const Table = require("../models/table");

const Islogged =((req, res, next) => {
  if(req.session.currentUser) {
    next();
  }
  else {
    res.redirect('/');
  }
});


router.get('/reservation', Islogged , (req ,res ) => {
  res.render('reservation')
});

router.post("/reservation/create", (req, res, next) =>  {
  Reservation.find({ $and: [ {date: req.body.date},{table: tableId} ]
  }).then( days => {
    if(!days.length) {
      Reservation.create({date: date, table: tableId, user: userId})
      let day = days[0];
        day.tables.forEach(table => {
          if (day == req.body.table) {
            Table.find = new Reservation({
              username: req.session.currentUser.username,
              cellPhone: req.session.currentUser.cellPhone,
              email: req.session.currentUser.email,
              tableNumber:req.session.currentUser.tableNumber,
              member:req.session.currentUser.member,
              reservationHour:req.session.currentUser.reservationHour,
              amount: req.session.currentUser.amount,
            });
            table.isAvailable = false;
            day.save(err => {
              if (err) {
                console.log(err);
              } else {
                console.log("Reserved");
                res.status(200).send("Added Reservation");
              }
            });
          }
        });
      } else {
      console.log("Day not found");
      return res.redirect('/');
    }
    })
});


module.exports = router;
