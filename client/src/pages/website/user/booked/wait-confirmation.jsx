import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../../../api/auth'
import { API } from '../../../../constants'
import axios from 'axios'

const WaitForComfirmationPage = () => {
    const [listAllBookingUser, setListAllBookingUser] = useState([])

    const { token } = isAuthenticated()
    console.log(token)

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.post(`${API}/booking/user/status`, { status: "Wait for confirmation" }, {
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
           
        </div>
    )
}

export default WaitForComfirmationPage
