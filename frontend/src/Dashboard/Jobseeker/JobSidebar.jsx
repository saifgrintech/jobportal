import {React, useEffect} from 'react';
import { Link } from 'react-router-dom'; 

const JobSidebar = () => {

  return (
   <>
        <div className={`left_sidebar p-3 `}>
                <div className="d-flex justify-content-between">
                    <Link to='/dashboard' style={{textDecoration:"none", color:"white"}}>
                         <h4 className='mb-3'>Job Portal</h4>
                    </Link>
                </div>
                      
                  <div  className='mt-4'>
                  <span className='small text-uppercase text-gray-500 '>pages</span>
                    <ul className='p-0 side_list mt-2'>
                         <hr className='m-0' />
                    <li>
                    <p className="d-flex justify-content-between m-0 py-2">
                    <Link to='/dashboard/jobseeker' className='list_item p-0'><i className="fa-solid fa-gauge me-2"></i>Dashboard</Link>
                    </p>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2">
                        <Link to='' className='list_item p-0'><i className="fa-solid fa-user-circle me-2"></i>My Profile</Link>
                        </p>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-solid fa-address-card me-2"></i> My Jobs</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample">
                        <div className="card ">
                        <Link className="" to="">Jobs Applied</Link>
                        <Link className="" to="">Jobs Saved</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2">
                        <Link to='' className='list_item p-0'><i className="fa-solid fa-pencil me-2"></i>Apply Job</Link>
                        </p>
                    </li><hr className='m-0' />



                 
                  
                   
                        
                    </ul>
                  </div>
                </div>
   </>
  )
}

export default JobSidebar