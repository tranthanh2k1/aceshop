import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../../../constants';
import ExportToExcel from './exportToExcel'

const AdminDashboard = () => {
    const [totalAllBooking, setTotalAllBooking] = useState([])

    const [choseFilter, setChoseFilter] = useState('Lọc theo ngày')

    const fileName = "myfile";

    useEffect(() => {
        const getAllOrder = async () => {
            try {
                const { data } = await axios.get(`${API}/booking`)
                console.log(data)

                setTotalAllBooking(data.booking)
            } catch (error) {
                console.log("error", error.response)
            }
        }

        getAllOrder()
    }, [])

    const dataChoseFilter = ['Lọc theo ngày', 'Lọc theo nhiều ngày']

    const handleSelectFilter = e => {
        setChoseFilter(e.target.value)
    }

    return (
        <>
            <h3>Danh sách đơn đặt lịch</h3>
            {
                totalAllBooking && (
                    <h6>Tống tất cả đơn hàng: <span>{totalAllBooking.length}</span></h6>
                )
            }

            <select
                className="form-select my-4"
                name="status"
                aria-label="Default select example"
                onChange={handleSelectFilter}
            >
                {dataChoseFilter.map(item => (
                    <>
                        <option
                            key={item}
                            value={item}
                            selected={choseFilter === item}
                        >
                            {item}
                        </option>
                    </>
                ))}
            </select>

            {choseFilter === 'Lọc theo ngày' && (
                <div>
                    <form action="">
                        <input type="date" />
                        <button>Lọc</button>
                    </form>
                </div>
            )}

            {choseFilter === 'Lọc theo nhiều ngày' && (
                <div>
                    <form action="">
                        <input type="date" />
                        <input type="date" />
                        <button>Lọc</button>
                    </form>
                </div>
            )}

            <ExportToExcel apiData={totalAllBooking} fileName={fileName} />
        </>
    )
}

export default AdminDashboard
