const mongoose = require('../MongoDB/mongoConnect.js');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        require:true,
    },

    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },

    pass:{
        type: String,
        required: true,
        select: false,
    },
})

const User = mongoose.model('User', UserSchema);
module.exports = User;