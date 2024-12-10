import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import DashNav from '../Dashnav';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_BACKEND;

const customStyles = {
  headCells: {
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      backgroundColor: '#f1f1f1',
      color: '#333',
      padding: '10px',
      textAlign: 'center',
    },
  },
};

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState('success'); // 'success' or 'danger'

  const token = localStorage.getItem('token'); // Get token from localStorage

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Get user data from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user ? user.userId : null;

        if (!userId) {
          console.error('User ID not found in localStorage.');
          return;
        }
        // Fetch jobs posted by the current user
        const response = await axios.get(`${API_URL}/api/jobs/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setJobs(response.data.data); // Set the jobs created by the user
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Delete job
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/api/jobs/${jobToDelete}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
      setAlertMessage('Job deleted successfully');
      setAlertType('success');
      setJobs((prevJobs) => prevJobs.filter((job) => job.slug !== jobToDelete)); // Filter out the deleted job using the slug
    } catch (error) {
      console.error('Error deleting job:', error);
      setAlertMessage('Failed to delete the job.');
      setAlertType('danger');
    } finally {
      setModalVisible(false);
      setJobToDelete(null);
    }
  };

  // Define columns for the DataTable
  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: 'Job Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'Created Date',
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
    {
      name: 'Deadline',
      selector: (row) => new Date(row.deadline).toLocaleDateString(),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="dropdown dropend">
          <i
            className="bi bi-three-dots-vertical dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item text-success" type="button">
                <i className="bi bi-eye me-2"></i> View
              </button>
            </li>
            <li>
              {/* Only render Edit link if slug is available */}
              {row.slug ? (
                <Link
                  to={`/dashboard/edit-job/${row.slug}`}
                  className="dropdown-item text-warning"
                  type="button"
                >
                  <i className="bi bi-pencil me-2"></i> Edit
                </Link>
              ) : (
                <span className="text-muted">No slug available</span>
              )}
            </li>
            <li>
              <button
                className="dropdown-item text-danger"
                type="button"
                onClick={() => {
                  setJobToDelete(row.slug); // Set job slug to delete
                  setModalVisible(true);
                }}
              >
                <i className="bi bi-trash me-2"></i> Delete
              </button>
            </li>
          </ul>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <div className="main_wrapper">
        <Sidebar />
        <div className="main_content">
          <DashNav />
          <div className="container px-sm-5">
          <div className="d-flex align-items-center justify-content-between mt-4 py-3">
              <h4 className="m-0">Post a Job</h4>
              <Link to='/dashboard/create-job' className="btn btn-success btn-sm"><i className="fa-solid fa-plus me-2"></i>Create a job</Link>
           </div>
            <div className="category_listing mt-4">
              <div className="">
                <DataTable
                  columns={columns}
                  data={jobs}
                  customStyles={customStyles}
                  progressPending={loading}
                  pagination
                  highlightOnHover
                  striped
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {modalVisible && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalVisible(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this job?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalVisible(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dismissible Alert */}
      {alertMessage && (
        <div
          className={`alert alert-${alertType} alert-dismissible fade show`}
          role="alert"
        >
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertMessage(null)}
          ></button>
        </div>
      )}
    </>
  );
};

export default JobListing;
