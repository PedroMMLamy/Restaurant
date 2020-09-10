var mongoose = require("mongoose");
const { Schema, model } = mongoose;



const reservationSchema = new Schema(
    {
  date: Date,
  table:{ 
    type: Schema.Types.ObjectId,
    ref: "Table"
},
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});


module.exports = model('Reservation', reservationSchema);
