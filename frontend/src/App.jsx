import React, { useContext } from 'react';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CategoryList from './components/CategoryList';
import JobDetail from './components/JobDetail';
import ProfilePage from './Pages/recruiter/ProfilePage';
import Contact from './components/Contact';
import About from './components/About';
import AllJobPost from './Pages/AllJobPost';
import EmployerJobs from './Pages/EmployerJobs';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import AllEmployers from './Pages/AllEmployers';
import AllCategories from './components/AllCategories';
import JobPost from './Pages/JobPost';
import Faq from './Pages/Faq';
import CreateJob from './Dashboard/Recruiter/RecPages/CreateJob';
import JobListing from './Dashboard/Recruiter/RecPages/JobListing';
import EditJob from './Dashboard/Recruiter/RecPages/EditJob';
import RecruiterDashboard from './Dashboard/Recruiter/RecruiterDashboard';
import { AuthContext } from './context/AuthContext';  // Import AuthContext
import ProtectedRoute from './routes/PrivateRoute';
import JobseekerDashboard from './Dashboard/Jobseeker/JobseekerDashboard';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';

const App = () => {
  const { user } = useContext(AuthContext);  // Access the current user from context

  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faqs' element={<Faq />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/all-job-posts' element={<AllJobPost />} />
        <Route path='/all-employers' element={<AllEmployers />} />
        <Route path='/all-categories' element={<AllCategories />} />
        <Route path='/employer-profile' element={<EmployerJobs />} />
        <Route path='/job-post' element={<JobPost />} />
        <Route path='/cat-list' element={<CategoryList />} />
        <Route path='/job-detail' element={<JobDetail />} />

        {/* Protect the routes for the recruiter */}
   
      <Route path='/dashboard/recruiter'
          element={<ProtectedRoute element={<RecruiterDashboard />} requiredRole="recruiter" />}
        />
        <Route path='/dashboard/job-listing'
          element={<ProtectedRoute element={<JobListing />} requiredRole="recruiter" />}
        />
        <Route path='/dashboard/create-job'
          element={<ProtectedRoute element={<CreateJob />} requiredRole="recruiter" />}
        />
        <Route path='/dashboard/edit-job/:slug'
          element={<ProtectedRoute element={<EditJob />} requiredRole="recruiter" />}
        />


         {/* Protect the routes for the jobseeker */}
         <Route path='/dashboard/jobseeker'
         element={<ProtectedRoute element={<JobseekerDashboard />} requiredRole= "jobseeker" />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
