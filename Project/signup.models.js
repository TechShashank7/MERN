const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            minLength: 6,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const signup=mongoose.model("signup", signupSchema); 
module.exports = signup;