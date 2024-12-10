import React, { useEffect, useState } from "react";
import "./newdash.css";
import Sidebar from "./Sidebar";
import DashNav from "./Dashnav";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND;

const RecruiterDashboard = () => {
  const [jobsCreated, setJobsCreated] = useState(0); 
  const [name, setName] = useState(''); 
   
  const [loading, setLoading] = useState(true);  

  // Fetch jobs created by the logged-in user
  useEffect(() => {
    const fetchJobsCreated = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const user = JSON.parse(localStorage.getItem("user")); // Get user data from localStorage
        const userId = user ? user.userId : null;  
        const userName = user ? user.fullName : null;  
        setName(userName);


        if (!userId) {
          console.error("User ID not found in localStorage.");
          return;
        }

        // Make the API call with the userId and token
        const response = await axios.get(`${API_URL}/api/jobs/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token for authentication
          },
        });

        // Set the number of jobs created by the user
        setJobsCreated(response.data.totalJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false); // Stop loading when the data is fetched
      }
    };

    fetchJobsCreated();
  }, []);

  return (
    <>
      <div className="main_wrapper">
        <Sidebar />

        <div className="main_content">
          <DashNav />
          <div className="container-fluid">
            <h4 className="py-4 mt-4 text-center"> Welcome <span className="text-success text-uppercase ">"{name}"</span> to the dashboard </h4>
            {/* <div className="row">
              <div className="col-lg-3">
               <div className="card">
                <div className="card-body text-center">
                <h5 className="text-primary">Jobs Created</h5>
                 {loading ? <h6>Loading...</h6> : <h6>{jobsCreated}</h6>}
                </div>
               </div>
              </div>
              <div className="col-lg-3">
               <div className="card">
                <div className="card-body text-center">
                <h5 className="text-warning">Application Received</h5>
                 {loading ? <h6>Loading...</h6> : <h6>0</h6>}
                </div>
               </div>
              </div>
             
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruiterDashboard;
