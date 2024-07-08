const mongoose = require('mongoose');

const Note = mongoose.model('Note', new mongoose.Schema({
    name: { type: String, required: true },
    content: String
}));

module.exports = Note;