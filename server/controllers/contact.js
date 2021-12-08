const { Contact } = require("../routers/contact.js");

exports.createContact = (req, res) => {
  const { userName, phone, address, email, contact } = req.body;
  if (!userName || !phone || !address || !email || !contact) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin liên hệ",
    });
  }
  try {
    const newContact = new Contact({
      userName,
      phone,
      address,
      email,
      contact,
    });
    newContact.save((err, contact) => {
      if (err) {
        return res.status(401).json({
          success: false,
          error: "Không thể thêm liên hệ",
        });
      }
      res.status(400).json({
        success: true,
        message: "Gửi liên hệ thành công",
        contact,
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi server",
    });
  }
};
