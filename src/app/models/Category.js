const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  name: {
    type: String,
    maxLength: 255,
    required: true,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Category', Category);
