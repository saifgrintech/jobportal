import React, { useState,useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';
import DashNav from '../Dashnav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const API_URL = import.meta.env.VITE_BACKEND;
// console.log(API_URL);

const EditJob = () => {

    const { slug } = useParams();

    // State Management
    const [jobTitle, setJobTitle] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [salaryType, setSalaryType] = useState('');
    const [currency, setCurrency] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [jobType, setJobType] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [deadline, setDeadline] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [benefits, setBenefits] = useState([]);
    const [benefitInput, setBenefitInput] = useState('');
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState('');
    const [description, setDescription] = useState('');

    const quillRef = useRef(null);

    // Alert state
    const [alert, setAlert] = useState(null);

     

      // Fetch job data from API when the component mounts
  useEffect(() => {
    // Fetch job data using the id from the URL
    axios.get(`${API_URL}/api/jobs/${slug}`)
      .then((response) => {
        const job = response.data.data;
        const formattedDeadline = new Date(job.deadline).toISOString().split("T")[0];

        setJobTitle(job.title);
        setCategory(job.category);
        setSubCategory(job.subCategory);
        setMinSalary(job.salary.min);
        setMaxSalary(job.salary.max);
        setSalaryType(job.salary.type);
        setCurrency(job.currency);
        setEducation(job.education);
        setExperience(job.experience);
        setJobType(job.jobType);
        setVacancies(job.vacancies);
        setDeadline(formattedDeadline);
        setCity(job.location.city);
        setState(job.location.state);
        setZipcode(job.location.zipcode);
        setAddress(job.location.address);
        setEmail(job.contactDetails.email);
        setPhone(job.contactDetails.phone);
        setWebsite(job.contactDetails.website);
        setWhatsapp(job.contactDetails.whatsapp);
        setBenefits(job.benefits);
        setSkills(job.skills);
        // setBenefitInput(job.benefits);
        // setSkillInput(job);
        setDescription(job.description);
        
      
      })
      .catch((error) => {
        console.error("There was an error fetching the job data!", error);
      });
  }, [slug]);


    // ReactQuill 
    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
    ];

    // Benefit Handlers
    const handleAddBenefit = () => {
        if (benefitInput.trim() !== '') {
            setBenefits([...benefits, benefitInput]);
            setBenefitInput('');
        }
    };

    const handleRemoveBenefit = (index) => {
        const updatedBenefits = [...benefits];
        updatedBenefits.splice(index, 1);
        setBenefits(updatedBenefits);
    };

    // Skill Handlers
    const handleAddSkill = () => {
        if (skillInput.trim() !== '') {
            setSkills([...skills, skillInput]);
            setSkillInput('');
        }
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

   

    // Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedJob = {
            title: jobTitle,
            category,
            subCategory,
            salary: { min: minSalary, max: maxSalary, type: salaryType },
            currency,
            education,
            experience,
            jobType,
            vacancies,
            deadline,
            location: { city, state, zipcode, address },
            contactDetails: { email, phone, website, whatsapp },
            benefits,
            skills,
            description,
        };

        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${API_URL}/api/jobs/${slug}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                 },
                body: JSON.stringify(updatedJob),
            });

            if (response.ok) {
                const result = await response.json();
                setAlert({
                    message: result.message || 'Job updated successfully!',
                    type: 'success',
                });
        

                // Clear the alert after 5 seconds
                setTimeout(() => {
                    setAlert(null);
                }, 5000);

            } else {
                setAlert({
                    message: 'Error updating job',
                    type: 'danger',
                });

                // Clear the alert after 5 seconds
                setTimeout(() => {
                    setAlert(null);
                }, 5000);
            }
        } catch (error) {
            console.error('Error:', error);
            setAlert({
                message: 'Error updating form. Please try again later.',
                type: 'danger',
            });

            // Clear the alert after 5 seconds
            setTimeout(() => {
                setAlert(null);
            }, 5000);
        }
    };

    return (
        <div className="main_wrapper">
            <Sidebar />
            <div className="main_content">
                <DashNav />
                <div className="container-fluid">
                    <div className="col-lg-12 mx-auto">
                    <div className="d-flex align-items-center justify-content-between mt-4 py-3">
                       <h4 className="m-0">Edit Job</h4>
                       <Link to='/dashboard/job-listing' className="btn btn-warning btn-sm"><i className="fa-solid fa-eye me-2"></i>View List</Link>
                       </div>
                        <div className="card border rounded-4 create_job_form">
                            <div className="card-body p-md-4">
                            {alert && (
                                    <div
                                        className={`alert alert-${alert.type} alert-dismissible fade show`}
                                        role="alert"
                                    >
                                        {alert.message}
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                )}


                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="">Job Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={jobTitle}
                                                onChange={(e) => setJobTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label htmlFor="">Job Category</label>
                                            <select
                                                className="form-select"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                <option value="Technology">Technology</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Education">Education</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label htmlFor="">Sub Category</label>
                                            <select
                                                className="form-select"
                                                value={subCategory}
                                                onChange={(e) => setSubCategory(e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                <option value="Sub1">Sub1</option>
                                                <option value="Sub2">Sub2</option>
                                            </select>
                                        </div>
                                        {/* Salary Section */}
                                        <h5 className='py-3'>Salary</h5>
                                        <div className="col-md-3 mb-4">
                                            <label htmlFor="">Minimum Salary</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={minSalary}
                                                onChange={(e) => setMinSalary(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label htmlFor="">Maximum Salary</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={maxSalary}
                                                onChange={(e) => setMaxSalary(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label htmlFor="">Salary Type</label>
                                            <select
                                                className="form-select"
                                                value={salaryType}
                                                onChange={(e) => setSalaryType(e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                <option value="Project Basis">Project Basis</option>
                                                <option value="Monthly">Monthly</option>
                                                <option value="Hourly">Hourly</option>
                                                <option value="Yearly">Yearly</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label htmlFor="">Salary Currency</label>
                                            <select
                                                className="form-select"
                                                value={currency}
                                                onChange={(e) => setCurrency(e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                <option value="USD">USD</option>
                                                <option value="INR">INR</option>
                                                
                                            </select>
                                        </div>

                                        <h5 className='py-3'>Advance Information</h5>
                                        <div className="col-md-4 mb-4">
                                            <label htmlFor="">Education</label>
                                            <select
                                            value={education}
                                            onChange={(e) => setEducation(e.target.value)}
                                            className="form-select" aria-label="Default select example">
                                            <option value="High School">High School</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Bachelor Degree">Bachelor Degree</option>
                                            <option value="Master Degree">Master Degree</option>
                                            <option value="PHD">PHD</option>
                                            <option value="Any">Any</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label htmlFor="">Experience</label>
                                            <select 
                                            value={experience}
                                            onChange={(e) => setExperience(e.target.value)}
                                            className="form-select" aria-label="Default select example">
                                             <option value="Fresher">Fresher</option>
                                            <option value="1 Year">1 Year</option>
                                            <option value="2 Years">2 Years</option>
                                            <option value="3+ Years">3+ Years</option>
                                            <option value="5+ Years">5+ Years</option>
                                            <option value="8+ Years">8+ Years</option>
                                            <option value="10+ Years">10+ Years</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label htmlFor="">Job Type</label>
                                            <select
                                            value={jobType}
                                            onChange={(e) => setJobType(e.target.value)}
                                            className="form-select" aria-label="Default select example">
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Contractual">Contractual</option>
                                            <option value="Intern">Intern</option>
                                            <option value="Freelance">Freelance</option>
                                            <option value="Remote">Remote</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="">Total Vacancies</label>
                                            <input 
                                            value={vacancies}
                                            onChange={(e) => setVacancies(e.target.value)}
                                            type="number" className='form-control' />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="">Deadline Expired</label>
                                            <input
                                            value={deadline}
                                            onChange={(e) => setDeadline(e.target.value)}
                                            type="date" className='form-control' />
                                        </div>

                                        <h5 className='py-3'>Location</h5>
                                        <div className="col-md-4 mb-4">
                                            <label htmlFor="">City</label>
                                            <input
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            type="text" className='form-control' />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label htmlFor="">State</label>
                                            <input 
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            type="text" className='form-control' />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label htmlFor="">Zipcode</label>
                                            <input 
                                            value={zipcode}
                                            onChange={(e) => setZipcode(e.target.value)}
                                            type="text" className='form-control' />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="">Address</label>
                                            <input
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            type="text" className='form-control' />
                                        </div>

                                        {/* Benefits Section */}

                                        <h5 className="py-3">Additional Benefits</h5>
                                        <div className="d-flex mb-4 flex-wrap">
                                            {benefits.map((benefit, index) => (
                                                <div key={index} className="benefits-tag me-2">
                                                  <label htmlFor="">
                                                  <span>{benefit}</span>
                                                    <i
                                                        className="fa-solid fa-xmark ms-2"
                                                        onClick={() => handleRemoveBenefit(index)}
                                                    ></i>
                                                  </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-12 mb-4">
                                          <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={benefitInput}
                                                    onChange={(e) => setBenefitInput(e.target.value)}
                                                    placeholder="Enter a benefit"
                                                />            
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick={handleAddBenefit}
                                                >
                                                    Add +
                                                </button>
                                           </div>
                                        </div>

                                         {/* Skills Section */}
                                         <h5 className="py-3">Skills</h5>
                                        <div className="d-flex mb-4 flex-wrap">
                                            {skills.map((skills, index) => (
                                                <div key={index} className="benefits-tag me-2">
                                                  <label htmlFor="">
                                                  <span>{skills}</span>
                                                    <i
                                                        className="fa-solid fa-xmark ms-2"
                                                        onClick={() => handleRemoveSkill(index)}
                                                    ></i>
                                                  </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-12 mb-4">
                                          <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={skillInput}
                                                    onChange={(e) => setSkillInput(e.target.value)}
                                                    placeholder="Enter a benefit"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick={handleAddSkill}
                                                >
                                                    Add +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Job Description */}
                                        <h5 className="py-3">Job Description</h5>
                                        <div className="col-12 mb-4">
                                            <ReactQuill
                                                theme="snow"
                                                ref={quillRef} 
                                                value={description}
                                                onChange={setDescription}
                                                modules={modules}
                                                formats={formats}
                                            />
                                        </div>
                                        {/* Contact Details */}
                                        <h5 className="py-3">Contact Details</h5>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" 
                                             value={phone}
                                             onChange={(e) => setPhone(e.target.value)}
                                            className='form-control' placeholder='+1 123456789' />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="">Website Link</label>
                                            <input type="url"
                                             value={website}
                                             onChange={(e) => setWebsite(e.target.value)}
                                             className='form-control' placeholder='https://example.com' />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="">WhatsApp</label>
                                            <input type="text"
                                             value={whatsapp}
                                             onChange={(e) => setWhatsapp(e.target.value)}
                                            className='form-control' placeholder='whatsapp number' />
                                        </div>
                                        {/* Submit Button */}
                                        <div className="col-12 text-center">
                                            <button className="btn btn-success w-auto rounded-0">
                                                Publish
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditJob;
