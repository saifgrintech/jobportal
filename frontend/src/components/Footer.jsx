import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                    <Link className="navbar-brand" ><img src="/images/logo1.png" alt="" /></Link>
                    <h5 className='mt-3'>Connect with us</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="d-flex social_links flex-wrap">
                       <Link> <i className="fa-brands fa-facebook me-2"></i></Link>
                       <Link> <i className="fa-brands fa-instagram me-2"></i></Link>
                       <Link> <i className="fa-brands fa-twitter me-2"></i></Link>
                       <Link> <i className="fa-brands fa-linkedin me-2"></i></Link>
                       <Link> <i className="fa-brands fa-youtube me-2"></i></Link>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 ">
                   <h5 className='mt-3'>Job Categories</h5>
                    <ul className='p-0' >
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Work from Home</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Internship Job</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Freelancer Job</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Part Time Job</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Full Time Job</Link></li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 ">
                    <h5 className='mt-3'>Quick Links</h5>
                    <ul className='p-0' >
                        <li><Link to='/about'><i className="fa-solid fa-chevron-right"></i> About us</Link></li>
                        <li><Link to='/contact'><i className="fa-solid fa-chevron-right"></i> Contact us</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Send Feedback</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Sitemap</Link></li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 ">
                    <h5 className='mt-3'>Employer</h5>
                    <ul className='p-0' >
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Employer Login</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Job Posting</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Access Resume Database</Link></li>
                        <li><Link><i className="fa-solid fa-chevron-right"></i> Buy Online</Link></li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 ">
                    <h5 className='mt-3'>Other Links</h5>
                    <ul className='p-0' >
                        <li><Link> <i className="fa-solid fa-chevron-right"></i> Privacy Policy</Link></li>
                        <li><Link> <i className="fa-solid fa-chevron-right"></i> Terms & conditions</Link></li>
                        <li><Link> <i className="fa-solid fa-chevron-right"></i> Fraud alert</Link></li>
                        <li><Link> <i className="fa-solid fa-chevron-right"></i> Help center</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center border-top py-2">
                <p className='m-0'>&copy; Copyright  | All Rights Reserved 2024</p>
            </div>
        </div>
    </>
  )
}

export default Footer