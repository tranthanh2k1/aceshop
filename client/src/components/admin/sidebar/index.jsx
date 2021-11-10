import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
    return (
        <div className="admin__sidebar">
            <div className="admin__sidebar-menu">
                <nav className='admin__sidebar-menu-nav'>
                    <ul className='admin__sidebar-list'>
                        <li className='admin__sidebar-item'>
                            <NavLink to="/admin/dashboard" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className='admin__sidebar-item'>
                            <NavLink to="/admin/service/list" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Service</span>
                            </NavLink>
                        </li>
                        <li className='admin__sidebar-item'>
                            <NavLink to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>News</span>
                            </NavLink>
                        </li>
                        <li className='admin__sidebar-item'>
                            <NavLink to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Booking</span>
                            </NavLink>
                        </li>
                        <li className='admin__sidebar-item'>
                            <NavLink to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Users</span>
                            </NavLink>
                        </li>
                        <li className='admin__sidebar-item'>
                            <NavLink to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Agents</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SidebarAdmin
