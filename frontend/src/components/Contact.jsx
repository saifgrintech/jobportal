import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

import ReactFlagsSelect from "react-flags-select";

const Contact = () => {
    const [selected, setSelected] = useState("");
  return (
    <>
        <div className="contact_page">
            <Navbar />
            <div className="hero_banner d-flex flex-column align-items-center justify-content-center ">
                <h1 className='fw-bold position-relative'>Contact Us</h1>
           </div>
            <div className="container py-5">
                <div className="row align-items-center">
                <div className="col-lg-5 mx-auto">
                 <img src="/images/contact.jpg" className='w-100 rounded-3' alt="" />
                 </div>
                    <div className="col-lg-5 mx-auto">
                        <div id='signup_form' className="card shadow border-0">
                            <div className="card-body py-4">
                                <h3 className='mb-3 text-center'>Contact Us</h3>
                                <form  action="" className='px-3'>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Name <span>*</span></label>
                                            <input type="text" className='form-control' placeholder='Enter your name' name="" id="" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Email <span>*</span></label>
                                            <input type="email" className='form-control' placeholder='Enter your email' name="" id="" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Phone Number <span>*</span></label>
                                           <div className="phone-input-container row ">
                                            <div className="col-4">
                                                <ReactFlagsSelect
                                                selected={selected}
                                                onSelect={(code) => setSelected(code)}
                                                placeholder="Select"
                                                searchable
                                                />
                                            </div>
                                            <div className="col-8">
                                            <input type="tel" placeholder="Phone..." name="phone" id="phone" className="form-control form_custom_input" pattern="[0-9]{9,12}" maxlength="11" required="" value="" />
                                            </div>
                                           </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Description <span>*</span></label>
                                            <textarea className='form-control' placeholder='Your message' name="" rows={4} id=""></textarea>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Attach File</label>
                                            <input type="file" className='form-control' name="" id="" />
                                        </div>
                                        <div className="col-12 mb-3 d-flex">
                                        <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Candidate
                                            </label>
                                            </div>
                                            <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Interested Recruiter
                                            </label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-end">
                                        <button type='submit' 
                                        style={{height:"50px"}}
                                        className="btn btn-register rounded-2 fs-6 w-100">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="row mt-5 py-4 contact_us_details">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-body rounded-3 text-center p-lg-5 p-md-4">
                              <div className="contact_icon shadow rounded-2 mb-3">
                              <i className="fa-solid fa-phone"></i>
                              </div>
                                <h5>Phone</h5>
                                <p className="text-muted">Start working with us that can provide everything</p>
                                <Link className='text-primary'>+91 534-468-854</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-body rounded-3 text-center p-lg-5 p-md-4">
                              <div className="contact_icon shadow rounded-2 mb-3">
                              <i className="fa-regular fa-envelope"></i>
                              </div>
                                <h5>Email</h5>
                                <p className="text-muted">Start working with us that can provide everything</p>
                                <Link className='text-primary'>info@example.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-body rounded-3 text-center p-lg-5 p-md-4">
                              <div className="contact_icon shadow rounded-2 mb-3">
                              <i className="fa-solid fa-location-dot"></i>
                              </div>
                                <h5>Address</h5>
                                <p className="text-muted">Start working with us that can provide everything</p>
                                <p className='text-primary mb-0'>#123 Street Road (121565)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    </>
  )
}

export default Contact