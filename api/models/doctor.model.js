
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Doctor = new Schema({
  full_name: {
    type: String
  },
  phone: {
    type: String
  },
  date:{
    type: Object
  },
  hour:{
      type: Number
  },
  minutes:{
      type: Number
  },
  dateagain: {
    type: String
  },
  time:{
      type: String
  },
  morphedphone:{
      type: String
  }
},{
    collection: 'doctor'
});

module.exports = mongoose.model('Doctor', Doctor);