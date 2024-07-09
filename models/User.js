const mongoose = require('mongoose');
const thoughtSchema = require('./Thought')

const User = mongoose.model('User', new mongoose.Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            }, message: 'Invalid email address format',
        }
    },
    thoughts: [thoughtSchema], 
    friends: { //need to work on
        friendCount: [] 
    }
}));

module.exports = User;