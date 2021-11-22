import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../../api/auth'
import axios from 'axios'
import { API } from '../../../../constants'

const ListAllBookedUserPage = () => {
    const [listAllBookingUser, setListAllBookingUser] = useState([])

    const { token } = isAuthenticated()

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.get(`${API}/booking/user`, {
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

export default ListAllBookedUserPage
