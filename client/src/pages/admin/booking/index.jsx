import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getListBookingAll } from '../../../redux/actions/booking';
import Moment from 'react-moment';

const ListBooking = () => {
    const { listBooking } = useSelector(state => state.booking)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListBookingAll())
    }, [])

    return (
        <div>
            <h3 className='admin__page-title'>Danh sách đơn đặt lịch</h3>
            <Table
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Thời gian đặt lịch</th>
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
                            <td>{item.status}</td>
                            <td>
                                <Moment format="hh:mm' DD/MM/YYYY">
                                    {item.createdAt}
                                </Moment>
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
