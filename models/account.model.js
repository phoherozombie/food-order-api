const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: String, required: true }
});

module.exports = Account = mongoose.model('accounts', AccountSchema);