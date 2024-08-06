const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
});

// trackSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         delete returnedObject.hashedPassword;
//     }
// });

module.exports = mongoose.model('Track', trackSchema);