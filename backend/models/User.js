const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  fullName: { 
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true,
  },
  password: { 
    type: String,
    required: true,
  },
  role: { 
    type: String,
    enum: ["superAdmin", "recruiter", "jobseeker"],
    default: "jobseeker",
  },
  countryCode: { 
    type: String,
    required: true,
  },
  phoneNumber: {  
    type: String,
    required: true,
  },
  isActive: { 
    type: Boolean, 
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);  
