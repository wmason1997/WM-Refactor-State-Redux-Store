const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://williamcmason1997:Ilikeextracredit100!@cluster0.r3t9zgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
