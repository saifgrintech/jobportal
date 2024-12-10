import React from 'react'
import DashNav from '../Recruiter/Dashnav'
import JobSidebar from './JobSidebar'
import JobNavbar from './JobNavbar'

const JobseekerDashboard = () => {
  return (
    <div className="main_wrapper">
    <JobSidebar  />

    <div className="main_content">
      <JobNavbar />
      <div className="container px-sm-5">
        <h4 className="text-center py-4 mt-4">Welcome to the Jobseeker dashboard </h4>
       <div className="mt-5 col-lg-4 col-11 mx-auto">
       </div>
      </div>
    </div>
  </div>
  )
}

export default JobseekerDashboard