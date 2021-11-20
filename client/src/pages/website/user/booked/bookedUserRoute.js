import React from "react";
import { Link } from "react-router-dom";

const BookedUserPage = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/user/booked">Tất cả</Link>
        </li>
        <li>
          <Link to="/user/booked/type1">Chờ xác nhận</Link>
        </li>
        <li>
          <Link to="/user/booked/type2">Đặt lịch thành công</Link>
        </li>
        <li>
          <Link to="/user/booked/type3">Đang sửa</Link>
        </li>
        <li>
          <Link to="/user/booked/type4">Sửa thành công</Link>
        </li>
        <li>
          <Link to="/user/booked/type5">Hủy lịch</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default BookedUserPage;
