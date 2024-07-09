const mongoose = require('mongoose');
const thoughtSchema = require('./Thought')
const { Schema } = require('mongoose');

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
        match: [/.+@.+\..+/, 'must match valid email'],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }], 
    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}));

module.exports = User;