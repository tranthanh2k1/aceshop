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
  console.log("data", req.body);

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
                <h4 style="color: #0085ff">MAIL THÔNG BÁO ĐƠN ĐẶT LỊCH</h4>
                <span style="color: black">Họ và Tên:${name}</span>
                <span style="color: black">Email: ${email}</span>
                <span style="color: black">Số điên thoại:${phone}</span>
                <span style="color: black">Địa chỉ:${address}</span>
                <span style="color: black">Dịch vụ sửa chữa:${service_id}</span>
                <span style="color: black">Ngày sửa:${correction_time}</span>
                <p> Cảm ơn bạn đã đặt lịch sửa chữa tại cửa hàng chúng tôi, chúc bạn có một ngày mới vui vẻ !!</p>
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
}

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

  Booking.find().exec((err, booking) => {
    res.status(200).json(booking)
  });
}

exports.listBookingUser = async (req, res) => {
  const params = req.params.userId;
  listBookingUser = await Booking.find(
    { user_id: params },
  );
  if (!listBookingUser) {
    return res.status(401).json({
      success: false,
      message: "List danh sách không thành công",
    });
  }
  res.status(200).json({
    success: true,
    listBookingUser,
  })
};

exports.listBookingUserStatus = async (req, res) => {
  const params = req.params.userId;
  const { status } = req.body;


  listBookingUserStatus = await Booking.find(
    { user_id: params },
  );

  if (!listBookingUserStatus) {
    return res.status(401).json({
      success: false,
      message: "List danh sách không thành công",
    });
  }
  res.status(200).json({
    success: true,
    listBookingUserStatus,
  });

};

