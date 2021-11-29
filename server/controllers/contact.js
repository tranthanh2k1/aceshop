const Contact = require("../models/contact.js");

exports.create = async (req, res) => {
    const {
        name,
        email,
        phone,
        description,
    } = req.body;

    if (!name) {
        return res.status(401).json({
            success: false,
            message: "Bạn cần nhập đầy đủ thông tin",
        });
    }

    const newContact = new Contact({
        name,
        email,
        phone,
        description,
        status: "Waiting for reply",
    });

    newContact.save((err, contact) => {
        if (err) {
            console.log("error", err);
            return res.status(401).json({
                success: false,
                message: "Không thể tạo phiếu liên hệ",
            });

        }
    })
}