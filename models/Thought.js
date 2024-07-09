const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    //need to put reaction id with objectId
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdOn: { type: Date, default: Date.now }
})

const Thought = mongoose.model('Note', new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
    createdOn: { type: Date, default: Date.now},
    username: { type: String, required: true },
    reactions: [reactionSchema]
}));



module.exports = Thought;