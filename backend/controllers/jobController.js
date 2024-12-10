const Job = require('../models/Job');
const slugify = require('slugify');

// Utility to handle async errors
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Middleware for validating user authorization (example)
const isAuthorized = (user, job) => {
  return user.role === 'superAdmin' || job.postedBy.toString() === user._id.toString();
};

// Create a new job
const createJob = asyncHandler(async (req, res) => {
  const { title, category, salary, location, description } = req.body;

  if (!title || !category || !salary || !location || !description) {
    return res.status(422).json({ message: 'Required fields are missing' });
  }

  const newJob = new Job({
    ...req.body,
    slug: slugify(title, { lower: true, strict: true }),
    postedBy: req.user._id, // Attach the logged-in user as the poster
  });

  const savedJob = await newJob.save();

  // Populate the postedBy field
  const jobWithPoster = await Job.findById(savedJob._id).populate('postedBy', 'fullName email');

  res.status(201).json({
    success: true,
    message: 'Job created successfully',
    data: jobWithPoster,
  });
});

// Get all jobs with pagination and filtering
const getAllJobs = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, category, city, status = 'Open' } = req.query;

  const filter = { status }; // Default filter to only show open jobs
  if (category) filter.category = category;
  if (city) filter['location.city'] = city;

  const totalJobs = await Job.countDocuments(filter);

  const jobs = await Job.find(filter)
    .sort({ createdAt: -1 }) // Default sorting by newest jobs
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .populate('postedBy', 'fullName email'); // Include user details

  res.status(200).json({
    success: true,
    page: Number(page),
    totalPages: Math.ceil(totalJobs / limit),
    totalJobs,
    data: jobs,
  });
});

// Get a single job by slug
const getJobBySlug = asyncHandler(async (req, res) => {
  const job = await Job.findOne({ slug: new RegExp(`^${req.params.slug}$`, 'i') })
    .populate('postedBy', 'fullName email');

  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  res.status(200).json({
    success: true,
    data: job,
  });
});

// Update a job by slug
const updateJobBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params; // Slug from route parameters
  const updates = req.body; // The updated job details from the request body

  // Fetch the job to be updated
  const job = await Job.findOne({ slug });

  // If job not found
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  // Authorization check: Only the job creator or an admin can update the job
  if (!isAuthorized(req.user, job)) {
    return res.status(403).json({ message: 'Unauthorized action' });
  }

  // Update slug if the title is updated
  if (updates.title) {
    updates.slug = slugify(updates.title, { lower: true, strict: true });

    // Check for slug conflict (make sure it's unique)
    const existingSlug = await Job.findOne({ slug: updates.slug });
    if (existingSlug && existingSlug._id.toString() !== job._id.toString()) {
      return res.status(400).json({ message: 'Slug already exists' });
    }
  }

  // Perform the update
  const updatedJob = await Job.findOneAndUpdate({ slug }, updates, { new: true });

  // Return the updated job with user details populated
  res.status(200).json({
    success: true,
    message: 'Job updated successfully',
    data: updatedJob,
  });
});


// Delete (soft delete) a job by slug
// const deleteJobBySlug = asyncHandler(async (req, res) => {
//   const { slug } = req.params;

//   const job = await Job.findOne({ slug });

//   if (!job) {
//     return res.status(404).json({ message: 'Job not found' });
//   }

//   // Authorization check
//   if (!isAuthorized(req.user, job)) {
//     return res.status(403).json({ message: 'Unauthorized action' });
//   }

//   // Perform soft delete by updating status
//   job.status = 'Closed';
//   await job.save();

//   res.status(200).json({
//     success: true,
//     message: 'Job closed successfully',
//     data: job,
//   });
// });

const deleteJobBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  // Find the job by slug
  const job = await Job.findOne({ slug });

  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  // Authorization check
  if (!isAuthorized(req.user, job)) {
    return res.status(403).json({ message: 'Unauthorized action' });
  }

  // Update status to "Closed"
  job.status = 'Closed';
  await job.save();

  // Permanently delete the job from the database
  await job.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Job status set to Closed and deleted permanently',
  });
});




// Get all jobs posted by a specific user (recruiter)
const getJobsByUser = asyncHandler(async (req, res) => {
  const { userId } = req.params; // Get userId from route parameters
  const { page = 1, limit = 10 } = req.query; // Pagination parameters
  
  // Filter jobs based on postedBy (userId)
  const filter = { postedBy: userId };

  // Count the total number of jobs posted by this user
  const totalJobs = await Job.countDocuments(filter);

  // Fetch the jobs posted by this user, with pagination and sorting
  const jobs = await Job.find(filter)
    .sort({ createdAt: -1 }) // Sort by newest jobs first
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .populate('postedBy', 'fullName email'); // Populate user details (optional)

  res.status(200).json({
    success: true,
    page: Number(page),
    totalPages: Math.ceil(totalJobs / limit),
    totalJobs,
    data: jobs,
  });
});


module.exports = {
  createJob,
  getAllJobs,
  getJobBySlug,
  updateJobBySlug,
  deleteJobBySlug,
  getJobsByUser,
};
