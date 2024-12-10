import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactFlagsSelect from "react-flags-select"; // Import the package

const API_URL = import.meta.env.VITE_BACKEND;


const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    countryCode: "US", 
    role: "jobseeker", // Default to 'jobseeker'
  });
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    type: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle country code selection
  const handleCountrySelect = (code) => {
    setFormData((prevData) => ({
      ...prevData,
      countryCode: code,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
  
    // Allow only numeric characters
    if (/^\d*$/.test(value)) {
      setFormData((prevData) => ({
        ...prevData,
        phoneNumber: value,
      }));
    }
  };

  // Handle form tab switch
  const handleTabSwitch = (role) => {
    setFormData((prevData) => ({
      ...prevData,
      role: role,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/register`, formData);
      setAlertMessage({
        message: response.data.message,
        type: "success",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        countryCode: "US", // Default to Germany
        role: "jobseeker",
      });

      // Reset the alert after 5 seconds
      setTimeout(() => {
        // setAlertMessage({
        //   message: "",
        //   type: "",
        // });
        navigate('/login')

      }, 2000);
    } catch (error) {
      setAlertMessage({
        message: error.response?.data?.message || "Registration failed. Please try again.",
        type: "danger",
      });

      setTimeout(() => {
        setAlertMessage({
          message: "",
          type: "",
        });
      }, 5000);
    }
  };

  return (
    <section className="register_page">
      <div className="new_navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand p-0">
            <img src="/images/logo1.png" alt="" />
          </Link>
          <Link to="/login" className="btn btn-login mx-2" type="submit">
            <i className="fa-solid fa-user me-1"></i>Login
          </Link>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-8 col-12 mx-auto">
            <ul className="nav nav-pills mb-3 d-flex justify-content-center select_tab mb-4" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active mx-3"
                  id="jobseeker-tab"
                  data-bs-toggle="pill"
                  type="button"
                  onClick={() => handleTabSwitch("jobseeker")}
                >
                  Jobseeker
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link mx-3"
                  id="recruiter-tab"
                  data-bs-toggle="pill"
                  type="button"
                  onClick={() => handleTabSwitch("recruiter")}
                >
                  Recruiter
                </button>
              </li>
            </ul>

            <div className="card rounded-4">
              <div className="card-body py-4">
                <h4 className="fw-bold pb-3">{formData.role === "jobseeker" ? "Jobseeker" : "Recruiter"} Registration</h4>
                <form onSubmit={handleSubmit}>
                  <div className="col-12 mb-4">
                    <label htmlFor="fullName">
                      Full Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label htmlFor="phoneNumber">
                      Mobile Number <span>*</span>
                    </label>
                    <div className="row">
                      <div className="col-md-4">
                        <ReactFlagsSelect
                          selected={formData.countryCode}
                          onSelect={handleCountrySelect}
                          searchable
                          placeholder="Select Country"
                          className="w-100"
                        />
                     
                      </div>
                      <div className="col-md-8">
                      <input
                          type="text"
                          className="form-control"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handlePhoneNumberChange}
                          placeholder="Enter your mobile number"
                          required
                          maxLength="12" // Limit input to 12 characters
                          pattern="\d*"
                        />
                        {formData.phoneNumber && formData.phoneNumber.length > 12 && (
                          <small className="text-danger">Phone number must be between 10 to 12 digits.</small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <label htmlFor="email">
                      Email ID <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email ID"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password">
                      Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Minimum 6 characters"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={6}
                    />
                    {formData.password && formData.password.length < 6 && (
                      <small className="text-danger">Password must be at least 6 characters long.</small>
                    )}
                  </div>

                  <div className="text-center">
                    <button className="btn btn-register" type="submit">
                      Create Account
                    </button>
                  </div>
                </form>

                {alertMessage.message && (
                  <h6 className={`text-${alertMessage.type} text-center py-3`} role="alert">
                    {alertMessage.message}
                  </h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;



