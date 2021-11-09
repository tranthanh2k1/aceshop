const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adress:{
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", ServiceSchema);
