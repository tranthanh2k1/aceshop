import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="top py-1">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <p className="mb-0"><Link to="#">chiropractic@email.com</Link> | <Link to="#">Help Desk</Link> | </p>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <div className="social-media">
                                <p className="mb-0 d-flex">
                                    <Link to="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></Link>
                                    <Link to="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></Link>
                                    <Link to="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></Link>
                                    <Link to="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-3 mb-md-0 mb-4 d-flex align-items-center">
                            <a className="navbar-brand" href="index.html">Chiropractic</a>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-8 mb-md-0 mb-3">
                                    <div className="top-wrap d-flex">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-location-arrow" /></div>
                                        <div className="text"><span>Address</span><span>198 West 21th Street, Suite 721 New York NY 10016</span></div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="top-wrap d-flex">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-phone" /></div>
                                        <div className="text"><span>Call us</span><span>(+01) 123 456 7890</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars" /> Menu
                    </button>
                    <div className="order-lg-last">
                        <Link to="#" className="btn btn-primary">Make an appointment</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><Link to="index.html" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="about.html" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="team.html" className="nav-link">Team</Link></li>
                            <li className="nav-item"><Link to="services.html" className="nav-link">Services</Link></li>
                            <li className="nav-item"><Link to="department.html" className="nav-link">Departments</Link></li>
                            <li className="nav-item"><Link to="gallery.html" className="nav-link">Gallery</Link></li>
                            <li className="nav-item"><Link to="blog.html" className="nav-link">Blog</Link></li>
                            <li className="nav-item"><Link to="contact.html" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* END nav */}
        </>
    );
}

export default Header
