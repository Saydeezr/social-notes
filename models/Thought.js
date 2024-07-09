const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const Thought = mongoose.model('Note', new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
    createdOn: { type: Date, default: Date.now},
    username: { type: String, required: true }
    //need to add/'join' reactionsSchema here
}));

const reactionSchema = new mongoose.Schema({
    reactionId: { _id: ObjectId , default: ObjectId},
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdOn: { type: Date, default: Date.now }
})


module.exports = Thought;