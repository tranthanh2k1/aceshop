const Booking = require("../models/booking.js");
const nodemailer = require("nodemailer");

exports.create = async (req, res) => {
  const {
    name,
    email,
    address,
    phone,
    user_id,
    require_time,
    correction_time,
    description_error,
    service_id,
  } = req.body;

  if (
    !name ||
    !email ||
    !address ||
    !phone ||
    !require_time ||
    !correction_time ||
    !description_error
  ) {
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
      description_error,
      status: "Wait for confirmoation",
      service_id,
    });

    newBooking.save((err, booking) => {
      if (err) {
        console.log("error", err);
        return res.status(401).json({
          success: false,
          message: "Không thể đặt lịch",
        });
      }

      // send email
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });

      let content = "";
      content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
                <span style="color: black">${name}Đây là mail test</span>
            </div>
        </div>
    `;

      let mainOptions = {
        from: "NQH-Test nodemailer",
        to: email,
        subject: "Test Nodemailer",
        html: content,
      };
      transporter.sendMail(mainOptions);

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

exports.updateStatusAdmin = async (req, res) => {
  const params = req.params.id;
  const { status } = req.body;

  let updatedStatusBooking = {
    status,
  };

  updatedStatusBooking = await Booking.findOneAndUpdate(
    { _id: params },
    updatedStatusBooking,
    { new: true }
  );

  if (!updatedStatusBooking) {
    return res.status(401).json({
      success: false,
      message: "Update trạng thái không thành công",
    });
  }

  res.status(200).json({
    success: true,
    updatedStatusBooking,
  });
};

exports.listBooking = (req, res) => {
  Booking.find()
    .sort({ _id: -1 })
    .exec((err, booking) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Không tìm thấy đơn đặt lịch nào",
        });
      }
      res.status(200).json({
        success: true,
        message: "Lấy tất cả danh sách đơn đặt lịch thành công",
        booking,
      });
    });
};

exports.detailBooking = (req, res) => {
  const id = req.params.id;

  Booking.findById(id, (err, detailBooking) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Không tìm thấy đơn đặt lịch nào",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lấy chi tiết đơn đặt lịch thành công",
      detailBooking,
    });
  });
};

exports.getBookingStatusUser = (req, res) => {
  const userId = req.params.userId;

  Booking.find({ user_id: userId, status: "Wait for confirmoation" }).exec(
    (err, data) => {
      res.status(200).json(data);
    }
  );
};

// api dành cho user
exports.getListBookingUser = async (req, res) => {
  const userId = req.params.userId;

  const listBookingUser = await Booking.find({
    user_id: userId,
  });

  res.status(200).json({
    success: true,
    message: "Lấy danh sách đơn đặt lịch thành công",
    listBookingUser,
  });
};
