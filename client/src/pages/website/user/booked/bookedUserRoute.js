import React from "react";
import { Link } from "react-router-dom";

const BookedUserPage = ({ children }) => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="booking-main">
            <div className="main-left">
              <div className="profile-user">
                <div className="avt-user">
                  <i className="fal fa-user icon"></i>
                </div>
                <div className="desc-user">
                  <p className="user-name">ACE Shop</p>
                  <p className="user-edit">
                    <span className="icon">
                      <i className="fas fa-pen"></i>
                    </span>{" "}
                    Sửa hồ sơ
                  </p>
                </div>
              </div>
              <div className="list-setting-desc">
                <ul>
                  <li>
                    <span className="icon1">
                      <i className="fal fa-user-alt"></i>
                    </span>
                    Tài khoản của tôi
                  </li>
                  <li>
                    <span className="icon2">
                      <i className="fal fa-file-invoice"></i>
                    </span>
                    Hóa đơn
                  </li>
                  <li>
                    <span className="icon3">
                      <i className="fal fa-bell"></i>
                    </span>
                    Thông báo
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-right">
              <div className="booking-nav">
                {/* <a className="active" href=""> */}
                <Link to="/user/booked">Tất cả</Link>
                {/* </a> */}
                {/* <a href=""> */}
                <Link to="/user/booked/type1">Chờ xác nhận</Link>
                {/* </a> */}
                {/* <a href=""> */}
                <Link to="/user/booked/type2">Xác nhận</Link>
                {/* </a> */}
                {/* <a href=""> */}
                <Link to="/user/booked/type3">Đang sửa</Link>
                {/* </a> */}
                {/* <a href=""> */}
                <Link to="/user/booked/type4">Sửa thành công</Link>
                {/* </a> */}
                {/* <a href=""> */}
                <Link to="/user/booked/type5">Hủy lịch</Link>
                {/* </a> */}
              </div>
              <div className="form">
                <span>
                  <i className="far fa-search"></i>
                </span>
                <input type="text" placeholder="Tìm kiếm theo Mã hóa đơn" />
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedUserPage;
