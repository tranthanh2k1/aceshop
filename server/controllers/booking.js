const Booking = require("../models/booking.js");
const nodemailer = require("nodemailer");

exports.create = async (req, res) => {
  const {
    name,
    email,
    address,
    phone,
    user_id,
    repair_time,
    correction_time,
    description_error,
    service_id,
  } = req.body;
  if (
    !name ||
    !email ||
    !address ||
    !phone ||
    !repair_time ||
    !correction_time ||
    !description_error
  ) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }

  function makeid() {
    var text = "ACE";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  try {
    const newBooking = new Booking({
      code_bill: makeid(),
      name,
      email,
      address,
      phone,
      repair_time,
      correction_time,
      user_id,
      description_error,
      status: "Wait for confirmation",
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

exports.updateBookingStatusAdmin = async (req, res) => {
  const bookingId = req.params.bookingId;

  const { status } = req.body;

  const getBookingDB = await Booking.findOne({ _id: bookingId });

  let updatedStatusBookingAdmin;

  switch (status) {
    case "Wait for confirmation":
      return res.status(401).json({
        success: false,
        message: "Không thể update status đơn đặt lịch này",
      });
    case "Confirm":
      if (getBookingDB.status === "Wait for confirmation") {
        updatedStatusBookingAdmin = {
          status,
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Update status booking fail",
          });
        }

        res.status(200).json({
          success: true,
          message: "Update status booking success",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể update status này",
        });
      }
    case "Fixing":
      if (getBookingDB.status === "Confirm") {
        updatedStatusBookingAdmin = {
          status,
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Update status booking fail",
          });
        }

        res.status(200).json({
          success: true,
          message: "Update status booking success",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể update status này",
        });
      }
    case "Successful fix":
      if (getBookingDB.status === "Fixing") {
        updatedStatusBookingAdmin = {
          status,
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Update status booking fail",
          });
        }

        res.status(200).json({
          success: true,
          message: "Update status booking success",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể update status này",
        });
      }
    case "Cancellation of booking":
      if (
        getBookingDB.status === "Wait for confirmation" ||
        getBookingDB.status === "Confirm" ||
        getBookingDB.status === "Fixing" ||
        getBookingDB.status === "Successful fix"
      ) {
        updatedStatusBookingAdmin = {
          status,
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Update status booking fail",
          });
        }

        res.status(200).json({
          success: true,
          message: "Update status booking success",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể update status này",
        });
      }
    default:
      return res.status(400).json({
        success: false,
        message:
          "Không tìm thấy trạng thái nào trùng với trạng thái đơn đặt lịch",
      });
  }
};

exports.listBooking = (req, res) => {
  let page = req.query.page;

  const page_size = 5;

  if (page) {
    page = parseInt(page);
    if (page < 1) {
      page = 1;
    }

    const qtySkip = (page - 1) * page_size;

    Booking.find({})
      .sort({ _id: -1 })
      .skip(qtySkip)
      .limit(page_size)
      .exec((err, booking) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy đơn đặt lịch nào",
          });
        }

        Booking.countDocuments({}).then((total) => {
          const totalPage = Math.ceil(total / page_size);

          res.status(200).json({
            success: true,
            message: "Lấy tất cả danh sách đơn đặt lịch thành công",
            booking,
            totalPage,
          });
        });
      });
  } else {
    Booking.find({})
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
  }
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

/*
 * Module này sẽ trả về danh sách tất cả đơn đặt lịch của user đó
 */
exports.getListBookingUser = async (req, res) => {
  const user = req.userId;

  Booking.find({ user_id: user._id }).exec((err, listBooking) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Không tìm thấy đơn đặt lịch nào",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lấy danh sách đơn đặt lịch thành công",
      listBooking,
    });
  });
};

/*
 * Module này sẽ trả về danh sách tất cả đơn đặt lịch của user đó theo trạng thái
 */
exports.getBookingStatusUser = (req, res) => {
  const user = req.userId;

  const { status } = req.body;

  // console.log(status);

  if (
    status === "Wait for confirmation" ||
    status === "Confirm" ||
    status === "Fixing" ||
    status === "Successful fix" ||
    status === "Cancellation of booking"
  ) {
    Booking.find({ status, user_id: user._id }).exec((err, listBooking) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Không tìm thấy đơn đặt lịch nào",
        });
      }

      res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn đặt lịch thành công",
        listBooking,
      });
    });
  } else {
    return res.status(400).json({
      success: false,
      message:
        "Không tìm thấy trạng thái nào trùng với trạng thái đơn đặt lịch",
    });
  }
};

exports.listAllBookingStatus = (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }

  if (
    status === "Wait for confirmation" ||
    status === "Confirm" ||
    status === "Fixing" ||
    status === "Successful fix" ||
    status === "Cancellation of booking"
  ) {
    Booking.find({ status })
      .sort({ _id: -1 })
      .exec((err, listBookingStatus) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy đơn hàng nào",
          });
        }

        res.status(200).json({
          success: true,
          message: "Lấy danh sách đơn hàng theo trạng thái thành công",
          listBookingStatus,
        });
      });
  } else {
    return res.status(401).json({
      success: false,
      message: "Không tìm thấy trạng thái nào trùng với đơn hàng",
    });
  }
};

exports.searchBookingUser = async (req, res) => {
  const user = req.userId;

  const search = req.query.code;

  if (search) {
    const bookingSearch = await Booking.findOne({
      code_bill: search,
      user_id: user._id,
    });

    if (!bookingSearch) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy đơn đặt lịch nào",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tìm kiếm đơn đặt lịch thành công",
      bookingSearch,
    });
  } else {
    Booking.find({}).exec((err, listBooking) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Không tìm thấy đơn đặt lịch nào",
        });
      }

      res.status(200).json({
        success: true,
        message: "Tìm kiếm đơn đặt lịch thành công",
        listBooking,
      });
    });
  }
};
