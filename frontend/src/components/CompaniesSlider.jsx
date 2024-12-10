import React from 'react'
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CompaniesSlider = () => {
  return (
    <>
      <div className="top_companies container py-5">
        <h4 className="mb-3 text-center">Top companies hiring now</h4>
        <div className="row align-items-center">
            <div className="col-md-3">
                <img src="/images/bg1.png" className='w-100 rounded' alt="" />
            </div>
            <div className="col-md-9">
            <Swiper
          className="pb-4 mt-4"
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            475: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        
        >
          <SwiperSlide>
            <div className="card">
              <div className="card-body text-center">
                <img src="/images/company1.gif" alt="" />
                <div className="py-3 my-3 job_desc">
                  <h5 className="mb-2">Persistent</h5>
                  <p className="m-0 d-flex align-items-center justify-content-center sml_text">
                    <span className="border-end d-inline-flex align-items-center me-2 pe-2">
                      <i className="fa-solid fa-star me-1"></i> 3.7
                    </span>
                    <span>3.3K+ reviews</span>
                  </p>
                </div>
                <p className="main_desc">Trusted global solutions company.</p>
                <div className="d-flex justify-content-center align-items-center  ">
                                   <Link to='/job-detail' className="btn btn-login mx-2">View More</Link>
                                   <div className="save_post mx-2"><i className="fa-regular fa-heart"></i></div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body text-center">
                <img src="/images/company2.gif" alt="" />
                <div className="py-3 my-3 job_desc">
                  <h5 className="mb-2">Capgemini</h5>
                  <p className="m-0 d-flex align-items-center justify-content-center sml_text">
                    <span className="border-end d-inline-flex align-items-center me-2 pe-2">
                      <i className="fa-solid fa-star me-1"></i> 3.7
                    </span>
                    <span>3.3K+ reviews</span>
                  </p>
                </div>
                <p className="main_desc">Trusted global solutions company.</p>
                <div className="d-flex justify-content-center align-items-center  ">
                                   <Link to='/job-detail' className="btn btn-login mx-2">View More</Link>
                                   <div className="save_post mx-2"><i className="fa-regular fa-heart"></i></div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body text-center">
                <img src="/images/company3.gif" alt="" />
                <div className="py-3 my-3 job_desc">
                  <h5 className="mb-2">Cognizant</h5>
                  <p className="m-0 d-flex align-items-center justify-content-center sml_text">
                    <span className="border-end d-inline-flex align-items-center me-2 pe-2">
                      <i className="fa-solid fa-star me-1"></i> 3.7
                    </span>
                    <span>3.3K+ reviews</span>
                  </p>
                </div>
                <p className="main_desc">Trusted global solutions company.</p>
                <div className="d-flex justify-content-center align-items-center  ">
                                   <Link to='/job-detail' className="btn btn-login mx-2">View More</Link>
                                   <div className="save_post mx-2"><i className="fa-regular fa-heart"></i></div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body text-center">
                <img src="/images/company4.gif" alt="" />
                <div className="py-3 my-3 job_desc">
                  <h5 className="mb-2">ICICI Bank</h5>
                  <p className="m-0 d-flex align-items-center justify-content-center sml_text">
                    <span className="border-end d-inline-flex align-items-center me-2 pe-2">
                      <i className="fa-solid fa-star me-1"></i> 3.7
                    </span>
                    <span>3.3K+ reviews</span>
                  </p>
                </div>
                <p className="main_desc">Trusted global solutions company.</p>
                <div className="d-flex justify-content-center align-items-center  ">
                                   <Link to='/job-detail' className="btn btn-login mx-2">View More</Link>
                                   <div className="save_post mx-2"><i className="fa-regular fa-heart"></i></div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body text-center">
                <img src="/images/company5.gif" alt="" />
                <div className="py-3 my-3 job_desc">
                  <h5 className="mb-2">Accolite Digital</h5>
                  <p className="m-0 d-flex align-items-center justify-content-center sml_text">
                    <span className="border-end d-inline-flex align-items-center me-2 pe-2">
                      <i className="fa-solid fa-star me-1"></i> 3.7
                    </span>
                    <span>3.3K+ reviews</span>
                  </p>
                </div>
                <p className="main_desc">Trusted global solutions company.</p>
                <div className="d-flex justify-content-center align-items-center  ">
                                   <Link to='/job-detail' className="btn btn-login mx-2">View More</Link>
                                   <div className="save_post mx-2"><i className="fa-regular fa-heart"></i></div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body text-center">
                <img src="/images/company6.gif" alt="" />
                <div className="py-3 my-3 job_desc">
                  <h5 className="mb-2">Optum</h5>
                  <p className="m-0 d-flex align-items-center justify-content-center sml_text">
                    <span className="border-end d-inline-flex align-items-center me-2 pe-2">
                      <i className="fa-solid fa-star me-1"></i> 3.7
                    </span>
                    <span>3.3K+ reviews</span>
                  </p>
                </div>
                <p className="main_desc">Trusted global solutions company.</p>
                <div className="d-flex justify-content-center align-items-center  ">
                                   <Link to='/job-detail' className="btn btn-login mx-2">View More</Link>
                                   <div className="save_post mx-2"><i className="fa-regular fa-heart"></i></div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body text-center">
                <img src="/images/company7.gif" alt="" />
                <div className="py-3 my-3 job_desc">
                  <h5 className="mb-2">J.P Morgan</h5>
                  <p className="m-0 d-flex align-items-center justify-content-center sml_text">
                    <span className="border-end d-inline-flex align-items-center me-2 pe-2">
                      <i className="fa-solid fa-star me-1"></i> 3.7
                    </span>
                    <span>3.3K+ reviews</span>
                  </p>
                </div>
                <p className="main_desc">Trusted global solutions company.</p>
                <div className="d-flex justify-content-center align-items-center  ">
                                   <Link to='/job-detail' className="btn btn-login mx-2">View More</Link>
                                   <div className="save_post mx-2"><i className="fa-regular fa-heart"></i></div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
          <div className="d-flex justify-content-center "><Link to='/all-employers' className='btn btn-outline-login'>View all companies</Link></div>
            </div>
        </div>
      
      </div>
    </>

  );
};

export default CompaniesSlider;
