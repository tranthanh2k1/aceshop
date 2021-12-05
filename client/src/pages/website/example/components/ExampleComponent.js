import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { isAuthenticated } from "../../../../api/auth"
import { API } from "../../../../constants"
import ExampleTemplate from "./ExampleTemplate"
 export default function ExampleComponent(props) {
    const [listAllBookingUser, setListAllBookingUser] = useState([])
    const { token } = isAuthenticated()
    const [tab, setTab] = useState(1);
    const params = useParams()

    const onChangeTab = (current) => {
        setTab(current)
    }

    const remove = (id) =>{
      
        getListBookingUser();
    }

    const getListBookingUser = async (type) => {
        const { data } = await axios.get(`${API}/booking/user`, {
            headers: {
                Accept: "appliaction/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        setListAllBookingUser(data.listBooking)
    }

    useEffect(() => {
        getListBookingUser(1)
        
    }, [])


     return <ExampleTemplate data={listAllBookingUser} getListBookingUser={getListBookingUser} tab={tab} onChangeTab={onChangeTab}/>
 }