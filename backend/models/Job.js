const mongoose = require('mongoose');
const slugify = require('slugify');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
  },
  salary: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  currency: {
    type: String,
    default: 'USD',
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  vacancies: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Open', 'Closed', 'Expired'],
    default: 'Open',
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  benefits: [
    {
      type: String,
      description: String,
    }
  ],
  skills: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  contactDetails: {
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  companyDescription: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

// Slugify title and ensure uniqueness
JobSchema.pre('save', async function (next) {
  // Generate the initial slug
  let generatedSlug = slugify(this.title, { lower: true, strict: true });

  // Check if the slug already exists in the database
  const existingJob = await mongoose.models.Job.findOne({ slug: generatedSlug });

  // If a job with the same slug already exists, append a number to make it unique
  if (existingJob) {
    let counter = 1;
    let newSlug = `${generatedSlug}-${counter}`;

    // Keep checking until we find a unique slug
    while (await mongoose.models.Job.findOne({ slug: newSlug })) {
      counter++;
      newSlug = `${generatedSlug}-${counter}`;
    }

    // Set the unique slug
    generatedSlug = newSlug;
  }

  // Set the slug and move to the next middleware
  this.slug = generatedSlug;
  next();
});

module.exports = mongoose.model('Job', JobSchema);
