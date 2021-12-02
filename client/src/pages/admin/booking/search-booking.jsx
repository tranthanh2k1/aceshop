import React from 'react'
import { useLocation } from 'react-router-dom';

const SearchBookingAdmin = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery().get("code");

    return (
        <div>
            SearchBookingAdmin
        </div>
    )
}

export default SearchBookingAdmin
