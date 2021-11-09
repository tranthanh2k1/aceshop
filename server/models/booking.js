const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    require_time: {
      type: Date,
      required: true,
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    correction_time: {
      type: String,
      // required: true,
    },
    description_error: {
      type: String,
      // required: true,
    },
    status: {
      type: String,
      enum: [
        "Wait for confirmoation",
        "Successful appointment",
        "Fixing",
        "Completing an appointment",
        "Cancellation of booking",
      ],
    },
    service_id: {
      type: mongoose.Types.ObjectId,
      ref: "Service",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
