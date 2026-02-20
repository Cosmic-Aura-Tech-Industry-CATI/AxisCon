import React, { useState, useEffect } from 'react';
import Seo from "../components/Seo";
import './Register.css';

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Comprehensive list of Indian Tech Colleges
  const indianTechColleges = [
    // IITs
    'Indian Institute of Technology Delhi',
    'Indian Institute of Technology Bombay',
    'Indian Institute of Technology Madras',
    'Indian Institute of Technology Kanpur',
    'Indian Institute of Technology Kharagpur',
    'Indian Institute of Technology Roorkee',
    'Indian Institute of Technology Guwahati',
    'Indian Institute of Technology Bhubaneswar',
    'Indian Institute of Technology Indore',
    'Indian Institute of Technology Varanasi',
    'Indian Institute of Technology Ropar',
    'Indian Institute of Technology Tirupati',
    'Indian Institute of Technology Palakkad',
    'Indian Institute of Technology Dhanbad',
    'Indian Institute of Technology Jammu',
    
    // NITs
    'National Institute of Technology Rourkela',
    'National Institute of Technology Warangal',
    'National Institute of Technology Surathkal',
    'National Institute of Technology Calicut',
    'National Institute of Technology Trichy',
    'National Institute of Technology Durgapur',
    'National Institute of Technology Hamirpur',
    'National Institute of Technology Patna',
    'National Institute of Technology Raipur',
    'National Institute of Technology Silchar',
    'National Institute of Technology Srinagar',
    'National Institute of Technology Surat',
    'National Institute of Technology Nagpur',
    'National Institute of Technology Allahabad',
    'National Institute of Technology Delhi',
    'National Institute of Technology Jalandhar',
    'National Institute of Technology Kurukshetra',
    'National Institute of Technology Manipur',
    'National Institute of Technology Meghalaya',
    'National Institute of Technology Mizoram',
    'National Institute of Technology Nagaland',
    'National Institute of Technology Puducherry',
    'National Institute of Technology Uttarakhand',
    
    // Top Private Tech Colleges
    'Birla Institute of Technology and Science Pilani',
    'BITS Goa',
    'BITS Hyderabad',
    'Delhi Technological University',
    'Manipal Institute of Technology',
    'VIT University Vellore',
    'Amrita School of Engineering',
    'Shiv Nadar University',
    'Ashoka University',
    'Bennett University',
    'Flame University',
    'Jio Institute',
    
    // Top Government Tech Colleges
    'Jadavpur University',
    'Calcutta Institute of Engineering and Management',
    'Veermata Jijabai Technological Institute',
    'Government College of Engineering Pune',
    'Government College of Engineering Aurangabad',
    'Anna University',
    'Savitribai Phule Pune University',
    'Fr. Conceicao Rodrigues Institute of Technology',
    'Pune Institute of Computer Technology',
    'Sardar Vallabhbhai National Institute of Technology',
    
    // Top State Universities
    'Aligarh Muslim University',
    'Banaras Hindu University',
    'Jawaharlal Nehru Technological University Hyderabad',
    'Osmania University',
    'Andhra University',
    'Sri Satya Sai University',
    'Karunya Institute of Technology and Sciences',
    'SRM Institute of Science and Technology',
    'Sri Venkateswara University',
    'PSG College of Technology',
    'Thiagarajar College of Engineering',
    'Kongu Engineering College',
    'Bannari Amman Institute of Technology',
    'Rajalakshmi Engineering College',
    'SSN College of Engineering',
    'Dayananda Sagar University',
    'Visvesvaraya Technological University',
    'RV College of Engineering',
    'Nitte Meenakshi Institute of Technology',
    'JSS Academy of Technical Education',
    'PES University',
    'Ramaiah Institute of Technology',
    'Sir M. Visvesvaraya Institute of Technology',
    'Sambhram Institute of Technology',
    'Vidyavardhaka College of Engineering',
    
    // AKTU (Abdul Kalam Technical University) Affiliated Colleges - Comprehensive List
    // Lucknow Based AKTU
    'Lucknow Institute of Technology',
    'AKTU Campus Lucknow',
    'Babu Banarasi Das Institute of Technology',
    'Rajkiya Engineering College Lucknow',
    'Rajkiya Mahila Engineering College Lucknow',
    'Noida Institute of Engineering and Technology Lucknow',
    
    // Major AKTU Affiliated Engineering Colleges
    'Jaypee Institute of Information Technology Noida',
    'Integral University Lucknow',
    'Shobhit University Meerut',
    'Meerut Institute of Engineering and Technology Meerut',
    'Galgotias University Greater Noida',
    'Galgotias College of Engineering and Technology Greater Noida',
    'Amity University Uttar Pradesh Noida',
    'Northern India Engineering College Meerut',
    'Krishna Engineering College Ghaziabad',
    'Invertis University Bareilly',
    'Pranveer Singh Institute of Technology Kanpur',
    'Babu Banarasi Das Institute of Technology Lucknow',
    'Dr. B.R. Ambedkar Institute of Technology Kanpur',
    'United Institute of Technology Allahabad',
    'Moradabad Institute of Technology Moradabad',
    'Raj Kumar Goel Institute of Technology Ghaziabad',
    
    // AKTU Affiliated Colleges - Lucknow District
    'Lucknow Institute of Engineering Technology Lucknow',
    'Keshav Mahavidyalaya Lucknow',
    'JS Institute of Technical Education Lucknow',
    'Sri Krishna Institute of Engineering Technology Meerut',
    'Institute of Engineering and Technology Uttar Pradesh',
    
    // AKTU Affiliated Colleges - Kanpur District
    'Kanpur Institute of Technology Kanpur',
    'Pranveer Singh Institute of Technology Kanpur',
    'Indian Institute of Engineering Science and Technology Kanpur',
    'Dr. Bhimrao Ambedkar Institute of Technology Kanpur',
    'Rajkiya Engineering College Kanpur Nagar',
    'Kanpur University Engineering College',
    'Sri Satya Sai Engineering College Kanpur',
    
    // AKTU Affiliated Colleges - Meerut District
    'Meerut Institute of Engineering and Technology Meerut',
    'Northern India Engineering College Meerut',
    'Shobhit University Meerut',
    'Deen Dayal Upadhyaya College of Technology Meerut',
    'Rajkiya Engineering College Meerut',
    'Institute of Engineering and Technology Meerut',
    'Gyan Vikas Institute of Engineering Technology Meerut',
    'Shree Institute of Engineering and Technology Meerut',
    'United Institute of Technology Meerut',
    
    // AKTU Affiliated Colleges - Ghaziabad District
    'Raj Kumar Goel Institute of Technology Ghaziabad',
    'Krishna Engineering College Ghaziabad',
    'Galgotias College of Engineering and Technology Greater Noida',
    'NIET Greater Noida',
    'Rajkiya Engineering College Ghaziabad',
    'Gautam Buddh Institute of Technology Ghaziabad',
    'Amity Institute of Engineering and Technology Ghaziabad',
    'Institute of Engineering Ghaziabad',
    
    // AKTU Affiliated Colleges - Noida District
    'Noida Institute of Engineering and Technology Noida',
    'Jaypee Institute of Information Technology Noida',
    'Galgotias University Noida',
    'Amity University Noida',
    'Rajkiya Engineering College Noida',
    'Institute of Engineering Technology Noida',
    'United College of Engineering and Research Noida',
    
    // AKTU Affiliated Colleges - Bareilly District
    'Invertis University Bareilly',
    'Rajkiya Engineering College Bareilly',
    'Raj Kumar Institute of Engineering Bareilly',
    'Institute of Engineering and Technology Bareilly',
    'Ashoka Institute of Engineering and Technology Bareilly',
    
    // AKTU Affiliated Colleges - Moradabad District
    'Moradabad Institute of Technology Moradabad',
    'Rajkiya Engineering College Moradabad',
    'Institute of Engineering and Technology Moradabad',
    'Shri Shankar College of Engineering Moradabad',
    
    // AKTU Affiliated Colleges - Allahabad District
    'United Institute of Technology Allahabad',
    'Rajkiya Engineering College Prayagraj',
    'Institute of Engineering and Technology Allahabad',
    'Hari Om Institute of Engineering and Technology Allahabad',
    
    // AKTU Affiliated Colleges - Varanasi District
    'Rajkiya Engineering College Varanasi',
    'Institute of Engineering and Technology Varanasi',
    'Banaras Institute of Technology Engineering Varanasi',
    
    // AKTU Affiliated Colleges - Mathura District
    'Rajkiya Engineering College Mathura',
    'Institute of Engineering and Technology Mathura',
    
    // AKTU Affiliated Colleges - Agra District
    'Rajkiya Engineering College Agra',
    'Institute of Engineering and Technology Agra',
    'Sri Yantra Institute of Engineering Technology Agra',
    
    // AKTU Affiliated Colleges - Saharanpur District
    'Rajkiya Engineering College Saharanpur',
    'Institute of Engineering and Technology Saharanpur',
    
    // AKTU Affiliated Colleges - Muzaffarnagar District
    'Rajkiya Engineering College Muzaffarnagar',
    'Institute of Engineering and Technology Muzaffarnagar',
    
    // AKTU Affiliated Colleges - Meerut District
    'Rajkiya Engineering College Meerut',
    'Rajkiya Mahila Engineering College Meerut',
    
    // AKTU Affiliated Colleges - Bijnor District
    'Rajkiya Engineering College Bijnor',
    'Bijnor Institute of Engineering and Technology Bijnor',
    
    // AKTU Affiliated Colleges - Bulandshahr District
    'Rajkiya Engineering College Bulandshahr',
    'Institute of Engineering and Technology Bulandshahr',
    
    // AKTU Affiliated Colleges - Gautam Buddh Nagar
    'Galgotias University Greater Noida',
    'Galgotias College of Engineering and Technology Greater Noida',
    'Rajkiya Engineering College Noida',
    
    // AKTU Affiliated Colleges - Etah District
    'Rajkiya Engineering College Etah',
    
    // AKTU Affiliated Colleges - Mathura District
    'Rajkiya Engineering College Mathura',
    
    // AKTU Affiliated Colleges - Hathras District
    'Rajkiya Engineering College Hathras',
    
    // AKTU Affiliated Colleges - Firozabad District
    'Rajkiya Engineering College Firozabad',
    
    // AKTU Affiliated Colleges - Kannauj District
    'Rajkiya Engineering College Kannauj',
    
    // AKTU Affiliated Colleges - Kanpur Dehat District
    'Institute of Engineering and Technology Kanpur Dehat',
    
    // AKTU Affiliated Colleges - Jalaun District
    'Rajkiya Engineering College Jalaun',
    
    // AKTU Affiliated Colleges - Jaunpur District
    'Rajkiya Engineering College Jaunpur',
    
    // AKTU Affiliated Colleges - Azamgarh District
    'Rajkiya Engineering College Azamgarh',
    
    // AKTU Affiliated Colleges - Mau District
    'Rajkiya Engineering College Mau',
    
    // AKTU Affiliated Colleges - Ballia District
    'Institute of Engineering and Technology Ballia',
    
    // AKTU Affiliated Colleges - Deoria District
    'Rajkiya Engineering College Deoria',
    
    // AKTU Affiliated Colleges - Gorakhpur District
    'Rajkiya Engineering College Gorakhpur',
    
    // AKTU Affiliated Colleges - Kushwa Nagar District
    'Rajkiya Engineering College Kushinagar',
    
    // AKTU Affiliated Colleges - Basti District
    'Rajkiya Engineering College Basti',
    
    // AKTU Affiliated Colleges - Sant Kabir Nagar District
    'Rajkiya Engineering College Sant Kabir Nagar',
    
    // AKTU Affiliated Colleges - Gonda District
    'Rajkiya Engineering College Gonda',
    
    // AKTU Affiliated Colleges - Siddharthan Nagar District
    'Rajkiya Engineering College Siddharthnagar',
    
    // AKTU Affiliated Colleges - Maharajganj District
    'Rajkiya Engineering College Maharajganj',
    
    // AKTU Affiliated Colleges - Ambedkar Nagar District
    'Rajkiya Engineering College Ambedkar Nagar',
    
    // AKTU Affiliated Colleges - Sultanpur District
    'Rajkiya Engineering College Sultanpur',
    
    // AKTU Affiliated Colleges - Chitrakoot District
    'Rajkiya Engineering College Chitrakoot',
    
    // AKTU Affiliated Colleges - Prayagraj District
    'Rajkiya Engineering College Prayagraj',
    'Rajkiya Mahila Engineering College Prayagraj',
    
    // AKTU Affiliated Colleges - Raebareli District
    'Rajkiya Engineering College Raebareli',
    
    // AKTU Affiliated Colleges - Banda District
    'Rajkiya Engineering College Banda',
    
    // AKTU Affiliated Colleges - Hamirpur District
    'Rajkiya Engineering College Hamirpur',
    
    // AKTU Affiliated Colleges - Mahoba District
    'Institute of Engineering and Technology Mahoba',
    
    // AKTU Affiliated Colleges - Mirzapur District
    'Rajkiya Engineering College Mirzapur',
    
    // AKTU Affiliated Colleges - Sonbhadra District
    'Rajkiya Engineering College Sonbhadra',
    
    // AKTU Affiliated Colleges - Rae Bareli District
    'Institute of Engineering and Technology Raebareli',
    
    // AKTU Affiliated Colleges - Lalitpur District
    'Rajkiya Engineering College Lalitpur',
    
    // AKTU Affiliated Private Engineering Colleges
    'Gyan Vihar Institute of Engineering Technology',
    'Shri Institute of Engineering Technology',
    'Ashoka Institute of Engineering and Technology',
    'Hari Om Institute of Engineering and Technology',
    'Sri Yantra Institute of Engineering Technology',
    'Shri Shankar College of Engineering',
    'Banaras Institute of Technology Engineering',
    'Gautam Buddh Institute of Technology',
    'Rajkiya Institute of Engineering Technology',
    'Institute of Professional Studies',
    'Keshav Institute of Engineering Technology',
    'Metropolitan Institute of Technology',
    'Silicon Institute of Tech',
    'Pearl Institute of Engineering',
    'Liberty Institute of Technology',
    'Gateway Institute of Engineering and Technology',
    'Apex Institute of Engineering and Technology',
    
    // BTEUP (Board of Technical Education Uttar Pradesh) Affiliated Colleges
    'Agra College of Technology and Management',
    'Aliganj Polytechnic Lucknow',
    'Apex Institute of Technology',
    'Army Institute of Technology Pune',
    'Aryan Institute of Engineering and Technology',
    'Ashram College of Engineering',
    'Avantika University',
    'Azad Institute of Engineering and Technology',
    'B.N. Mahajan Polytechnic',
    'Bijnor College',
    'Deen Dayal Upadhyaya College of Technology Meerut',
    'Dr. B.R. Ambedkar Institute of Technology',
    'Gateway Institute of Engineering and Technology',
    'Gautam Buddh University',
    'Gyan Vihar University',
    'Institute of Professional Studies',
    'Institute of Technology and Management Delhi',
    'Jagan Institute of Management Studies',
    'Jamia Millia Islamia',
    'Jaypee Institute of Information Technology',
    'Kamla Nehru Institute of Technology',
    'Kanya Maha Vidyalaya',
    'Krishna Institute of Engineering and Technology',
    'Maharana Pratap College of Technology',
    'Maharishi Markandeshwar University',
    'Mandi Govindgarh Institute of Engineering',
    'Marwari College of Engineering',
    'Meerut City College',
    'Meerut Institute of Engineering and Technology',
    'Metropolitan Institute of Technology',
    'Mohan Lal Sukhadia University Engineering College',
    'Moradabad Institute of Technology',
    'National Institute of Technical Teachers Training',
    'Noida Institute of Engineering and Technology',
    'Northern India Engineering College Meerut',
    'Paliwal Institute of Engineering and Technology',
    'Pandit Deen Dayal Petroleum University',
    'Panipat Institute of Engineering and Technology',
    'Parikh Institute of Engineering and Technology',
    'Patna College of Engineering',
    'Patiala Institute of Engineering and Management',
    'Pearl College of Engineering',
    'Plaksha University',
    'Pranveer Singh Institute of Technology',
    'Pravara Institute of Rural Education',
    'Quantum Institute of Engineering',
    'Raj Kumar Goel Institute of Technology',
    'Rajasthan College of Engineering for Girls',
    'Rajasthan Technical University',
    'Rajalakshmi Engineering College',
    'Rajkiya Engineering College Ambedkar Nagar',
    'Rajkiya Engineering College Azamgarh',
    'Rajkiya Engineering College Banda',
    'Rajkiya Engineering College Bareilly',
    'Rajkiya Engineering College Bijnor',
    'Rajkiya Engineering College Basti',
    'Rajkiya Engineering College Bulandshahr',
    'Rajkiya Engineering College Chitrakoot',
    'Rajkiya Engineering College Deoria',
    'Rajkiya Engineering College Etah',
    'Rajkiya Engineering College Firozabad',
    'Rajkiya Engineering College Ghaziabad',
    'Rajkiya Engineering College Gonda',
    'Rajkiya Engineering College Gorakhpur',
    'Rajkiya Engineering College Hamirpur',
    'Rajkiya Engineering College Hardoi',
    'Rajkiya Engineering College Hathras',
    'Rajkiya Engineering College Jalaun',
    'Rajkiya Engineering College Jaunpur',
    'Rajkiya Engineering College Kannauj',
    'Rajkiya Engineering College Kanpur Nagar',
    'Rajkiya Engineering College Kanshiram Nagar',
    'Rajkiya Engineering College Kaushambi',
    'Rajkiya Engineering College Kheri',
    'Rajkiya Engineering College Lalitpur',
    'Rajkiya Engineering College Lucknow',
    'Rajkiya Engineering College Mathura',
    'Rajkiya Engineering College Mau',
    'Rajkiya Engineering College Mirzapur',
    'Rajkiya Engineering College Moradabad',
    'Rajkiya Engineering College Muzaffarnagar',
    'Rajkiya Engineering College Mysorur',
    'Rajkiya Engineering College Nalanda',
    'Rajkiya Engineering College Nautanwa',
    'Rajkiya Engineering College Noida',
    'Rajkiya Engineering College Obra',
    'Rajkiya Engineering College Orai',
    'Rajkiya Engineering College Pilibhit',
    'Rajkiya Engineering College Pratapgarh',
    'Rajkiya Engineering College Raebareli',
    'Rajkiya Engineering College Rajauli',
    'Rajkiya Engineering College Rampur',
    'Rajkiya Engineering College Ratan Nagar',
    'Rajkiya Engineering College Sambhal',
    'Rajkiya Engineering College Sanathnagar',
    'Rajkiya Engineering College Saravanaswami Nagar',
    'Rajkiya Engineering College Satna',
    'Rajkiya Engineering College Shahan Nagar',
    'Rajkiya Engineering College Shamli',
    'Rajkiya Engineering College Shahjahanpur',
    'Rajkiya Engineering College Sharanpur',
    'Rajkiya Engineering College Simdega',
    'Rajkiya Engineering College Sitapur',
    'Rajkiya Engineering College Sonbhadra',
    'Rajkiya Engineering College Srinagar',
    'Rajkiya Engineering College Sultanpur',
    'Rajkiya Engineering College Tilhar',
    'Rajkiya Engineering College Udham Singh Nagar',
    'Rajkiya Engineering College Udipur',
    'Rajkiya Engineering College Unnao',
    'Rajkiya Engineering College Varanasi',
    'Rajkiya Engineering College Vikasnagar',
    'Rajkiya Engineering College Vikaramnagar',
    'Rajkiya Mahila Engineering College Lucknow',
    'Rama University',
    'Ramakrishnan College of Engineering',
    'Rampratsingh College of Engineering',
    'Rani Durgavati Vishwavidyalaya',
    'Rawal Institute of Engineering and Technology',
    'Raycharan Institute of Engineering and Technology',
    'REACT Institute',
    'Rift Valley University',
    
    // Universities in Uttar Pradesh
    'Aligarh Muslim University',
    'Banaras Hindu University',
    'Agra University',
    'Ambedkar University Delhi',
    'Babu Banarasi Das University',
    'GGSIP University Delhi',
    'Integral University Lucknow',
    'Lucknow University',
    'Meerut University',
    'Mohanlal Sukhadia University Udaipur',
    'Shobhit University',
    'Shri Ramswaroop Memorial University',
    'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
    'UP-Tech Meerut',
    'Veer Bahadur Singh Purvanchal University',
    'King George Medical University',
    'Sampurnanand Sanskrit University',
    'Chaudhary Charan Singh Haryana Agriculture University',
    'Devi Ahilya Vishwavidyalaya',
    'Bundelkhand University',
    'Chitrakoot Gramodaya Vishwavidyalaya',
    'Dr Ram Manohar Lohiya Avadh University',
    'Gautam Buddh University',
    'Govind Ballabh Pant University of Agriculture and Technology',
    'Kashi Vidyapith',
    'Lavanya Institute of Engineering and Technology',
    'Magadh University',
    'Manipur University',
    'Mahatma Jyotiba Phule Rohilkhand University',
    'Medicity Institute of Medical Sciences',
    'Meenakshi Ammal Dental College',
    'Mody University Rajasthan',
    'Noida University',
    'Pandit Deen Dayal Petroleum University',
    'Sharda University Greater Noida',
    'Shobhit University Meerut',
    'Sri Satya Sai University',
    'Symbiosis International University',
    'Tamil Nadu National Law School',
    'The Northcap University Gurugram',
    'UIT RGPV',
    'Uttaranchal University',
    'Utkal University',
    'Uttar Pradesh University of Medical Sciences',
    'Uttar Pradesh Textile Technology Institute',
  ];

  const [formData, setFormData] = useState({
    // Basic Information
    email: '',
    salutation: '',
    fullName: '',
    contactNumber: '',
    affiliatedInstitute: '',
    age: '',
    gender: '',
    nationality: '',
    department: '',
    designation: '',
    categoryOfParticipation: '',
    modeOfPayment: '',
    
    // Payment Details (conditional)
    upiId: '',
    transactionId: '',
    paymentReceipt: null,
    
    // Terms Agreement
    agreeTerms: false,
    receiveUpdates: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptFileName, setReceiptFileName] = useState('');
  const [instituteSuggestions, setInstituteSuggestions] = useState([]);
  const [showInstituteSuggestions, setShowInstituteSuggestions] = useState(false);

  const salutationOptions = ['Mr.', 'Ms.', 'Dr.', 'Prof.'];
  
  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];
  
  const designationOptions = [
    'UG Student',
    'PG Student',
    'Academician',
    'Industry Delegate',
    'Foreign Delegate'
  ];
  
  const categoryOptions = [
    'Paper Presentation',
    'Poster Presentation',
    'Attendee Only'
  ];
  
  const paymentOptions = ['UPI', 'Bank Transfer'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Handle affiliated institute field autocomplete
    if (name === 'affiliatedInstitute') {
      if (value.trim() === '') {
        setInstituteSuggestions([]);
        setShowInstituteSuggestions(false);
      } else {
        const filtered = indianTechColleges.filter(college =>
          college.toLowerCase().includes(value.toLowerCase())
        );
        setInstituteSuggestions(filtered.slice(0, 8)); // Show max 8 suggestions
        setShowInstituteSuggestions(true);
      }
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInstituteSelect = (college) => {
    setFormData(prev => ({
      ...prev,
      affiliatedInstitute: college
    }));
    setShowInstituteSuggestions(false);
    setInstituteSuggestions([]);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, paymentReceipt: file }));
      setReceiptFileName(file.name);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.salutation) newErrors.salutation = 'Please select salutation';
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.affiliatedInstitute.trim()) newErrors.affiliatedInstitute = 'Affiliated Institute/Organisation is required';
    if (!formData.age) newErrors.age = 'Age is required';
    else if (formData.age < 1 || formData.age > 120) newErrors.age = 'Please enter a valid age';
    
    if (!formData.gender) newErrors.gender = 'Please select gender';
    if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.designation) newErrors.designation = 'Please select designation';
    if (!formData.categoryOfParticipation) newErrors.categoryOfParticipation = 'Please select category of participation';
    if (!formData.modeOfPayment) newErrors.modeOfPayment = 'Please select mode of payment';
    
    // Payment validation for UPI
    if (formData.modeOfPayment === 'UPI') {
      if (!formData.upiId.trim()) newErrors.upiId = 'UPI ID is required';
      if (!formData.transactionId.trim()) newErrors.transactionId = 'Transaction ID is required';
      if (!formData.paymentReceipt) newErrors.paymentReceipt = 'Payment receipt is required';
    }
    
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
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
          <p>Thank you for registering for ICCIST 2026. We have sent a confirmation email to <strong>{formData.email}</strong></p>
          
          <div className="success-details">
            <h3>Registration Summary</h3>
            <div className="summary-item">
              <span>Name:</span>
              <span className="summary-value">{formData.salutation} {formData.fullName}</span>
            </div>
            <div className="summary-item">
              <span>Email:</span>
              <span className="summary-value">{formData.email}</span>
            </div>
            <div className="summary-item">
              <span>Institute:</span>
              <span className="summary-value">{formData.affiliatedInstitute}</span>
            </div>
            <div className="summary-item">
              <span>Category:</span>
              <span className="summary-value">{formData.categoryOfParticipation}</span>
            </div>
            <div className="summary-item">
              <span>Mode of Payment:</span>
              <span className="summary-value">{formData.modeOfPayment}</span>
            </div>
            <div className="summary-item">
              <span>Registration ID:</span>
              <span className="summary-value">ICCIST{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
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
            <p className="note-small">The conference schedule will be sent to your email closer to the event date.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page">
      <Seo
        title="Conference Registration"
        description="Register for ICCIST 2026 to attend sessions, workshops, and networking events at Axis Colleges."
        path="/register"
        keywords={[
          "ICCIST registration",
          "conference registration form",
          "Axis conference register",
          "research conference participant",
          "student conference registration"
        ]}
      />
      
      {/* Hero Section */}
      <section className="register-hero">
        <div className="register-hero__content">
          <span className="eyebrow">Registration Open</span>
          <h1>Register for ICCIST 2026</h1>
          <p>Join us for two days of cutting-edge research, networking, and innovation</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="register-section">
        <div className="register-container">
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-step fade-in">
              <h2>Registration Form</h2>
              <p className="step-description">Please fill in your details to complete registration</p>
              
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="john.doe@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Salutation */}
              <div className="form-group">
                <label htmlFor="salutation">Salutation *</label>
                <select
                  id="salutation"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                  className={errors.salutation ? 'error' : ''}
                >
                  <option value="">Select Salutation</option>
                  {salutationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.salutation && <span className="error-message">{errors.salutation}</span>}
              </div>

              {/* Full Name */}
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

              {/* Contact Number */}
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number *</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={errors.contactNumber ? 'error' : ''}
                  placeholder="+91 98765 43210"
                />
                {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
              </div>

              {/* Affiliated Institute/Organisation */}
              <div className="form-group institute-autocomplete">
                <label htmlFor="affiliatedInstitute">Affiliated Institute / Organisation *</label>
                <input
                  type="text"
                  id="affiliatedInstitute"
                  name="affiliatedInstitute"
                  value={formData.affiliatedInstitute}
                  onChange={handleChange}
                  onFocus={() => formData.affiliatedInstitute.trim() !== '' && setShowInstituteSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowInstituteSuggestions(false), 200)}
                  className={errors.affiliatedInstitute ? 'error' : ''}
                  placeholder="Start typing institute name..."
                  autoComplete="off"
                />
                {showInstituteSuggestions && instituteSuggestions.length > 0 && (
                  <div className="institute-suggestions">
                    {instituteSuggestions.map((college, index) => (
                      <div
                        key={index}
                        className="suggestion-item"
                        onClick={() => handleInstituteSelect(college)}
                      >
                        {college}
                      </div>
                    ))}
                  </div>
                )}
                {showInstituteSuggestions && formData.affiliatedInstitute.trim() !== '' && instituteSuggestions.length === 0 && (
                  <div className="no-suggestions">
                    No matching colleges found. You can enter your custom institute name.
                  </div>
                )}
                {errors.affiliatedInstitute && <span className="error-message">{errors.affiliatedInstitute}</span>}
              </div>

              {/* Age and Gender Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={errors.age ? 'error' : ''}
                    placeholder="25"
                    min="1"
                    max="120"
                  />
                  {errors.age && <span className="error-message">{errors.age}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={errors.gender ? 'error' : ''}
                  >
                    <option value="">Select Gender</option>
                    {genderOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.gender && <span className="error-message">{errors.gender}</span>}
                </div>
              </div>

              {/* Nationality and Department Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nationality">Nationality *</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className={errors.nationality ? 'error' : ''}
                    placeholder="Indian"
                  />
                  {errors.nationality && <span className="error-message">{errors.nationality}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="department">Department *</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={errors.department ? 'error' : ''}
                    placeholder="Computer Science"
                  />
                  {errors.department && <span className="error-message">{errors.department}</span>}
                </div>
              </div>

              {/* Designation */}
              <div className="form-group">
                <label htmlFor="designation">Designation *</label>
                <select
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className={errors.designation ? 'error' : ''}
                >
                  <option value="">Select Designation</option>
                  {designationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.designation && <span className="error-message">{errors.designation}</span>}
              </div>

              {/* Category of Participation */}
              <div className="form-group">
                <label htmlFor="categoryOfParticipation">Category of Participation *</label>
                <select
                  id="categoryOfParticipation"
                  name="categoryOfParticipation"
                  value={formData.categoryOfParticipation}
                  onChange={handleChange}
                  className={errors.categoryOfParticipation ? 'error' : ''}
                >
                  <option value="">Select Category</option>
                  {categoryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.categoryOfParticipation && <span className="error-message">{errors.categoryOfParticipation}</span>}
              </div>

              {/* Mode of Payment */}
              <div className="form-group">
                <label htmlFor="modeOfPayment">Mode of Payment *</label>
                <select
                  id="modeOfPayment"
                  name="modeOfPayment"
                  value={formData.modeOfPayment}
                  onChange={handleChange}
                  className={errors.modeOfPayment ? 'error' : ''}
                >
                  <option value="">Select Payment Mode</option>
                  {paymentOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.modeOfPayment && <span className="error-message">{errors.modeOfPayment}</span>}
              </div>

              {/* UPI Payment Fields - Conditional */}
              {formData.modeOfPayment === 'UPI' && (
                <div className="payment-details slide-down">
                  <h3>UPI Payment Details</h3>
                  
                  <div className="form-group">
                    <label htmlFor="upiId">UPI ID *</label>
                    <input
                      type="text"
                      id="upiId"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleChange}
                      className={errors.upiId ? 'error' : ''}
                      placeholder="john.doe@okhdfcbank"
                    />
                    {errors.upiId && <span className="error-message">{errors.upiId}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="transactionId">Transaction ID *</label>
                    <input
                      type="text"
                      id="transactionId"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      className={errors.transactionId ? 'error' : ''}
                      placeholder="UPI Transaction ID"
                    />
                    {errors.transactionId && <span className="error-message">{errors.transactionId}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="paymentReceipt">Payment Receipt Upload (PDF / Image) *</label>
                    <div className="file-input-wrapper">
                      <input
                        type="file"
                        id="paymentReceipt"
                        name="paymentReceipt"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className={errors.paymentReceipt ? 'error' : ''}
                      />
                      <span className="file-name">{receiptFileName || 'No file chosen'}</span>
                    </div>
                    {errors.paymentReceipt && <span className="error-message">{errors.paymentReceipt}</span>}
                  </div>
                </div>
              )}

              {/* Bank Transfer Info */}
              {formData.modeOfPayment === 'Bank Transfer' && (
                <div className="payment-details slide-down">
                  <h3>Bank Transfer Details</h3>
                  <div className="bank-details">
                    <p><strong>Bank Name:</strong> State Bank of India</p>
                    <p><strong>Account Name:</strong> Axis Colleges ICCIST 2026</p>
                    <p><strong>Account Number:</strong> 12345678901</p>
                    <p><strong>IFSC Code:</strong> SBIN0001234</p>
                    <p><strong>Branch:</strong> Kanpur, UP</p>
                  </div>
                  <p className="note">Please make the payment and send the transaction details to finance@axisconference.com</p>
                </div>
              )}

              {/* Terms Agreement */}
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

              {/* Submit Button */}
              <div className="form-navigation">
                <button type="submit" className="btn btn--secondary">
                  Complete Registration
                </button>
              </div>
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
            <p>March 04-05, 2026</p>
            <p className="info-sub">Doors open at 9:00 AM daily</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Venue</h3>
            <p>Axis Colleges</p>
            <p className="info-sub">Hathipur Rooma, Kanpur</p>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Registration Deadline</h3>
            <p>March 01, 2026</p>
            <p className="info-sub">Limited spots available</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Questions?</h3>
            <p>Contact our team</p>
            <p className="info-sub">register@iccist2026.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;