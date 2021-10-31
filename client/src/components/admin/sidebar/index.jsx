import React from 'react'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const SidebarAdmin = () => {
    return (
        <div className="admin__sidebar">
            <div className="admin__sidebar-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="admin__sidebar-menu">
                <nav className='admin__sidebar-menu-nav'>
                    <ul className='admin__sidebar-list'>
                        <li className='admin__sidebar-item'>
                            <Link to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Overview</span>
                            </Link>
                        </li>
                        <li className='admin__sidebar-item'>
                            <Link to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Dịch vụ</span>
                            </Link>
                        </li>
                        <li className='admin__sidebar-item'>
                            <Link to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Ideas</span>
                            </Link>
                        </li>
                        <li className='admin__sidebar-item'>
                            <Link to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Agents</span>
                            </Link>
                        </li>
                        <li className='admin__sidebar-item'>
                            <Link to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Agents</span>
                            </Link>
                        </li>
                        <li className='admin__sidebar-item'>
                            <Link to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Agents</span>
                            </Link>
                        </li>
                        <li className='admin__sidebar-item'>
                            <Link to="#" className='admin__sidebar-item-link'>
                                <i class="bi bi-speedometer2"></i>
                                <span className='admin__sidebar-item-title'>Agents</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SidebarAdmin
