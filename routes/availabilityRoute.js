var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Reservation = require("../models/reservation.model");
const Tables = require("../models/table")

router.post("/", function(req, res, next) {
  console.log("request attempted");

  console.log(req.body);
  const dateTime = new Reservation(req.body.date);

  Reservation.find({ date: dateTime }, (err, docs) => {
    if (!err) {
      if (!docs.length) {
        // Record already exists
        console.log("Record exists. Sent docs.");
        res.status(200).send(docs[0]);
      } else { 
        // Searched Reservation does not exist and we need to create it
    
      Tables.find({}).then(allTables => {
        const day = new Day({
          date: dateTime,
          tables: allTables
        });
        Reservation.save(err => {
          if (err) {
            res.status(400).send("Error saving new date");
          } else {
            // Saved date and need to return all tables (because all are now available)
            console.log("Created new datetime. Here are the default docs");
            Reservation.find({ date: dateTime }, (err, docs) => {
              err ? res.sendStatus(400) : res.status(200).send(docs[0]);
            });
          }
        });
      })

      }
    }
  });
});

module.exports = router;
