import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobseeker");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState({
    message: "",
    type: "",
  });

  const [activeTab, setActiveTab] = useState("jobseeker");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/login`, { email, password, role });

      console.log(response.data);

      if (response.data.token && response.data.user) {
        // Use the login function from context to update the user state
        login({
          token: response.data.token,
          user: response.data.user,
        });

        setAlertMessage({
        message: response.data.message,
        type: "success",
      });
        setEmail("");
        setPassword("");

        console.log("User Role:", response.data.user.role);

      
        setTimeout(() => {
          setAlertMessage("");
           // Navigate based on role
          if (response.data.user.role === "recruiter") {
            console.log("Redirecting to recruiter dashboard");
            navigate("/dashboard/recruiter");
          } else if (response.data.user.role === "jobseeker") {
            console.log("Redirecting to jobseeker dashboard");
            navigate("/dashboard/jobseeker");
          } else {
            navigate("/"); // Redirect to homepage or another page
          }

        }, 2000);
      } else {
        // setErrorMessage("Login failed. Invalid credentials.");
        setAlertMessage({
          message: error.response?.data?.message || "Login failed. Invalid credentials.",
          type: "danger",
        });

        setTimeout(() => { setAlertMessage({ message: "",  type: "", }); }, 4000);
      }
    } catch (error) {
      console.error("Login error:", error);
      // setErrorMessage(error.response?.data?.message || "An error occurred");
      setAlertMessage({
        message: error.response?.data?.message || "An error occurred",
        type: "danger",
      });

      setTimeout(() => { setAlertMessage({ message: "",  type: "", }); }, 4000);
    }
  };

  const handleTabClick = (role) => {
    setRole(role);
    setActiveTab(role);
  };

  return (
    <section className="login_page">
      <div className="new_navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand p-0">
            <img src="/images/logo1.png" alt="" />
          </Link>
          <Link to="/register" className="btn btn-login mx-2">
            <i className="fa-solid fa-user-pen me-1"></i>Register
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="row py-5">
          <div className="col-lg-5 col-md-9 mx-auto">
            <ul className="nav nav-pills mb-3 d-flex justify-content-center select_tab mb-4" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link mx-3 ${activeTab === "jobseeker" ? "active" : ""}`}
                  id="jobseeker-tab"
                  onClick={() => handleTabClick("jobseeker")}
                >
                  Jobseeker
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link mx-3 ${activeTab === "recruiter" ? "active" : ""}`}
                  id="recruiter-tab"
                  onClick={() => handleTabClick("recruiter")}
                >
                  Recruiter
                </button>
              </li>
            </ul>

            <div className="card rounded-4">
              <div className="card-body">
                <h4 className="fw-bold py-3">Login</h4>
                <form onSubmit={handleLoginSubmit}>
                  <div>
                    <label htmlFor="">Email ID</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                     
                    />
                     
                  </div>

                  <div className="text-end mt-2">
                    <Link className="text-primary w-100">
                      <small>Forgot Password?</small>
                    </Link>
                  </div>

                  {/* {successMessage && (
                    <h6 className="text-success text-center py-2">{successMessage}</h6>
                  )}
                  {errorMessage && (
                    <h6 className="text-danger text-center py-2">{errorMessage}</h6>
                  )} */}

                  {alertMessage.message && (
                  <h6 className={`text-${alertMessage.type} text-center py-3`} role="alert">
                    {alertMessage.message}
                  </h6>
                )}

                  <button type="submit" className="login_page_btn">
                    Login
                  </button>
                </form>

                <div className="text-center mt-3 pb-3" style={{ fontSize: "15px", fontWeight: "500" }}>
                  New to our website?
                  <Link to="/register" className="ms-1 text-underline text-primary">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
