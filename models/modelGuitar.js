const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  color: {
    type: [String],
  },
  urlImg: {
    type: String,
  },
});

module.exports = mongoose.model("DataGuitar", dataSchema);
