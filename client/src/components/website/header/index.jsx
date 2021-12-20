import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="desc_email"><a href="#">chiropractic@email.com</a> | <a href="#">Help Desk</a> | </p>
                        </div>
                        <div className="col">
                            <div className="social-media">
                                <p className="list_social">
                                    <a href="#" className="social_adress"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                    <a href="#" className="social_adress"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                                    <a href="#" className="social_adress"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                                    <a href="#" className="social_adress"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* <a className="navbar-brand" href="index.html">Chiropractic</a> */}
                            <Link className="navbar-brand" to="/">
                                <img src="../assets/css/images/ace.png" alt="" />
                            </Link>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div className="top-wrap ">
                                        <div className="icon "><span className="fa fa-location-arrow" /></div>
                                        <div className="text"><span>Address</span><span>198 West 21th Street, Suite 721 New York NY 10016</span></div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="top-wrap ">
                                        <div className="icon"><span className="fa fa-phone" /></div>
                                        <div className="text"><span>Call us</span><span>(+01) 123 456 7890</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="container test" id="test">
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="about.html" className="nav-link">Về chúng tôi</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link">Dịch vụ</Link></li>
                            <li className="nav-item"><Link to="/quote" className="nav-link">Báo giá</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link">Blog</Link></li>
                            <li className="nav-item"><Link to="/content" className="nav-link">Liên hệ</Link></li>
                        </ul>
                    </div>
                    <div className="order-lg-last">
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Header
