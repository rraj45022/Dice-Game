const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
       type: String,
       required : true
    },
    scores: [{
        score: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

const loginModel = mongoose.mongoose.model("employees", loginSchema);

module.exports = loginModel;