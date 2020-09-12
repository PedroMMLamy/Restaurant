const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tableSchema = new Schema(
    {
        TableNumber: Number,
        capacity: Number,
        IsAvailable: Boolean,
        bookedby:{ 
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        created_at: {
            type: Date, 
            default:Date.now }
        }
);

module.exports = model('Table', tableSchema); 

