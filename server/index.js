const express = require('express');
const mongoose = require('mongoose');
const loginModel = require('./Models/login')
const cors = require('cors');



const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/logindetails");



app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find a user in the database based on the provided username
        const user = await loginModel.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Ensure both passwords are of type string before comparison
        const storedPassword = String(user.password); // Convert stored password to string
        const incomingPassword = String(password); // Convert incoming password to string

        // Check if the password matches
        if (storedPassword !== incomingPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Successful login
        return res.status(200).json({ message: 'Login successful',username });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});


app.post('/Signup', async (req, res) => {
    try {
        // Check if the username already exists
        const existingUser = await loginModel.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Password validation: at least 6 characters, 2 digits, and 2 uppercase letters
        const password = req.body.password;
        const digitCount = (password.match(/\d/g) || []).length;
        const uppercaseCount = (password.match(/[A-Z]/g) || []).length;

        if (password.length < 6 || digitCount < 2 || uppercaseCount < 2) {
            return res.status(400).json({
                error: 'Password must be at least 6 characters long with at least 2 digits and 2 uppercase letters'
            });
        }

        // If username is unique and password meets criteria, create the user
        const newUser = await loginModel.create(req.body);
        res.json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


  




app.listen(3000,()=>{
    console.log("server is running on 3000");
})