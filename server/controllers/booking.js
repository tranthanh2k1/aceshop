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
  const { name, email, address, phone ,user_id, require_time , correction_time ,description, status} = req.body;

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
      status:"Wait for confirmoation",
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
  exports.update = async (req, res) => {
    const { name, email, address, phone ,user_id, require_time , correction_time ,description, status} = req.body;
  
    if (!name) {
      return res.status(401).json({
        success: false,
        message: "Bạn cần nhập đầy đủ thông tin",
      });
    }
  
    try {
      let updatedService = {
        name,
        parent_id: parent_id || null,
      };
  
      const serviceUpdateCondition = { _id: req.params.id };
  
      updatedService = await Service.findOneAndUpdate(
        serviceUpdateCondition,
        updatedService,
        { new: true }
      );
  
      if (!updatedService) {
        return res.status(401).json({
          success: false,
          message: "Update dịch vụ không thành công",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Update dịch vụ thành công",
        updatedService,
      });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        success: false,
        message: "Lỗi server",
      });
    }
  };
};
