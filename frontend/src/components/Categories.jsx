import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
         <div className="popular_categories container py-5">
          <h4 className='mb-3 text-center'>Popular Categories</h4>
          <div className='row justify-content-center flex-wrap '>
          <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-home "></i>
                        <h5 className='mt-3'>Remote</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-building "></i>
                        <h5 className='mt-3'>MNC</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-users "></i>
                        <h5 className='mt-3'>HR</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-gear "></i>
                        <h5 className='mt-3'>Engineering</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-dollar "></i>
                        <h5 className='mt-3'>Banking</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-chart-simple "></i>
                        <h5 className='mt-3'>Marketing</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-calculator "></i>
                        <h5 className='mt-3'>Accounting</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-globe "></i>
                        <h5 className='mt-3'>IT</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-graduation-cap "></i>
                        <h5 className='mt-3'>Fresher</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <Link to='/cat-list' className='cat_card'>
                    <div className="card ">
                        <div className="card-body text-center">
                        <i className="fa-solid fa-handshake-angle "></i>
                        <h5 className='mt-3'>Sales</h5>
                        </div>
                    </div>
                </Link>
            </div>
            

          
            </div>
        </div>
    </>
  )
}

export default Categories