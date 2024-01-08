const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
       type: String,
       required : true
    }
});

const loginModel = mongoose.mongoose.model("employee", loginSchema);

module.exports = loginModel;