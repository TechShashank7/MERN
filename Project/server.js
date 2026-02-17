const express = require("express");
const mongoose = require("mongoose");
const Signup=require('./models/signup.models.js');
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json()); //Middleware between our app and mongodb

//GET ALL USERS
app.get(`/api/signup`, async (req, res) => {
    try {
        const users = await Signup.find();

        if (user.length===0){
            return res.status(404).json({ message: "Username should be greater than 6 characters"});
        }
        return res.status(200).json({message: "User data found"});
    } catch (error) {
        return res.status(500).json({ message: "No user found"});
    }
});

//POST
app.post(`/api/signup`, async (req, res) => {
    try {
        const {name, email, username, password} = req.body;

        //ALL FIELDS ARE REQUIRED
        if (!name || !email || !username || !password) {
            return res.status(400).json({ message: "All fields are required"});
        }   
        //PASSWORD SHOULD BE GREATER THAN 6 CHARACTERS
        if (password.length < 6) {
            return res.status(400).json({ message: "Password should be greater than 6 characters"});
        }

        const newUser = new Signup({
            name,
            email,
            username,
            password
        });

        await newUser.save();
        return res.status(201).json({ message: "new User created successfully"});
    }
    catch (error) {
        return res.status(500).json({ message: "Error creating new user"});
    }
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.err("Error connecting to MongoDB: ", err.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});