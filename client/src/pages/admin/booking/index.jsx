import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getListBookingAll } from '../../../redux/actions/booking-admin';
import Moment from 'react-moment';

const ListBooking = () => {
    const { listBooking } = useSelector(state => state.bookingAdmin)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListBookingAll())
    }, [])

    const convertStatusString = (status) => {
        if (status === 'Wait for confirmation') {
            return {
                content: 'Chờ xác nhận',
                bgr: '#fcaf17'
            }
        } else if (status === 'Confirm') {
            return {
                content: 'Xác nhận',
                bgr: '#45aaf2'
            }
        } else if (status === 'Fixing') {
            return {
                content: 'Đang sửa',
                bgr: '#27ae60'
            }
        } else if (status === 'Successful fix') {
            return {
                content: 'Sửa thành công',
                bgr: '#27ae60'
            }
        } else {
            return {
                content: 'Hủy lịch',
                bgr: '#ee4d2d'
            }
        }
    }

    return (
        <div>
            <h3 className='admin__page-title'>Danh sách đơn đặt lịch</h3>
            <Table
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Thời gian</th>
                        <th>Trạng thái</th>
                        <th>
                            {/* <Link to='/admin/service/add'>Thêm dịch vụ</Link> */}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listBooking.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{item.name}</td>
                            <td>
                                <Moment format="hh:mm' DD/MM/YYYY">
                                    {item.createdAt}
                                </Moment>
                            </td>
                            <td>
                                <p className='booking-status-admin' style={{ backgroundColor: `${convertStatusString(item.status).bgr}` }}>
                                    {convertStatusString(item.status).content}
                                </p>
                            </td>
                            <td>
                                <Link to={`/admin/booking/detail/${item._id}`} className='btn btn-success'>Xem chi tiết</Link>
                                {/* <button onClick={() => handleRemove(item._id)}>Xóa</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    )
}

export default ListBooking
