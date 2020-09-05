var mongoose = require("mongoose");
const { Schema, model } = mongoose;



const daySchema = new Schema(
    {
  date: Date,
  tables:{ 
    type: Schema.Types.ObjectId,
    rel: "Table"
},
});


module.exports = model('Day', daySchema);
