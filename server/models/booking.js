const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email:{
        type: String,
        required: true, 
    },
    phone:{
      type:String,
      required: true,
  },
    address:{
        type:String,
        required: true,
    },
    require_time:{
        type:Date,
        required: true,
    },
    correction_time:{
        type:String,
        required: true,
    },  
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Booking", BookingSchema);