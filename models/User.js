const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            }, message: 'Invalid email address format',
    }},
    thoughts: { thoughtCount: [] }, 
    friends: { friendCount: [] }
}));

module.exports = User;