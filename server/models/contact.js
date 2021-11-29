const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
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
        description: {
            type: String,
            // required: true,
        },
        status: {
            type: String,
            enum: [
                "Waiting for reply",
                "Reply ",
            ]
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
