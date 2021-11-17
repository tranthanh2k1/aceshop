import React from 'react'
import HeaderAdmin from '../../components/admin/header'

import SidebarAdmin from '../../components/admin/sidebar'

const LayoutAdmin = ({ children }) => {
    return (
        <>
            <HeaderAdmin />
            <div className='admin'>
                <SidebarAdmin />
                <div className='admin__pages'>
                    <div className="admin__page-border">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutAdmin
