const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//subdocument to be used in Thought model
const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId, default: Schema.Types.ObjectId },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdOn: { type: Date, default: Date.now }
})

const Thought = mongoose.model('Thought', new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
    createdOn: { type: Date, default: Date.now},
    username: { type: String, required: true },
    reactions: [reactionSchema]
}));

module.exports = Thought;