import {React, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import { AuthContext } from '../../context/AuthContext';

const JobSidebar = () => {

  const { isSidebarOpen, setIsSidebarOpen, toggleSidebar } = useContext(AuthContext);
  useEffect(() => {
      const updateSidebarClass = () => {
        setIsSidebarOpen(window.innerWidth <= 992);
      };
  
      // Run on window resize
      window.addEventListener('resize', updateSidebarClass);
  
      // Cleanup event listener on unmount
      return () => window.removeEventListener('resize', updateSidebarClass);
    }, [setIsSidebarOpen]);

  return (
   <>
        <div className={`left_sidebar p-3 ${isSidebarOpen ? 'open' : ''}`}>
        <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link to='/' style={{textDecoration:"none", color:"white"}}>
                         <h4 className='m-0'>Job Portal</h4>
                    </Link>
                    <div className='toggle_div'>
                        <i className="fa-solid fa-xmark toggle_bar"
                            onClick={toggleSidebar}
                            style={{ cursor: 'pointer' }}
                        ></i>
                     </div>
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