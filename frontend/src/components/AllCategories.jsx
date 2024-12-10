import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const AllCategories = () => {
  return (
    <>
    <div className="all_categories_page">
     <Navbar />
     <div className="hero_banner d-flex flex-column align-items-center justify-content-center ">
      <h1 className="fw-bold position-relative">Job Categories</h1>
     </div>

     <div className="container">

        <div className="popular_categories  py-5">
            <h4 className='mb-3 text-center'>All Categories</h4>
            <div className='row justify-content-center flex-wrap '>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-home "></i>
                            <h5 className='mt-3'>Remote</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-building "></i>
                            <h5 className='mt-3'>MNC</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-users "></i>
                            <h5 className='mt-3'>HR</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-gear "></i>
                            <h5 className='mt-3'>Engineering</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-dollar "></i>
                            <h5 className='mt-3'>Banking</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-chart-simple "></i>
                            <h5 className='mt-3'>Marketing</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-calculator "></i>
                            <h5 className='mt-3'>Accounting</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-globe "></i>
                            <h5 className='mt-3'>IT Service</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-graduation-cap "></i>
                            <h5 className='mt-3'>Fresher</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                    <Link to='/cat-list' className='cat_card'>
                        <div className="card ">
                            <div className="card-body ">
                            <i className="fa-solid fa-handshake-angle"></i>
                            <h5 className='mt-3'>Sales</h5>
                            <p className='text-muted'>120 vacancy</p>
                            </div>
                        </div>
                    </Link>
                </div>
                

            
                </div>
        </div>

        <div className="row align-items-center py-5">
            <div className="col-lg-5">
                <img src="/images/about2.jpg" className='w-100 ' alt="" />
            {/* <div className="row">
                <div className="col-7 ">
                </div>
                <div className="col-5 h-100">
                    <img src="/images/about1.jpg" className='w-100 mb-4' alt="" />
                    <img src="/images/about2.jpg" className='w-100' alt="" />
                </div>
            </div> */}
            </div>
            <div className="col-lg-7">
                <h1 className='fw-bold'>We Help To Get The Best Job And Find A Talent</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque inventore qui earum consequuntur voluptate sunt doloremque, nesciunt necessitatibus! Delectus similique omnis dolore fugiat? Omnis eveniet id est quasi quae minus quas autem dolores a laboriosam neque, numquam cumque quam consequatur voluptates dicta laudantium laborum totam nisi quaerat. Ipsa, labore.</p>
                <ul className='p-0 m-0'>
                    <li className='d-flex align-items-center mb-2'>
                    <i className="fa-solid fa-check me-2"></i><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </li>
                    <li className='d-flex align-items-center mb-2'>
                    <i className="fa-solid fa-check me-2"></i><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </li>
                    <li className='d-flex align-items-center mb-2'>
                    <i className="fa-solid fa-check me-2"></i><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    </div>

    </>
  )
}

export default AllCategories