const express = require("express");
const messagesRouter = express.Router();
const User = require("./../models/User");
const Booking = require("./../models/Booking");
const TableBooking = require("./../models/Booking");

messagesRouter.get("/", (req, res) => {
  const TableBooking = Booking.find({
    adminRef: req.session.currentUser._id
  }).populate("tableRef").populate("userRef")
  const TableBookingRef = Booking.find({
    TableBookingRef: req.session.currentUser._id
  }).populate("BookingRef").populate("adminRef")
  
  Promise.all([TableBooking, TableBookingRef])
    .then(bookingData => {
      const data = {
        TableBooking: [],
        TableBookingRef: []
      };
      const TableBooking = bookingDate[0];
      userBooking.forEach(TableBooking => {
        var bookingDate = booking.created_at;

        var bookingMonth = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ][bookingDate.getMonth()];
        
        var bookingReadableDate =
        month.slice(0,3) + " " + bookingDate.getDate() + "th " + bookingDate.getFullYear();
        booking.bookingReadableDate = bookingReadableDate 
        console.log(booking)

        } 
        data.booking.push({bookingDate, bookingReadableDate}) 
      });
    
    })


messageRouter.get("/message/:bookingconfirmationId", (req, res) => {
  const bookingId = req.params.bookingconfirmationId
  console.log(bookingId)
  TableBooking.findById(bookingId)
  .populate("tableRef").populate("adminRef").populate("userRef")
  .then( (data) => {
    data.addedMessage = "Table Tooked!"
    res.render("Booking Complete", data)
    console.log(data)
  })
  .catch( (err) => console.log(err));
})
module.exports = messageRouter;

/*const express = require("express");
const messagesRouter = express.Router();
const User = require("./../models/User");
const Booking = require("./../models/Booking");
const TableBooking = require("./../models/Booking");

messagesRouter.get("/", (req, res) => {
  const TableBooking = Booking.find({
    adminRef: req.session.currentUser._id
  }).populate("tableRef").populate("userRef")
  const TableBookingRef = Booking.find({
    TableBookingRef: req.session.currentUser._id
  }).populate("BookingRef").populate("adminRef")
  
  Promise.all([TableBooking, TableBookingRef])
    .then(bookingData => {
      const data = {
        TableBooking: [],
        TableBookingRef: []
      };
      const TableBooking = bookingDate[0];
      userBooking.forEach(TableBooking => {
        var bookingDate = booking.created_at;

        var bookingMonth = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ][bookingDate.getMonth()];
        
        var bookingReadableDate =
        month.slice(0,3) + " " + bookingDate.getDate() + "th " + bookingDate.getFullYear();
        booking.bookingReadableDate = bookingReadableDate 
        console.log(booking)

        } 
        data.booking.push({bookingDate, bookingReadableDate}) 
      });
    
    })


messageRouter.get("/message/:bookingconfirmationId", (req, res) => {
  const bookingId = req.params.bookingconfirmationId
  console.log(bookingId)
  TableBooking.findById(bookingId)
  .populate("tableRef").populate("adminRef").populate("userRef")
  .then( (data) => {
    data.addedMessage = "Table Tooked!"
    res.render("Booking Complete", data)
    console.log(data)
  })
  .catch( (err) => console.log(err));
})
module.exports = messageRouter;