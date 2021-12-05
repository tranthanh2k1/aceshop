import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../../../api/auth';
import { API } from '../../../constants';
import { Table } from 'reactstrap';
import Moment from 'react-moment';

const SearchBookingAdmin = () => {
    const [booking, setBooking] = useState({})
    const [error, setError] = useState('')

    const { token } = isAuthenticated()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery().get("code");

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

    useEffect(() => {
        const getOrderSearch = async () => {
            try {
                const { data } = await axios.get(`${API}/booking/admin/search`, {
                    params: {
                        code: query
                    },
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log(data)

                setBooking(data.searchBooking)
            } catch (error) {
                setError(error.response.data.message)
            }
        }

        getOrderSearch()
    }, [query])

    return (
        <div>
            <h3 className='admin__page-title'>Danh sách đơn đặt lịch</h3>
            {error && alert(error)}
            <form action='/admin/booking/search' className='my-4'>
                <input type="text" placeholder='Tìm kiếm...' name="code" />
                <button type='submit' className='btn btn-primary mx-2'>TÌm kiếm</button>
            </form>
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
                    {error ? '' : (
                        <tr>
                            <th>{booking.code_bill}</th>
                            <td>{booking.name}</td>
                            <td>
                                <Moment format="hh:mm' DD/MM/YYYY">
                                    {booking.createdAt}
                                </Moment>
                            </td>
                            <td>
                                <p className='booking-status-admin' style={{ backgroundColor: `${convertStatusString(booking.status).bgr}` }}>
                                    {convertStatusString(booking.status).content}
                                </p>
                            </td>
                            <td>
                                <Link to={`/admin/booking/detail/${booking._id}`} className='btn btn-success'>Xem chi tiết</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div >
    )
}

export default SearchBookingAdmin
