const express = require('express');
const jobController = require('../controllers/jobController');
const authenticateUser = require('../middleware/authMidddleware');

const router = express.Router();

// Protected routes
router.post('/jobs', authenticateUser, jobController.createJob);
router.get('/jobs', jobController.getAllJobs);
router.get('/jobs/:slug', jobController.getJobBySlug);
router.put('/jobs/:slug', authenticateUser, jobController.updateJobBySlug);
router.delete('/jobs/:slug', authenticateUser, jobController.deleteJobBySlug);


// New route to get all jobs posted by a specific user (protected)
router.get('/jobs/user/:userId', authenticateUser, jobController.getJobsByUser);


module.exports = router;
