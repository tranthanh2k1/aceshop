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
            {JSON.stringify(listAllBookingUser)}
        </div>
    )
}

export default ListBookedFixingUser
