const mongoose = require('mongoose');
const { Schema, model } = mongoose;

var reservationSchema = new mongoose.Schema({
    tableNumber: Number,
    member: Number,
    reservationHour: Number,
    amount: Number,
    manager:String,
    managerApproved:Boolean,
    bookedBy:[ {
            type: Schema.Types.ObjectId,
            rel: "User"
        }],
   });

   module.exports = model('Reservation', reservationSchema);