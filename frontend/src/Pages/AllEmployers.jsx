import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AllEmployers = () => {
  return (
    <>
      <div className="all_employers_page">
        <Navbar />
        <div className="hero_banner d-flex flex-column align-items-center justify-content-center ">
          <h1 className="fw-bold position-relative">Employers / Companies</h1>
        </div>

        <div className="container py-5">
          <h3 className="text-center mb-5">All Companies</h3>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company5.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Mumbai
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company4.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Hyderabad
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-5">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company3.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Delhi
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-5">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company1.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Chennai
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-5">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company5.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Mumbai
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-5">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company4.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Hyderabad
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-5">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company3.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Delhi
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-5">
              <div className="card company_list_card border-0 shadow">
                <div className="card-body">
                  <div className="logo_div border-0 me-3 mb-3 shadow ">
                    <img className="" src="/images/company1.gif" alt="" />
                  </div>
                  <div className="pt-5 pb-3">
                    <Link to='/employer-profile'>
                      <h5>XYZ Pvt. Ltd</h5>
                    </Link>
                    <p className="text-muted m-0">
                      Digital Marketing Solutions for Tomorrow
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div className="text-muted me-2">
                      <i className="fa-solid fa-location-dot me-1 "></i>
                      Chennai
                    </div>
                    <p className="text_blue m-0">40 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEmployers;
