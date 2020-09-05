var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../../models/day");
const Table = require("../../models/table");


router.post("/", (req, res, next) =>  {
  Day.find({ date: req.body.date }).then( days => {
    if(!days.length) {
      let day = days[0];
        day.tables.forEach(table => {
          if (table._id == req.body.table) {
            // The correct table is table
            Table.find = new Reservation({
              username: req.body.username,
              cellPhone: req.body.cellPhone,
              email: req.body.email
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
