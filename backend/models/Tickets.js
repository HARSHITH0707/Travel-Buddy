const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    destinationName: {
        type: String,
        required: true
    },
    hotel: {
        type: String,
        required: true
    },
    transport: {
        type: String,
        required: true
    },
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('tickets', TicketSchema);
