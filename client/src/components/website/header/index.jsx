import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom'
import { signOut, isAuthenticated } from '../../../api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, getUserLocalStorage } from '../../../redux/actions/auth'




const Header = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setLogged] = useState(false);
    const { user } = isAuthenticated();
    // useEffect(() => {
    //     isAuthenticated && setLogged(true)
    // }, [pathname, isLogged])
    // const { error, isAuthenticated, user, message } = useSelector(state => state.auth)

    // useEffect(() => {
    //     isAuthenticated && dispatch(getUserLocalStorage(user))
    // }, [user])

    const dispatch = useDispatch()
    // console.log("a",user);

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
                            <a className="navbar-brand" href="index.html">Chiropractic</a>
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
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars" /> Menu 141545484
                    </button> */}

                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="about.html" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="team.html" className="nav-link">Team</Link></li>
                            <li className="nav-item"><Link to="services.html" className="nav-link">Services</Link></li>
                            <li className="nav-item"><Link to="department.html" className="nav-link">Departments</Link></li>
                            <li className="nav-item"><Link to="gallery.html" className="nav-link">Gallery</Link></li>
                            <li className="nav-item"><Link to="blog.html" className="nav-link">Blog</Link></li>
                            <li className="nav-item"><Link to="contact.html" className="nav-link">Contact</Link></li>
                            {pathname !== "/signin" && isLogged ? (
                            
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.username}</a>
                                <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown">
                                    <a className="dropdown-item border-0 transition-link" href="/admin/dashboard">Dashboard</a>
                                    <a className="dropdown-item border-0 transition-link" href="/" style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            signOut(() => {
                                                history.push("/");
                                            })
                                        }>Logout</a>
                                </div>
                            </li>
                        
                    ) : (
                        <>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>
                                <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown">
                                    <a className="dropdown-item border-0 transition-link" href="/signin">Login</a>
                                    <a className="dropdown-item border-0 transition-link" href="/signup">Register</a>

                                </div>
                            </li>
                        </>
                    )
                    }
                        </ul>
                    </div>
                    {/* <div className="order-lg-last">
                    <ul className="navbar-nav ml-auto">

                        
                    </ul>
                    </div> */}
                </div>
                
            </div>
        </>
    );
}

export default Header
