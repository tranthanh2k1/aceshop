import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../../../api/auth'
import { API } from '../../../../constants'
import axios from 'axios'

const WaitForComfirmationPage = () => {
    const [listAllBookingUser, setListAllBookingUser] = useState([])

    const { token } = isAuthenticated()

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.post(`${API}/booking/user/status`, { status: "Wait for confirmation" }, {
                headers: {
                    Accept: "appliaction/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })

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

export default WaitForComfirmationPage
