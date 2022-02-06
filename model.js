const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true
    },
    phoneNumber: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    }
}, { collection: 'contactForm'});

const contactFormModel = mongoose.model('contactFormSchema', contactFormSchema);
module.exports = contactFormModel;