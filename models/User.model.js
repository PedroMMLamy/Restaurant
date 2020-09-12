const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        username: {
             type: String,
             trim: true,
             required: [true, 'Username is required.'],
             Unique: [true, 'This Username is already exist.']
       },
        firstName: 
            {
            type: String,
         //   required: true
        },
        lastName: 
           {
           type: String,
          // required: true
        },
        encryptedPassword: 
         {
         type: String,
         required: true
        },
        role: { 
            type: String, 
            enum: ['admin', 'restricted'], 
            required: false
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
      // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
            unique: true,
            lowercase: true,
            trim: true
        },
        cellPhone: {
            type: Number,
            required: true
    },
    created_at: {
        type: Date, 
        default:Date.now }
    });



module.exports = model('User', userSchema);

