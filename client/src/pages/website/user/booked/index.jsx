import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../../api/auth'
import axios from 'axios'
import { API } from '../../../../constants'
import Moment from 'react-moment'

const ListAllBookedUserPage = () => {
  const [listAllBookingUser, setListAllBookingUser] = useState([])

  const { token } = isAuthenticated()

  useEffect(() => {
    const getListBookingUser = async () => {
      const { data } = await axios.get(`${API}/booking/user`, {
        headers: {
          Accept: "appliaction/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })

      setListAllBookingUser(data.listBooking)
    }

    getListBookingUser()
  }, [])

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
              <button type="time" class="btn active">
                Thời gian sửa: <Moment format="hh:mm' DD/MM/YYYY">
                  {item.repair_time}
                </Moment>
              </button>
              <button class="btn active">Ca sửa: {item.correction_time}</button>
              <button
                style={{ background: `#01D28E`, color: `white` }}
                class="btn "
              >
                Liên hệ
              </button>
              <button style={{ background: `red`, color: `white` }} class="btn">
                Huỷ lịch
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ListAllBookedUserPage
