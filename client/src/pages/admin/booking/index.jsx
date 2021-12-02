import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getListBookingAll, listAllBookingStatusAction } from '../../../redux/actions/booking-admin';
import Moment from 'react-moment';

const ListBooking = () => {
    const { listBooking, totalPage } = useSelector(state => state.bookingAdmin)

    const dispatch = useDispatch()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery().get("page");

    useEffect(() => {
        if (query) {
            dispatch(getListBookingAll(query))
        } else {
            dispatch(getListBookingAll(1))
        }
    }, [query])

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

    const dataOption = [
        {
            value: "Wait for confirmation",
            content: "Chờ xác nhận"
        },
        {
            value: "Confirm",
            content: "Xác nhận"
        },
        {
            value: "Fixing",
            content: "Đang sửa"
        },
        {
            value: "Successful fix",
            content: "Sửa thành công"
        },
        {
            value: "Cancellation of booking",
            content: "Đã hủy"
        },
    ]

    const paginationRef = useRef(null)

    const handleSelectStatus = (e) => {
        if (e.target.value === 'all') {
            paginationRef.current.style.display = 'block'
            return dispatch(getListBookingAll(1))
        }

        const dataReq = {
            status: e.target.value
        }

        dispatch(listAllBookingStatusAction(dataReq))

        paginationRef.current.style.display = 'none'
    }

    return (
        <div>
            <h3 className='admin__page-title'>Danh sách đơn đặt lịch</h3>
            <form action='/admin/booking/search'>
                <input type="text" placeholder='Tìm kiếm...' name="code" />
                <button type='submit'>TÌm kiếm</button>
            </form>
            <select
                className="form-select my-4"
                name="status"
                aria-label="Default select example"
                onChange={handleSelectStatus}
            >
                <option selected value="all">---Tất cả---</option>
                {dataOption.map(item => (
                    <>
                        <option key={item.value} value={item.value}>{item.content}</option>
                    </>
                ))}
            </select>
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
                            <th>{item.code_bill}</th>
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
            <nav aria-label="Page navigation example" ref={paginationRef}>
                <ul className="pagination">
                    <li className="page-item">
                        {query > 1 && (
                            <Link
                                className='page-link'
                                to={`/admin/booking/list?page=${Number(query) - 1}`}
                            >
                                Previous
                            </Link>
                        )}
                    </li>
                    {Array(totalPage).fill(1).map((item, index) => (
                        <li className="page-item" key={index}>
                            <Link
                                className="page-link"
                                to={`/admin/booking/list?page=${index + 1}`}
                            >{index + 1}</Link>
                        </li>
                    ))}
                    <li className="page-item">
                        {query < totalPage && (
                            <Link
                                className="page-link"
                                to={`/admin/booking/list?page=${Number(query) + 1}`}
                            >
                                Next
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default ListBooking
