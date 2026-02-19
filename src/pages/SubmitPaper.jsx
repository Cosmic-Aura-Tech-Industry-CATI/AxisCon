import { useState, useEffect } from 'react';
import Seo from "../components/Seo";
import './SubmitPaper.css';

const conferenceTrackOptions = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Data Science & Analytics',
  'Internet of Things (IoT)',
  'Cloud Computing',
  'Cyber Security',
  'Blockchain Technology',
  'Natural Language Processing',
  'Computer Vision',
  'Software Engineering',
  'Information Technology',
  'Other'
];

const presentationTypes = ['Oral Presentation', 'Poster Presentation'];
const participationModes = ['Online', 'Offline'];
const designations = ['Student', 'Faculty', 'Industry Professional', 'Researcher'];

const SubmitPaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    paperTitle: '',
    abstract: '',
    keywords: [],
    conferenceTrack: '',
    subTheme: '',
    presentationType: '',
    participationMode: '',
    authors: [{
      id: 1,
      fullName: '',
      email: '',
      mobile: '',
      designation: '',
      department: '',
      institution: '',
      city: '',
      country: '',
      orcidId: '',
      isCorresponding: true
    }],
    fullPaper: null,
    plagiarismReport: null,
    copyrightForm: null,
    paymentScreenshot: null,
    declarations: {
      original: false,
      notSubmitted: false,
      agreeTerms: false
    }
  });

  const [keywordInput, setKeywordInput] = useState('');
  const [uploadProgress, setUploadProgress] = useState({});
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle keyword addition
  const addKeyword = (e) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      e.preventDefault();
      if (formData.keywords.length < 6) {
        setFormData(prev => ({
          ...prev,
          keywords: [...prev.keywords, keywordInput.trim()]
        }));
        setKeywordInput('');
      }
    }
  };

  // Remove keyword
  const removeKeyword = (index) => {
    setFormData(prev => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index)
    }));
  };

  // Handle author changes
  const handleAuthorChange = (index, field, value) => {
    const updatedAuthors = [...formData.authors];
    updatedAuthors[index][field] = value;
    setFormData(prev => ({ ...prev, authors: updatedAuthors }));
  };

  // Add new author
  const addAuthor = () => {
    const newAuthor = {
      id: formData.authors.length + 1,
      fullName: '',
      email: '',
      mobile: '',
      designation: '',
      department: '',
      institution: '',
      city: '',
      country: '',
      orcidId: '',
      isCorresponding: false
    };
    setFormData(prev => ({
      ...prev,
      authors: [...prev.authors, newAuthor]
    }));
  };

  // Remove author
  const removeAuthor = (index) => {
    if (formData.authors.length > 1) {
      const updatedAuthors = formData.authors.filter((_, i) => i !== index);
      // If removed author was corresponding, make first author corresponding
      if (formData.authors[index].isCorresponding && updatedAuthors.length > 0) {
        updatedAuthors[0].isCorresponding = true;
      }
      setFormData(prev => ({ ...prev, authors: updatedAuthors }));
    }
  };

  // Set corresponding author
  const setCorrespondingAuthor = (index) => {
    const updatedAuthors = formData.authors.map((author, i) => ({
      ...author,
      isCorresponding: i === index
    }));
    setFormData(prev => ({ ...prev, authors: updatedAuthors }));
  };

  // Handle file upload with validation
  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    // File type validation
    const allowedTypes = {
      fullPaper: ['application/pdf'],
      plagiarismReport: ['application/pdf'],
      copyrightForm: ['application/pdf'],
      paymentScreenshot: ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
    };

    if (!allowedTypes[fieldName].includes(file.type)) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: `Invalid file type. Please upload ${fieldName === 'paymentScreenshot' ? 'PDF or Image' : 'PDF'} only.`
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

  // Handle declaration checkbox
  const handleDeclarationChange = (field) => {
    setFormData(prev => ({
      ...prev,
      declarations: {
        ...prev.declarations,
        [field]: !prev.declarations[field]
      }
    }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.paperTitle.trim()) newErrors.paperTitle = 'Paper title is required';
    if (!formData.abstract.trim()) newErrors.abstract = 'Abstract is required';
    if (formData.abstract.length < 250) newErrors.abstract = 'Abstract must be at least 250 words';
    if (formData.abstract.length > 300) newErrors.abstract = 'Abstract cannot exceed 300 words';
    if (formData.keywords.length === 0) newErrors.keywords = 'At least one keyword is required';
    if (!formData.conferenceTrack) newErrors.conferenceTrack = 'Conference track is required';
    if (!formData.presentationType) newErrors.presentationType = 'Presentation type is required';
    if (!formData.participationMode) newErrors.participationMode = 'Participation mode is required';

    // Validate authors
    formData.authors.forEach((author, index) => {
      if (!author.fullName.trim()) newErrors[`author_${index}_name`] = 'Author name is required';
      if (!author.email.trim()) newErrors[`author_${index}_email`] = 'Author email is required';
      if (!author.mobile.trim()) newErrors[`author_${index}_mobile`] = 'Mobile number is required';
      if (!author.designation) newErrors[`author_${index}_designation`] = 'Designation is required';
      if (!author.institution.trim()) newErrors[`author_${index}_institution`] = 'Institution is required';
    });

    if (!formData.fullPaper) newErrors.fullPaper = 'Full paper upload is required';
    if (!formData.copyrightForm) newErrors.copyrightForm = 'Copyright form is required';

    if (!formData.declarations.original) newErrors.declaration = 'Please accept all declarations';
    if (!formData.declarations.notSubmitted) newErrors.declaration = 'Please accept all declarations';
    if (!formData.declarations.agreeTerms) newErrors.declaration = 'Please accept all declarations';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Research paper submitted successfully! You will receive a confirmation email shortly.');
      // Here you would typically send data to your backend
    } else {
      alert('Please fill in all required fields correctly.');
    }
  };

  const isFormValid = formData.declarations.original && 
                     formData.declarations.notSubmitted && 
                     formData.declarations.agreeTerms;

  return (
    <div className="submit-paper-page">
      <Seo
        title="Submit Research Paper"
        description="Submit your research paper to ICCIST 2026 with author details, abstract, document upload, and declarations."
        path="/submit-paper"
        type="article"
        keywords={[
          "submit research paper",
          "ICCIST paper submission",
          "conference paper format",
          "academic paper upload",
          "IEEE conference template"
        ]}
        faqs={[
          {
            question: "What files are required for paper submission?",
            answer: "You need full paper PDF and copyright form, while plagiarism report and payment screenshot are optional as per process updates."
          },
          {
            question: "Can multiple authors be added in one submission?",
            answer: "Yes, the submission form supports adding multiple authors and selecting a corresponding author."
          }
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
            
            {/* Section A: Paper Details */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">📄</div>
                <h2>Paper Details</h2>
              </div>

              <div className="form-group">
                <label className="form-label required">Paper Title</label>
                <input
                  type="text"
                  name="paperTitle"
                  value={formData.paperTitle}
                  onChange={handleInputChange}
                  className={`form-input ${errors.paperTitle ? 'error' : ''}`}
                  placeholder="Enter your research paper title"
                />
                {errors.paperTitle && <span className="error-message">{errors.paperTitle}</span>}
              </div>

              <div className="form-group">
                <label className="form-label required">
                  Abstract <span className="char-count">({formData.abstract.length}/300 words)</span>
                </label>
                <textarea
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.abstract ? 'error' : ''}`}
                  placeholder="Enter abstract (250-300 words)..."
                  rows="8"
                />
                {errors.abstract && <span className="error-message">{errors.abstract}</span>}
              </div>

              <div className="form-group">
                <label className="form-label required">
                  Keywords <span className="keyword-count">({formData.keywords.length}/6)</span>
                </label>
                <div className="keywords-input-wrapper">
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyDown={addKeyword}
                    className="form-input"
                    placeholder="Type keyword and press Enter"
                    disabled={formData.keywords.length >= 6}
                  />
                </div>
                <div className="keywords-list">
                  {formData.keywords.map((keyword, index) => (
                    <span key={index} className="keyword-tag">
                      {keyword}
                      <button type="button" onClick={() => removeKeyword(index)} className="keyword-remove">×</button>
                    </span>
                  ))}
                </div>
                {errors.keywords && <span className="error-message">{errors.keywords}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">Conference Track</label>
                  <select
                    name="conferenceTrack"
                    value={formData.conferenceTrack}
                    onChange={handleInputChange}
                    className={`form-select ${errors.conferenceTrack ? 'error' : ''}`}
                  >
                    <option value="">Select Track</option>
                    {conferenceTrackOptions.map(track => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                  {errors.conferenceTrack && <span className="error-message">{errors.conferenceTrack}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Sub-theme (Optional)</label>
                  <input
                    type="text"
                    name="subTheme"
                    value={formData.subTheme}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter sub-theme"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">Presentation Type</label>
                  <div className="radio-group">
                    {presentationTypes.map(type => (
                      <label key={type} className="radio-label">
                        <input
                          type="radio"
                          name="presentationType"
                          value={type}
                          checked={formData.presentationType === type}
                          onChange={handleInputChange}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                  {errors.presentationType && <span className="error-message">{errors.presentationType}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label required">Participation Mode</label>
                  <div className="radio-group">
                    {participationModes.map(mode => (
                      <label key={mode} className="radio-label">
                        <input
                          type="radio"
                          name="participationMode"
                          value={mode}
                          checked={formData.participationMode === mode}
                          onChange={handleInputChange}
                        />
                        <span>{mode}</span>
                      </label>
                    ))}
                  </div>
                  {errors.participationMode && <span className="error-message">{errors.participationMode}</span>}
                </div>
              </div>
            </div>

            {/* Section B: Author Details */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">👥</div>
                <h2>Author Details</h2>
              </div>

              {formData.authors.map((author, index) => (
                <div key={author.id} className="author-card">
                  <div className="author-card-header">
                    <h3>Author {index + 1}</h3>
                    {formData.authors.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeAuthor(index)}
                        className="btn-remove-author"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label required">Full Name</label>
                      <input
                        type="text"
                        value={author.fullName}
                        onChange={(e) => handleAuthorChange(index, 'fullName', e.target.value)}
                        className={`form-input ${errors[`author_${index}_name`] ? 'error' : ''}`}
                        placeholder="Enter full name"
                      />
                      {errors[`author_${index}_name`] && <span className="error-message">{errors[`author_${index}_name`]}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label required">Email</label>
                      <input
                        type="email"
                        value={author.email}
                        onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                        className={`form-input ${errors[`author_${index}_email`] ? 'error' : ''}`}
                        placeholder="email@example.com"
                      />
                      {errors[`author_${index}_email`] && <span className="error-message">{errors[`author_${index}_email`]}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label required">Mobile Number</label>
                      <input
                        type="tel"
                        value={author.mobile}
                        onChange={(e) => handleAuthorChange(index, 'mobile', e.target.value)}
                        className={`form-input ${errors[`author_${index}_mobile`] ? 'error' : ''}`}
                        placeholder="+91 XXXXXXXXXX"
                      />
                      {errors[`author_${index}_mobile`] && <span className="error-message">{errors[`author_${index}_mobile`]}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label required">Designation</label>
                      <select
                        value={author.designation}
                        onChange={(e) => handleAuthorChange(index, 'designation', e.target.value)}
                        className={`form-select ${errors[`author_${index}_designation`] ? 'error' : ''}`}
                      >
                        <option value="">Select Designation</option>
                        {designations.map(des => (
                          <option key={des} value={des}>{des}</option>
                        ))}
                      </select>
                      {errors[`author_${index}_designation`] && <span className="error-message">{errors[`author_${index}_designation`]}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Department</label>
                      <input
                        type="text"
                        value={author.department}
                        onChange={(e) => handleAuthorChange(index, 'department', e.target.value)}
                        className="form-input"
                        placeholder="Computer Science"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label required">Institution Name</label>
                      <input
                        type="text"
                        value={author.institution}
                        onChange={(e) => handleAuthorChange(index, 'institution', e.target.value)}
                        className={`form-input ${errors[`author_${index}_institution`] ? 'error' : ''}`}
                        placeholder="University/College name"
                      />
                      {errors[`author_${index}_institution`] && <span className="error-message">{errors[`author_${index}_institution`]}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        value={author.city}
                        onChange={(e) => handleAuthorChange(index, 'city', e.target.value)}
                        className="form-input"
                        placeholder="City"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        value={author.country}
                        onChange={(e) => handleAuthorChange(index, 'country', e.target.value)}
                        className="form-input"
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">ORCID ID (Optional)</label>
                    <input
                      type="text"
                      value={author.orcidId}
                      onChange={(e) => handleAuthorChange(index, 'orcidId', e.target.value)}
                      className="form-input"
                      placeholder="0000-0000-0000-0000"
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={author.isCorresponding}
                        onChange={() => setCorrespondingAuthor(index)}
                      />
                      <span>Mark as Corresponding Author</span>
                    </label>
                  </div>
                </div>
              ))}

              <button type="button" onClick={addAuthor} className="btn-add-author">
                + Add Another Author
              </button>
            </div>

            {/* Section C: Upload Section */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">📎</div>
                <h2>Document Uploads</h2>
              </div>

              <div className="form-group">
                <label className="form-label required">Full Paper (PDF, Max 10MB)</label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="fullPaper"
                    onChange={(e) => handleFileUpload(e, 'fullPaper')}
                    accept=".pdf"
                    className="file-input"
                  />
                  <label htmlFor="fullPaper" className="file-label">
                    {formData.fullPaper ? formData.fullPaper.name : 'Choose File'}
                  </label>
                  {uploadProgress.fullPaper !== undefined && uploadProgress.fullPaper < 100 && (
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${uploadProgress.fullPaper}%` }}></div>
                    </div>
                  )}
                  {uploadProgress.fullPaper === 100 && (
                    <span className="upload-success">✓ Uploaded</span>
                  )}
                </div>
                {errors.fullPaper && <span className="error-message">{errors.fullPaper}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Plagiarism Report (Optional)</label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="plagiarismReport"
                    onChange={(e) => handleFileUpload(e, 'plagiarismReport')}
                    accept=".pdf"
                    className="file-input"
                  />
                  <label htmlFor="plagiarismReport" className="file-label">
                    {formData.plagiarismReport ? formData.plagiarismReport.name : 'Choose File'}
                  </label>
                  {uploadProgress.plagiarismReport !== undefined && uploadProgress.plagiarismReport < 100 && (
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${uploadProgress.plagiarismReport}%` }}></div>
                    </div>
                  )}
                  {uploadProgress.plagiarismReport === 100 && (
                    <span className="upload-success">✓ Uploaded</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label required">Copyright Form (PDF, Max 10MB)</label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="copyrightForm"
                    onChange={(e) => handleFileUpload(e, 'copyrightForm')}
                    accept=".pdf"
                    className="file-input"
                  />
                  <label htmlFor="copyrightForm" className="file-label">
                    {formData.copyrightForm ? formData.copyrightForm.name : 'Choose File'}
                  </label>
                  {uploadProgress.copyrightForm !== undefined && uploadProgress.copyrightForm < 100 && (
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${uploadProgress.copyrightForm}%` }}></div>
                    </div>
                  )}
                  {uploadProgress.copyrightForm === 100 && (
                    <span className="upload-success">✓ Uploaded</span>
                  )}
                </div>
                {errors.copyrightForm && <span className="error-message">{errors.copyrightForm}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Payment Screenshot (Optional)</label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="paymentScreenshot"
                    onChange={(e) => handleFileUpload(e, 'paymentScreenshot')}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="file-input"
                  />
                  <label htmlFor="paymentScreenshot" className="file-label">
                    {formData.paymentScreenshot ? formData.paymentScreenshot.name : 'Choose File'}
                  </label>
                  {uploadProgress.paymentScreenshot !== undefined && uploadProgress.paymentScreenshot < 100 && (
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${uploadProgress.paymentScreenshot}%` }}></div>
                    </div>
                  )}
                  {uploadProgress.paymentScreenshot === 100 && (
                    <span className="upload-success">✓ Uploaded</span>
                  )}
                </div>
              </div>
            </div>

            {/* Section D: Declarations */}
            <div className="form-section">
              <div className="form-section-header">
                <div className="section-icon">✓</div>
                <h2>Declaration</h2>
              </div>

              <div className="declarations-group">
                <label className="checkbox-label declaration">
                  <input
                    type="checkbox"
                    checked={formData.declarations.original}
                    onChange={() => handleDeclarationChange('original')}
                  />
                  <span>I declare that this paper is my original work and has not been plagiarized from any source.</span>
                </label>

                <label className="checkbox-label declaration">
                  <input
                    type="checkbox"
                    checked={formData.declarations.notSubmitted}
                    onChange={() => handleDeclarationChange('notSubmitted')}
                  />
                  <span>This paper has not been submitted elsewhere for publication and is not under consideration by any other conference or journal.</span>
                </label>

                <label className="checkbox-label declaration">
                  <input
                    type="checkbox"
                    checked={formData.declarations.agreeTerms}
                    onChange={() => handleDeclarationChange('agreeTerms')}
                  />
                  <span>I agree to the conference terms and conditions, and I understand that accepted papers will be published in the conference proceedings.</span>
                </label>
              </div>
              {errors.declaration && <span className="error-message">{errors.declaration}</span>}
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="submit"
                className="btn-submit"
                disabled={!isFormValid}
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
