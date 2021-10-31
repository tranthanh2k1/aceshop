import React from 'react'

import SidebarAdmin from '../../components/admin/sidebar'

const LayoutAdmin = ({ children }) => {
    return (
        <div className='admin'>
            <SidebarAdmin />
            <div className="admin__pages">
                {children}
            </div>

        </div>
    )
}

export default LayoutAdmin
