const { Quote } = require("../models/quote.js");

exports.createQuote = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      status: false,
      message: "Bạn cần nhập tên giá liên hệ !!",
    });
  }
  try {
    const newQuote = Quote.findOne({ name });
    newQuote.save((err, data) => {
      if (err) {
        return res.status(401).json({
          success: false,
          error: "Không thể thêm báo giá",
        });
      }
      res.status(200).json({
        success: true,
        message: "Thêm thành công báo giá",
        data,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi server",
    });
  }
};
