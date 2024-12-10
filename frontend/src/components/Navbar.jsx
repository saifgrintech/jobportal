import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
        <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
            <Link to='/' className="navbar-brand" >
                <img src="/images/logo1.png" alt="" />
            </Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            
            <ul className="navbar-nav mx-auto d-none d-lg-flex mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                <Link to='/about' className="nav-link " >About</Link>
                </li>
               
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Jobs <i style={{fontSize:"14px"}} className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="dropdown-content">
                    <li><Link to='/all-categories' className="dropdown-item" >Job Categories</Link></li>
                    <li><Link to='/all-job-posts' className="dropdown-item" >Job Lists</Link></li>
                    {/* <li><Link to='/all-employers' className="dropdown-item">Employers </Link></li> */}
                </ul>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Employer <i style={{fontSize:"14px"}} className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="dropdown-content">
                    <li><Link to='/all-employers' className="dropdown-item" >All Employers</Link></li>
                    <li><Link to='/employer-profile' className="dropdown-item">Employer Profile </Link></li>
                    <li><Link to='/job-post' className="dropdown-item">Job Post </Link></li>
                </ul>
                </li>

                
                <li className="nav-item">
                <Link to='/contact' className="nav-link " >Contact Us</Link>
                </li>
            </ul>
            <form className="d-flex ms-auto me-3  both_btns" role="search">
                <Link to='/login' className="btn btn-login mx-2" type="submit"><i className="fa-solid fa-user me-1"></i>Login</Link>
                <Link to='/register' className="btn btn-register mx-2" type="submit"><i className="fa-solid fa-user-pen me-1"></i>Register</Link>
            </form>
            {/* <ul className="employer p-0 m-0">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    For Employers
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" >Employer Login</Link></li>
                    <li><Link className="dropdown-item" >Buy Online</Link></li>
                    <li><Link className="dropdown-item" >Hiring Suite</Link></li>
                </ul>
                </li>
            </ul> */}

            {/* </div> */}
        </div>
        </nav>
   </>
  )
}

export default Navbar