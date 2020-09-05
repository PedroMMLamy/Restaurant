const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tableSchema = new Schema(
    {
        TableNumber: Number,
        size: Number,
        booked: Boolean,
        bookedBy: 
        {
            type: Schema.Types.ObjectId,
            rel: "User"
        },
    },
    {
        timestamps: true
    }
);

module.exports = model('Table', tableSchema);