import React from 'react'
import Header from '../../components/website/header'

const LayoutWebsite = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default LayoutWebsite
