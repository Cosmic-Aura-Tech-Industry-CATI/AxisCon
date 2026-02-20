import { useState, useEffect } from 'react';
import Seo from "../components/Seo";
import './SubmitPaper.css';

const SubmitPaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    // Author Information
    email: '',
    salutation: '',
    correspondingAuthorName: '',
    designation: '',
    affiliation: '',
    department: '',
    organizationAddress: '',
    city: '',
    pincode: '',
    country: '',
    nationality: '',
    contactNumber: '',
    
    // Co-Authors
    coAuthors: [],
    
    // Paper Details
    title: '',
    typeOfSubmission: '',
    abstractFile: null,
    fullPaperFile: null,
    
    // Declaration
    declaration: false
  });

  const [coAuthorInput, setCoAuthorInput] = useState({
    name: '',
    affiliation: ''
  });
  
  const [uploadProgress, setUploadProgress] = useState({});
  const [errors, setErrors] = useState({});

  const salutationOptions = ['Mr.', 'Ms.', 'Dr.', 'Prof.'];
  const designationOptions = [
    'UG Student',
    'PG Student',
    'PhD Scholar',
    'Faculty',
    'Industry Professional',
    'Researcher',
    'Independent Researcher'
  ];
  const nationalityOptions = ['Indian', 'Foreign'];
  const submissionTypeOptions = ['Abstract Only', 'Full Paper'];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle co-author input changes
  const handleCoAuthorInputChange = (e) => {
    const { name, value } = e.target;
    setCoAuthorInput(prev => ({ ...prev, [name]: value }));
  };

  // Add co-author
  const addCoAuthor = () => {
    if (coAuthorInput.name.trim() && coAuthorInput.affiliation.trim()) {
      setFormData(prev => ({
        ...prev,
        coAuthors: [...prev.coAuthors, { ...coAuthorInput }]
      }));
      setCoAuthorInput({ name: '', affiliation: '' });
    }
  };

  // Remove co-author
  const removeCoAuthor = (index) => {
    setFormData(prev => ({
      ...prev,
      coAuthors: prev.coAuthors.filter((_, i) => i !== index)
    }));
  };

  // Handle file upload
  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    // File type validation
    const allowedTypes = {
      abstractFile: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      fullPaperFile: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    };

    if (!allowedTypes[fieldName].includes(file.type)) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: 'Invalid file type. Please upload PDF or Word document only.'
      }));
      return;
    }

    // File size validation (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: 'File size exceeds 10MB limit.'
      }));
      return;
    }

    // Simulate upload progress
    setUploadProgress(prev => ({ ...prev, [fieldName]: 0 }));
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev[fieldName] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          return { ...prev, [fieldName]: 100 };
        }
        return { ...prev, [fieldName]: currentProgress + 10 };
      });
    }, 100);

    setFormData(prev => ({ ...prev, [fieldName]: file }));
    setErrors(prev => ({ ...prev, [fieldName]: '' }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Author Information validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.salutation) newErrors.salutation = 'Salutation is required';
    if (!formData.correspondingAuthorName.trim()) newErrors.correspondingAuthorName = 'Corresponding author name is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.affiliation.trim()) newErrors.affiliation = 'Affiliation/Institution is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.organizationAddress.trim()) newErrors.organizationAddress = 'Organization address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';

    // Paper Details validation
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.typeOfSubmission) newErrors.typeOfSubmission = 'Type of submission is required';

    // File upload validation based on submission type
    if (formData.typeOfSubmission === 'Abstract Only' && !formData.abstractFile) {
      newErrors.abstractFile = 'Abstract file is required';
    }
    if (formData.typeOfSubmission === 'Full Paper' && !formData.fullPaperFile) {
      newErrors.fullPaperFile = 'Full paper file is required';
    }

    // Declaration validation
    if (!formData.declaration) newErrors.declaration = 'You must accept the declaration';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Paper submitted:', formData);
      alert('Research paper submitted successfully! You will receive a confirmation email shortly.');
      // Here you would typically send data to your backend
    }
  };

  return (
    <div className="submit-paper-page">
      <Seo
        title="Submit Research Paper"
        description="Submit your research paper to ICCIST 2026 with author details, abstract, and declaration."
        path="/submit-paper"
        type="article"
        keywords={[
          "submit research paper",
          "ICCIST paper submission",
          "conference paper format",
          "academic paper upload"
        ]}
      />
      
      {/* Hero Section */}
      <section className="submit-hero">
        <div className="submit-hero__content">
          <span className="submit-hero__eyebrow">ICCIST 2026</span>
          <h1 className="submit-hero__title">
            Submit Your Research Paper
          </h1>
          <p className="submit-hero__description">
            Share your innovative research with the global academic community
          </p>
        </div>
        <div className="submit-hero__pattern"></div>
      </section>

      {/* Form Section */}
      <section className="submit-section">
        <div className="submit-container">
          <form onSubmit={handleSubmit} className="submit-form">
            
            {/* Section 1: Author Information */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">👤</div>
                <h2>Author Information</h2>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label required">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="author@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Salutation and Name Row */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">Salutation</label>
                  <select
                    name="salutation"
                    value={formData.salutation}
                    onChange={handleInputChange}
                    className={`form-select ${errors.salutation ? 'error' : ''}`}
                  >
                    <option value="">Select Salutation</option>
                    {salutationOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.salutation && <span className="error-message">{errors.salutation}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label required">Corresponding Author Name</label>
                  <input
                    type="text"
                    name="correspondingAuthorName"
                    value={formData.correspondingAuthorName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.correspondingAuthorName ? 'error' : ''}`}
                    placeholder="Full name"
                  />
                  {errors.correspondingAuthorName && <span className="error-message">{errors.correspondingAuthorName}</span>}
                </div>
              </div>

              {/* Designation */}
              <div className="form-group">
                <label className="form-label required">Designation</label>
                <select
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className={`form-select ${errors.designation ? 'error' : ''}`}
                >
                  <option value="">Select Designation</option>
                  {designationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.designation && <span className="error-message">{errors.designation}</span>}
              </div>

              {/* Affiliation and Department Row */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">Affiliation / Institution</label>
                  <input
                    type="text"
                    name="affiliation"
                    value={formData.affiliation}
                    onChange={handleInputChange}
                    className={`form-input ${errors.affiliation ? 'error' : ''}`}
                    placeholder="University/Institute name"
                  />
                  {errors.affiliation && <span className="error-message">{errors.affiliation}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label required">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className={`form-input ${errors.department ? 'error' : ''}`}
                    placeholder="Department name"
                  />
                  {errors.department && <span className="error-message">{errors.department}</span>}
                </div>
              </div>

              {/* Organization Address */}
              <div className="form-group">
                <label className="form-label required">Organization Address</label>
                <textarea
                  name="organizationAddress"
                  value={formData.organizationAddress}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.organizationAddress ? 'error' : ''}`}
                  placeholder="Street address, building, etc."
                  rows="3"
                />
                {errors.organizationAddress && <span className="error-message">{errors.organizationAddress}</span>}
              </div>

              {/* City and Pincode Row */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`form-input ${errors.city ? 'error' : ''}`}
                    placeholder="City"
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label required">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={`form-input ${errors.pincode ? 'error' : ''}`}
                    placeholder="Pincode"
                  />
                  {errors.pincode && <span className="error-message">{errors.pincode}</span>}
                </div>
              </div>

              {/* Country and Nationality Row */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`form-input ${errors.country ? 'error' : ''}`}
                    placeholder="Country"
                  />
                  {errors.country && <span className="error-message">{errors.country}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label required">Nationality</label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className={`form-select ${errors.nationality ? 'error' : ''}`}
                  >
                    <option value="">Select Nationality</option>
                    {nationalityOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.nationality && <span className="error-message">{errors.nationality}</span>}
                </div>
              </div>

              {/* Contact Number */}
              <div className="form-group">
                <label className="form-label required">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className={`form-input ${errors.contactNumber ? 'error' : ''}`}
                  placeholder="+91 98765 43210"
                />
                {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
              </div>
            </div>

            {/* Section 2: Co-Author Information */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">👥</div>
                <h2>Co-Author Information</h2>
              </div>

              {/* Co-author input fields */}
              <div className="coauthor-input-group">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name(s) of Co-Author(s)</label>
                    <input
                      type="text"
                      name="name"
                      value={coAuthorInput.name}
                      onChange={handleCoAuthorInputChange}
                      className="form-input"
                      placeholder="Co-author full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Affiliation(s) of Co-Author(s)</label>
                    <input
                      type="text"
                      name="affiliation"
                      value={coAuthorInput.affiliation}
                      onChange={handleCoAuthorInputChange}
                      className="form-input"
                      placeholder="Co-author affiliation"
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={addCoAuthor}
                  className="btn-add-author"
                  disabled={!coAuthorInput.name.trim() || !coAuthorInput.affiliation.trim()}
                >
                  + Add Co-Author
                </button>
              </div>

              {/* Co-authors list */}
              {formData.coAuthors.length > 0 && (
                <div className="coauthors-list">
                  <h3>Added Co-Authors</h3>
                  {formData.coAuthors.map((coAuthor, index) => (
                    <div key={index} className="coauthor-item">
                      <div className="coauthor-details">
                        <strong>{coAuthor.name}</strong>
                        <span>{coAuthor.affiliation}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeCoAuthor(index)}
                        className="btn-remove-author"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Section 3: Abstract / Paper Details */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">📄</div>
                <h2>Abstract / Paper Details</h2>
              </div>

              {/* Title */}
              <div className="form-group">
                <label className="form-label required">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`form-input ${errors.title ? 'error' : ''}`}
                  placeholder="Enter paper title"
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              {/* Type of Submission */}
              <div className="form-group">
                <label className="form-label required">Type of Submission</label>
                <div className="radio-group">
                  {submissionTypeOptions.map(type => (
                    <label key={type} className="radio-label">
                      <input
                        type="radio"
                        name="typeOfSubmission"
                        value={type}
                        checked={formData.typeOfSubmission === type}
                        onChange={handleInputChange}
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
                {errors.typeOfSubmission && <span className="error-message">{errors.typeOfSubmission}</span>}
              </div>

              {/* Conditional file uploads based on submission type */}
              {formData.typeOfSubmission === 'Abstract Only' && (
                <div className="form-group slide-down">
                  <label className="form-label required">Upload Abstract</label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      id="abstractFile"
                      onChange={(e) => handleFileUpload(e, 'abstractFile')}
                      accept=".pdf,.doc,.docx"
                      className="file-input"
                    />
                    <label htmlFor="abstractFile" className="file-label">
                      {formData.abstractFile ? formData.abstractFile.name : 'Choose File (PDF/DOC)'}
                    </label>
                    {uploadProgress.abstractFile !== undefined && uploadProgress.abstractFile < 100 && (
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${uploadProgress.abstractFile}%` }}></div>
                      </div>
                    )}
                    {uploadProgress.abstractFile === 100 && (
                      <span className="upload-success">✓ Uploaded</span>
                    )}
                  </div>
                  {errors.abstractFile && <span className="error-message">{errors.abstractFile}</span>}
                </div>
              )}

              {formData.typeOfSubmission === 'Full Paper' && (
                <div className="form-group slide-down">
                  <label className="form-label required">Upload Full Paper</label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      id="fullPaperFile"
                      onChange={(e) => handleFileUpload(e, 'fullPaperFile')}
                      accept=".pdf,.doc,.docx"
                      className="file-input"
                    />
                    <label htmlFor="fullPaperFile" className="file-label">
                      {formData.fullPaperFile ? formData.fullPaperFile.name : 'Choose File (PDF/DOC)'}
                    </label>
                    {uploadProgress.fullPaperFile !== undefined && uploadProgress.fullPaperFile < 100 && (
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${uploadProgress.fullPaperFile}%` }}></div>
                      </div>
                    )}
                    {uploadProgress.fullPaperFile === 100 && (
                      <span className="upload-success">✓ Uploaded</span>
                    )}
                  </div>
                  {errors.fullPaperFile && <span className="error-message">{errors.fullPaperFile}</span>}
                </div>
              )}
            </div>

            {/* Section 4: Declaration */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">✓</div>
                <h2>Declaration</h2>
              </div>

              <div className="declaration-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.declaration}
                    onChange={(e) => setFormData(prev => ({ ...prev, declaration: e.target.checked }))}
                  />
                  <span>The submitted work is original and not published elsewhere.</span>
                </label>
                {errors.declaration && <span className="error-message">{errors.declaration}</span>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="submit"
                className="btn-submit"
              >
                Submit Research Paper
              </button>
              <p className="submit-note">
                * All fields marked with asterisk are required
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SubmitPaper;