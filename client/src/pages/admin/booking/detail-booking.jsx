import React, { useEffect, useState } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { detaiBookingAction, updateStatusBookingAdminAction } from '../../../redux/actions/booking-admin';

const DetailBookingPage = () => {
    const [isDisableWaitConfirmation, setIsDisableWaitConfirmation] = useState('true')
    const [isDisableConfirm, setIsDisableConfirm] = useState('true')
    const [isDisableFixing, setIsDisableFixing] = useState('true')
    const [isDisableSuccessfulFix, setDIsableSuccessfulFix] = useState('true')
    const [isDisableCanellation, setIsDisableCanellation] = useState('true')

    const { id } = useParams()

    const { detailBooking, message, error } = useSelector(state => state.bookingAdmin)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detaiBookingAction(id))
    }, [])

    useEffect(() => {
        if (detailBooking && detailBooking.status === "Wait for confirmation") {
            // setIsDisableWaitConfirmation('')
            setIsDisableConfirm('')
            setIsDisableCanellation('')
        }

        if (detailBooking && detailBooking.status === "Confirm") {
            // setIsDisableConfirm('')
            setIsDisableFixing('')
            setIsDisableCanellation('')
        }
        if (detailBooking && detailBooking.status === "Fixing") {
            // setIsDisableFixing('')
            setDIsableSuccessfulFix('')
            setIsDisableCanellation('')
        }
        if (detailBooking && detailBooking.status === "Successful fix") {
            setDIsableSuccessfulFix('')
        }
        if (detailBooking && detailBooking.status === "Cancellation of booking") {
            setIsDisableCanellation('')
        }

    }, [detailBooking, isDisableWaitConfirmation, isDisableConfirm, isDisableFixing, isDisableSuccessfulFix, isDisableCanellation])

    const handleUpdateStatus = (status) => {
        alert("Bạn có muốn cập nhật trạng thái cho đơn đặt lịch này")

        const dataReq = {
            status
        }

        dispatch(updateStatusBookingAdminAction(dataReq, id))
    }

    const history = useHistory()

    const checkMessage = () => {
        if (message) {
            history.push('/admin/booking/list')
        }
    }

    return (
        <div>
            {error && alert(error)}
            {message && alert(message)}
            {checkMessage()}
            {detailBooking && (
                <>
                    <h3 className='admin__page-title'>Chi tiết đơn đặt lịch #{detailBooking.code_bill}</h3>
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
            <button
                className='btn-booking-status-admin'
                style={{ backgroundColor: '#fcaf17', color: '#fff', opacity: `${isDisableWaitConfirmation === '' ? '1' : '0.3'}` }}
                disabled={isDisableWaitConfirmation}
                onClick={() => handleUpdateStatus('Wait for confirmation')}
            >
                Chờ xác nhận
            </button>
            <button
                className='btn-booking-status-admin'
                style={{ backgroundColor: '#45aaf2', color: '#fff', opacity: `${isDisableConfirm === '' ? '1' : '0.3'}` }}
                disabled={isDisableConfirm}
                onClick={() => handleUpdateStatus('Confirm')}
            >
                Xác nhận
            </button>
            <button
                className='btn-booking-status-admin'
                style={{ backgroundColor: '#2980b9', color: '#fff', opacity: `${isDisableFixing === '' ? '1' : '0.3'}` }}
                disabled={isDisableFixing}
                onClick={() => handleUpdateStatus('Fixing')}
            >
                Đang sửa
            </button>
            <button
                className='btn-booking-status-admin'
                style={{ backgroundColor: '#27ae60', color: '#fff', opacity: `${isDisableSuccessfulFix === '' ? '1' : '0.3'}` }}
                disabled={isDisableSuccessfulFix}
                onClick={() => handleUpdateStatus('Successful fix')}
            >
                Sửa thành công
            </button>
            <button
                className='btn-booking-status-admin'
                style={{ backgroundColor: '#ee4d2d', color: '#fff', opacity: `${isDisableCanellation === '' ? '1' : '0.3'}` }}
                disabled={isDisableCanellation}
                onClick={() => handleUpdateStatus('Cancellation of booking')}
            >
                Hủy lịch
            </button>
        </div>
    )
}

export default DetailBookingPage
