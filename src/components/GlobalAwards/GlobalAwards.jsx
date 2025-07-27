import React, { useState } from 'react';
import styles from './GlobalAwards.module.css';

function GlobalAwards() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    linkedin: '',
    jobTitle: '',
    organization: '',
    region: 'North America',
    category: ''
  });

  const regions = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Australia'];
  const categories = ['Innovation', 'Leadership', 'Sustainability', 'Technology', 'Community Impact'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    // Add API logic here
  };

  return (
    <div className={styles.formContainer}>
      <h2>NOMINATION – GLOBAL AWARDS 2025</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>First Name (Required)
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>

        <label>Last Name (Required)
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>

        <label>Email (Required)
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>WhatsApp
          <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
        </label>

        <label>LinkedIn (Required)
          <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} required placeholder="https://" />
        </label>

        <label>Job Title (Required)
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
        </label>

        <label>Name of Organization (Required)
          <input type="text" name="organization" value={formData.organization} onChange={handleChange} required />
        </label>

        <label>Region (Required)
          <select name="region" value={formData.region} onChange={handleChange} required>
            {regions.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>

        <label>Award Category (Required)
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">-- Select --</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GlobalAwards;
