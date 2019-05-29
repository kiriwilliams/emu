const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    date: { type: Date },
    user: { type: String, required: true },
    content: { type: String, required: true },
    mood: {
        color: { 
            r: { type: Double },
            g: { },
            b: { }
        },
        name: {
            type: String, required: true
        }
    },
    tags: [{
        name: { type: String, required: true }
    }]
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;