const express = require('express');
const router = express.Router();

const Booking = require('../models/Booking.model');

router.get('/profile', (req, res, next) => {
  res.render("profile");
})
router.post("/table-search", (req, res, next) => {
  const { number } = req.body;
  Table.find({ number: { $regex: new RegExp(table), $options: "i" }, booked : false })
    .then(tables => {
      const searchResults = tables;
      res.render("table-search-results", { searchResults });
    })
    .catch(err => console.log("Error while searching table", err)
    );
});

//GET booking form ADD THE ID
router.get("/booking-form/:table/:user/:tableId/:AdminRef", (req, res, next) => {
    const table = req.params.table;
    const UserId = req.params.userId;
    const AdminId = req.params.adminRef;
    // show booking form to get Admin info 
    const AdminInfo = TableBooking.findById(tableId).populate("adminRef")
  }
);

module.exports = router;