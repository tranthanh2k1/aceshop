import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../../../api/auth'
import axios from 'axios'
import { API } from '../../../../constants'

const ListBookedFixingUser = () => {
    const [listAllBookingUser, setListAllBookingUser] = useState([])

    const { token } = isAuthenticated()

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.post(`${API}/booking/user/status`, { status: "Fixing" }, {
                headers: {
                    Accept: "appliaction/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(data)

            setListAllBookingUser(data.listBooking)
        }

        getListBookingUser()
    }, [])

    return (
        <div>
            <div class="booking-box">
                        <p class="status">Trạng thái :Đang sửa</p>
                        <div class="content">
                            <div class="desc">
                                <div class="desc-content">
                                    <p class="desc-product">Họ tên: Trương Đình Tuyển</p> 
                                    <p class="title-product">Địa chỉ: 63 Lê Đức Thọ - Mỹ Đình</p> 
                                    <p class="title-product">Lỗi máy: Bung bản lề laptop lenovo L340 Ideapad</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="product-fix-back">
                        
                            <div class="fix-back">
                                <button class="btn active">Thứ 2 - 25/12</button>
                                <button class="btn active">9:00 AM</button>
                                <button class="btn ">Liên hệ</button>
                                {/* <button class="btn">Huỷ lịch</button> */}
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ListBookedFixingUser
