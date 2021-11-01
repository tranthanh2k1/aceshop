import React from 'react'

const HomePage = () => {
    return (
        <div>
            <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row d-md-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="d-md-flex">
                                <div className="col-md-8 bg-primary p-5 heading-section heading-section-white">
                                    <span className="subheading">Booking an Appointment</span>
                                    <h2 className="mb-4">Free Consultation</h2>
                                    <form action="#" className="appointment">
                                        <div className="row justify-content-center">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down" /></div>
                                                            <select name id className="form-control">
                                                                <option value>Select Services</option>
                                                                <option value>Spinal Manupulation</option>
                                                                <option value>Electrotherapy</option>
                                                                <option value>Manual Lymphatic</option>
                                                                <option value>Medical Acupuncture</option>
                                                                <option value>Therapeutic Exercise</option>
                                                                <option value>Joint Mobilization</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down" /></div>
                                                            <select name id className="form-control">
                                                                <option value>Select Chiropractor</option>
                                                                <option value>John Doe</option>
                                                                <option value>William Smith</option>
                                                                <option value>Danny Green</option>
                                                                <option value>Jason Thompson</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="fa fa-calendar" /></div>
                                                        <input type="text" className="form-control appointment_date" placeholder="Date" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="fa fa-clock-o" /></div>
                                                        <input type="text" className="form-control appointment_time" placeholder="Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="submit" defaultValue="Send message" className="btn btn-secondary py-3 px-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4 bg-white text-center p-5">
                                    <div className="desc border-bottom pb-4">
                                        <h2>Business Hours</h2>
                                        <div className="opening-hours">
                                            <h4>Opening Days:</h4>
                                            <p className="pl-3">
                                                <span><strong>Monday – Friday:</strong> 9am to 20 pm</span>
                                                <span><strong>Saturday :</strong> 9am to 17 pm</span>
                                            </p>
                                            <h4>Vacations:</h4>
                                            <p className="pl-3">
                                                <span>All Sunday Days</span>
                                                <span>All Official Holidays</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="desc pt-4 ">
                                        <h3 className="heading">For Emergency Cases</h3>
                                        <span className="phone">(+01) 123 456 7890</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
