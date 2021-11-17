import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../../constants'
import Moment from 'react-moment';

const DetailBookingPage = () => {
    const [detailBooking, setDetailBooking] = useState()

    const { id } = useParams()

    useEffect(() => {
        const getDetialBooking = async () => {
            const { data } = await axios.get(`${API}/booking/detail/${id}`)
            const { detailBooking } = data

            setDetailBooking(detailBooking)
        }

        getDetialBooking()
    }, [])

    return (
        <div>
            <h3 className='admin__page-title'>Chi tiết đơn đặt lịch</h3>
            {detailBooking && (
                <>
                    <p>Tên người dùng: {detailBooking.name}</p>
                    <p>Email: {detailBooking.email}</p>
                    <p>Số điện thoại: {detailBooking.phone}</p>
                    <p>Địa chỉ: {detailBooking.address}</p>
                    <p>Thời gian sửa:
                        <Moment format=" hh:mm DD/MM/YYYY">
                            {detailBooking.require_time}
                        </Moment>
                    </p>
                    <p>Ca sửa: {detailBooking.correction_time}</p>
                    <p>Mô tả lỗi của máy: {detailBooking.description_error}</p>
                    <p>Trạng thái: {detailBooking.status}</p>
                </>
            )}
        </div>
    )
}

export default DetailBookingPage
