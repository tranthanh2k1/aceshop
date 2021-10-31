import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__top">
                    <div className="header__top-logo">
                        <img src={Logo} alt="lgo" />
                    </div>
                    <div className="header__top-search">
                        <input type="text" placeholder='Tìm kiếm' className='header__top-input-search' />
                        <button className='header__top-btn-search'><i class="bi bi-search"></i></button>
                    </div>
                    <div className="header__top-book">
                        <i class="bi bi-journal-code"></i>
                        <p><Link to="#">Đặt lịch sửa chữa</Link></p>
                    </div>
                    <div className="header__top-hotline">
                        <div className="hotline__icon-phone">
                            <i class="bi bi-telephone-outbound"></i>
                        </div>
                        <div className="hotline__info">
                            <div className='hotline__info-title'>HotLine miễn phí</div>
                            <Link href="#" className='hotline__info-phone'>1800 6024</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__main-nav">
                        <div className="header__menu">
                            <ul className="header__menu-list">
                                <li className="header__menu-item">
                                    <Link to="/"><i class="bi bi-house-door"></i></Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to="#">Giới thiệu</Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to="#">Dịch vụ</Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to="#">Tin tức</Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to="#">Báo giá</Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to="#">Đặt lịch</Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to="#">Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="header__account">
                            <div className="header__account-icon">
                                <Link to="#"><i class="bi bi-person-circle"></i></Link>
                            </div>
                            <Link to="#" className='header__account-info'>Tài khoản</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
