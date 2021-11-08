const Booking = require("../models/booking.js");

exports.bookingID = (req, res, next, id) => {
  Booking.findById(id, (err, booking) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "không tìm thấy dịch vụ nào",
      });
    }
    req.booking = booking;
    next();
  });
};

exports.create = async (req, res) => {
  const { name, email, address, phone ,user_id, require_time , correction_time ,description} = req.body;

  if (!name) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }
  
  try {
    const newBooking = new Booking({
      name,
      email,
      address,
      phone,
      require_time,
      correction_time,
      user_id,
      description,

    });

    newBooking.save((err, booking) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Không thể đặt lịch",
        });
      }

      res.status(200).json({
        success: true,
        message: "Đặt lịch thành công",
        booking,
      });
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Lỗi server",
    });
  }
};
