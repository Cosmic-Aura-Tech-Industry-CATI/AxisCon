import React, { useState, useEffect } from 'react';
import './Register.css';

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    organization: '',
    designation: '',
    country: '',
    city: '',
    
    // Professional Information
    experienceLevel: '',
    fieldOfInterest: '',
    linkedin: '',
    website: '',
    bio: '',
    
    // Conference Details
    workshopSelection: [],
    networkingEvents: false,
    paperSubmission: false,
    paperTitle: '',
    accommodation: 'none',
    dietaryRestrictions: '',
    
    // Terms Agreement
    agreeTerms: false,
    receiveUpdates: true
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fieldsOfInterest = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Cloud Computing',
    'Cybersecurity',
    'Blockchain',
    'IoT',
    'DevOps',
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Other'
  ];

  const workshops = [
    { id: 'ai', name: 'AI & Machine Learning Workshop' },
    { id: 'cloud', name: 'Cloud Architecture Masterclass' },
    { id: 'cyber', name: 'Cybersecurity Fundamentals' },
    { id: 'blockchain', name: 'Blockchain Development' },
    { id: 'devops', name: 'DevOps Best Practices' },
    { id: 'data', name: 'Data Science & Analytics' },
    { id: 'uiux', name: 'UI/UX Design Principles' },
    { id: 'iot', name: 'Internet of Things (IoT)' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleWorkshopChange = (workshopId) => {
    setFormData(prev => {
      const selected = [...prev.workshopSelection];
      if (selected.includes(workshopId)) {
        return { ...prev, workshopSelection: selected.filter(id => id !== workshopId) };
      } else {
        return { ...prev, workshopSelection: [...selected, workshopId] };
      }
    });
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.organization.trim()) newErrors.organization = 'Organization/Institution is required';
    }
    
    else if (currentStep === 2) {
      if (!formData.experienceLevel) newErrors.experienceLevel = 'Please select your experience level';
      if (!formData.fieldOfInterest) newErrors.fieldOfInterest = 'Please select your field of interest';
    }
    
    else if (currentStep === 3) {
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Here you would typically send the data to your backend
      console.log('Registration submitted:', formData);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="register-page">
        <div className="register-success">
          <div className="success-icon">✓</div>
          <h1>Registration Successful!</h1>
          <p>Thank you for registering for Axis Conference 2024. We have sent a confirmation email to <strong>{formData.email}</strong></p>
          
          <div className="success-details">
            <h3>Registration Summary</h3>
            <div className="summary-item">
              <span>Name:</span>
              <span className="summary-value">{formData.fullName}</span>
            </div>
            <div className="summary-item">
              <span>Organization:</span>
              <span className="summary-value">{formData.organization}</span>
            </div>
            <div className="summary-item">
              <span>Registration Type:</span>
              <span className="summary-value">Standard Conference Pass</span>
            </div>
            {formData.workshopSelection.length > 0 && (
              <div className="summary-item">
                <span>Workshops Selected:</span>
                <span className="summary-value">{formData.workshopSelection.length}</span>
              </div>
            )}
            <div className="summary-item">
              <span>Registration ID:</span>
              <span className="summary-value">AXIS{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="summary-item">
              <span>Status:</span>
              <span className="summary-value status-confirmed">Confirmed</span>
            </div>
          </div>

          <div className="success-actions">
            <button className="btn btn--primary" onClick={() => window.location.href = '/'}>
              Return to Home
            </button>
            <button className="btn btn--ghost" onClick={() => window.print()}>
              Print Confirmation
            </button>
          </div>

          <div className="success-note">
            <p>Please bring a copy of this confirmation and a valid ID to the registration desk.</p>
            <p className="note-small">The conference schedule and workshop details will be sent to your email closer to the event date.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page">
      {/* Hero Section */}
      <section className="register-hero">
        <div className="register-hero__content">
          <span className="eyebrow">Free Registration</span>
          <h1>Register for Axis Conference 2024</h1>
          <p>Join us for three days of learning, networking, and innovation — completely free of charge</p>
        </div>
      </section>

      {/* Main Registration Form */}
      <section className="register-section">
        <div className="register-container">
          {/* Progress Bar */}
          <div className="register-progress">
            <div className="progress-steps">
              <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
                <span className="step-number">1</span>
                <span className="step-label">Personal Info</span>
              </div>
              <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
                <span className="step-number">2</span>
                <span className="step-label">Professional</span>
              </div>
              <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
                <span className="step-number">3</span>
                <span className="step-label">Preferences</span>
              </div>
              <div className={`progress-step ${currentStep >= 4 ? 'active' : ''}`}>
                <span className="step-number">4</span>
                <span className="step-label">Confirm</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="form-step fade-in">
                <h2>Personal Information</h2>
                <p className="step-description">Please provide your basic contact information</p>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={errors.fullName ? 'error' : ''}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="+1 234 567 8900"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization/Institution *</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={errors.organization ? 'error' : ''}
                      placeholder="Company or University"
                    />
                    {errors.organization && <span className="error-message">{errors.organization}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="designation">Designation/Role</label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Software Engineer, Student, etc."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New York"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <div className="form-step fade-in">
                <h2>Professional Information</h2>
                <p className="step-description">Tell us about your professional background</p>
                
                <div className="form-group">
                  <label htmlFor="experienceLevel">Experience Level *</label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    className={errors.experienceLevel ? 'error' : ''}
                  >
                    <option value="">Select Experience Level</option>
                    <option value="student">Student</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior (6-10 years)</option>
                    <option value="lead">Lead/Manager (10+ years)</option>
                    <option value="executive">Executive/C-Level</option>
                  </select>
                  {errors.experienceLevel && <span className="error-message">{errors.experienceLevel}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="fieldOfInterest">Primary Field of Interest *</label>
                  <select
                    id="fieldOfInterest"
                    name="fieldOfInterest"
                    value={formData.fieldOfInterest}
                    onChange={handleChange}
                    className={errors.fieldOfInterest ? 'error' : ''}
                  >
                    <option value="">Select Field of Interest</option>
                    {fieldsOfInterest.map(field => (
                      <option key={field} value={field}>{field}</option>
                    ))}
                  </select>
                  {errors.fieldOfInterest && <span className="error-message">{errors.fieldOfInterest}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="website">Personal/Company Website (Optional)</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Short Bio (Optional)</label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us a bit about yourself, your expertise, and what you hope to gain from the conference..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 3: Conference Preferences */}
            {currentStep === 3 && (
              <div className="form-step fade-in">
                <h2>Conference Preferences</h2>
                <p className="step-description">Let us know your interests to help us personalize your experience</p>
                
                <div className="form-group">
                  <label>Select Workshops You're Interested In</label>
                  <div className="workshop-grid">
                    {workshops.map(workshop => (
                      <label key={workshop.id} className="workshop-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.workshopSelection.includes(workshop.id)}
                          onChange={() => handleWorkshopChange(workshop.id)}
                        />
                        <span className="workshop-name">{workshop.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="networkingEvents"
                      checked={formData.networkingEvents}
                      onChange={handleChange}
                    />
                    <span>I'm interested in attending networking events</span>
                  </label>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="paperSubmission"
                      checked={formData.paperSubmission}
                      onChange={handleChange}
                    />
                    <span>I would like to submit a research paper / presentation</span>
                  </label>
                </div>

                {formData.paperSubmission && (
                  <div className="form-group slide-down">
                    <label htmlFor="paperTitle">Paper/Presentation Title</label>
                    <input
                      type="text"
                      id="paperTitle"
                      name="paperTitle"
                      value={formData.paperTitle}
                      onChange={handleChange}
                      placeholder="Enter your paper or presentation title"
                    />
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="accommodation">Accommodation Required</label>
                    <select
                      id="accommodation"
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleChange}
                    >
                      <option value="none">No accommodation needed</option>
                      <option value="single">Single Room (Paid - Limited availability)</option>
                      <option value="shared">Shared Room (Paid - Limited availability)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      placeholder="Vegetarian, Vegan, Gluten-free, Allergies, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {currentStep === 4 && (
              <div className="form-step fade-in">
                <h2>Review & Confirm</h2>
                <p className="step-description">Please review your information before submitting</p>
                
                <div className="review-section">
                  <div className="review-card">
                    <h3>Personal Information</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span className="review-label">Full Name:</span>
                        <span className="review-value">{formData.fullName || 'Not provided'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Email:</span>
                        <span className="review-value">{formData.email || 'Not provided'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Phone:</span>
                        <span className="review-value">{formData.phone || 'Not provided'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Organization:</span>
                        <span className="review-value">{formData.organization || 'Not provided'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Designation:</span>
                        <span className="review-value">{formData.designation || 'Not provided'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Location:</span>
                        <span className="review-value">
                          {[formData.city, formData.country].filter(Boolean).join(', ') || 'Not provided'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="review-card">
                    <h3>Professional Information</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span className="review-label">Experience Level:</span>
                        <span className="review-value">
                          {formData.experienceLevel ? 
                            formData.experienceLevel.charAt(0).toUpperCase() + formData.experienceLevel.slice(1) 
                            : 'Not provided'}
                        </span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Field of Interest:</span>
                        <span className="review-value">{formData.fieldOfInterest || 'Not provided'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="review-card">
                    <h3>Conference Preferences</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span className="review-label">Registration Type:</span>
                        <span className="review-value">Standard Conference Pass</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Workshops Selected:</span>
                        <span className="review-value">
                          {formData.workshopSelection.length > 0 
                            ? formData.workshopSelection.length 
                            : 'None selected'}
                        </span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Networking Events:</span>
                        <span className="review-value">{formData.networkingEvents ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Paper Submission:</span>
                        <span className="review-value">{formData.paperSubmission ? 'Yes' : 'No'}</span>
                      </div>
                      {formData.accommodation !== 'none' && (
                        <div className="review-item">
                          <span className="review-label">Accommodation:</span>
                          <span className="review-value">
                            {formData.accommodation === 'single' ? 'Single Room' : 'Shared Room'}
                          </span>
                        </div>
                      )}
                      {formData.dietaryRestrictions && (
                        <div className="review-item">
                          <span className="review-label">Dietary Restrictions:</span>
                          <span className="review-value">{formData.dietaryRestrictions}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="terms-group">
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                      />
                      <span>I confirm that the information provided is accurate and I agree to the <a href="/terms" target="_blank">Terms and Conditions</a> and <a href="/privacy" target="_blank">Privacy Policy</a> *</span>
                    </label>
                    {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="receiveUpdates"
                        checked={formData.receiveUpdates}
                        onChange={handleChange}
                      />
                      <span>I would like to receive email updates about the conference schedule and announcements</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" className="btn btn--ghost" onClick={handlePrevious}>
                  ← Previous
                </button>
              )}
              
              {currentStep < 4 ? (
                <button type="button" className="btn btn--primary" onClick={handleNext}>
                  Next Step →
                </button>
              ) : (
                <button type="submit" className="btn btn--secondary">
                  Complete Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="register-info">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">📅</div>
            <h3>Conference Dates</h3>
            <p>March 15-17, 2024</p>
            <p className="info-sub">Doors open at 8:00 AM daily</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Venue</h3>
            <p>Axis Convention Center</p>
            <p className="info-sub">123 Conference Blvd, Tech City</p>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Registration Deadline</h3>
            <p>March 10, 2024</p>
            <p className="info-sub">Limited spots available</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Questions?</h3>
            <p>Contact our team</p>
            <p className="info-sub">register@axisconference.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;