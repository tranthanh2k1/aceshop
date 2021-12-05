import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../../../api/auth";
import { API } from "../../../../constants";
import axios from "axios";

const WaitForComfirmationPage = () => {
  const [listAllBookingUser, setListAllBookingUser] = useState([]);

  const { token } = isAuthenticated();
  useEffect(() => {
    const getListBookingUser = async () => {
      const data = await axios.get(`${API}/booking/user/status`, {
        params: {
          status: "Wait for confirmation",
        },
        headers: {
          Accept: "appliaction/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setListAllBookingUser(data.data.listBooking);
    };

    getListBookingUser();
  }, []);

  const handleCancel = () => {
    
  }
  const remove = async (id) =>{
    console.log(token,999)
    const data = await axios.put(`${API}/booking/updateStatus/${id}`, {
        params: {
          status: "Wait for confirmation",
        },
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  }
  console.log("aaaa", listAllBookingUser);
  return (
    <div>
      {listAllBookingUser.map((item) => (
        <div class="booking-box">
          <p class="status">Trạng thái : {item.status} </p>
          <div class="content">
            <div class="desc">
              <div class="desc-content">
                <p class="desc-product">
                  <>
                    <option>Họ tên: {item.name}</option>
                  </>
                </p>
                <p class="title-product">Địa chỉ: {item.address}</p>
                <p class="title-product">
                  Lỗi máy: {item.description_error}
                </p>
              </div>
            </div>
          </div>
          <div class="product-fix-back">
            <div class="fix-back">
              <button class="btn active">{item.repair_time}</button>
              <button class="btn active">{item.correction_time}</button>
              <button
                style={{ background: `#01D28E`, color: `white` }}
                class="btn "
              >
                Liên hệ
              </button>
              <button onClick={()=>{
                console.log(item._id,item.id,999)
                remove(item._id)
              }} style={{ background: `red`, color: `white` }} className="btn">
                Huỷ lịch
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};


export default WaitForComfirmationPage;
