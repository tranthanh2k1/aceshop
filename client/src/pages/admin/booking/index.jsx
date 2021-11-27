import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getListBookingAll } from '../../../redux/actions/booking-admin';
import Moment from 'react-moment';

const ListBooking = () => {
    const { listBooking, totalPage } = useSelector(state => state.bookingAdmin)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListBookingAll(1))
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

    const handleListOrderPage = (page) => {
        dispatch(getListBookingAll(page))
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {/* <li className="page-item">
                        <Link
                            className="page-link"
                            to={`/admin/order/list?page=${query - 1}`}
                            onClick={() => handleListOrderPage(query - 1)}
                        >Previous</Link>
                    </li> */}
                    {Array(totalPage).fill(1).map((item, index) => (
                        <>
                            <li className="page-item" key={index}>
                                <Link
                                    className="page-link"
                                    to={`/admin/booking/list?page=${index + 1}`}
                                    onClick={() => handleListOrderPage(index + 1)}
                                >{index + 1}</Link>
                            </li>
                        </>
                    ))}
                    {/* <li className="page-item">
                        <Link
                            className="page-link"
                            to={`/admin/order/list?page=${Number(query) + 1}`}
                            onClick={() => handleListOrderPage(Number(query) + 1)}
                        >Next</Link>
                    </li> */}
                </ul>
            </nav>
        </div >
    )
}

export default ListBooking
