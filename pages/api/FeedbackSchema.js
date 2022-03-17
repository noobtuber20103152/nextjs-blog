const mongoose = require("mongoose");
const { Schema } = mongoose;
const feedback = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const FeedbackData = mongoose.models.feedback || mongoose.model("feedback", feedback)
module.exports = FeedbackData;