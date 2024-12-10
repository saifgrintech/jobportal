import React from 'react'

const HeroBanner = () => {
  return (
    <div>
        <div className="hero_banner d-flex flex-column align-items-center justify-content-center ">
                <h1 className='fw-bold position-relative'>Find your dream job now</h1>
                <h5 className='position-relative'>Over 7,00,000+ jobs to explore</h5>

                <div className="banner_search container d-flex align-items-center justify-content-center mt-4">
                <i className="fa-solid fa-magnifying-glass search_icon"></i>
                    <div className="row align-items-center justify-content-center w-100">
                        <div className="col-lg-4 border-end">
                        <div className="d-flex align-items-center">
                        <i className="fa-solid fa-magnifying-glass d-block d-lg-none"></i>
                            <input className='w-100' type="text" placeholder='Enter Skills / designation/ companies' />
                            </div>
                        </div>
                        <div className="col-lg-3 border-end">
                            <div className="d-flex align-items-center">
                            <i className="fa-solid fa-location-dot"></i>
                                <input className='w-100' type="text" placeholder='Location' />
                            </div>
                        </div>
                        <div className="col-lg-3 border-end">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-briefcase"></i>
                            <select className="form-select" aria-label="Default select example">
                                <option default>Experience</option>
                                <option value="1">One year</option>
                                <option value="2">Two years</option>
                                <option value="3">Three years</option>
                                <option value="4">Four years</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-lg-2">
                         <button type='submit' className="btn-register w-100">Search</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default HeroBanner