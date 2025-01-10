const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: 'string',
        required: true,
    },
    username: {
        type: 'string',
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: 'string',
        required: true,
        trim: true,
        unique: true
    },
    avatar: {
        type: 'string',
        trim: true,
    },
    siteWeb: {
        type: 'string',
        trim: true,
    },
    description: {
        type: 'string',
        trim: true,
    },
    password: {
        type: 'string',
        required: true,
        trim: true,
    },
    createAt: {
        type: 'date',
        default: Date.now(),
    }
})

module.exports = mongoose.model('User', UserSchema);