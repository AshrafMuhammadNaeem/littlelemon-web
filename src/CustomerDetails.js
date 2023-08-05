import React, { useState } from 'react';

const CustomerDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [email, setEmail] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate required fields before submitting the form
    if (!firstName || !lastName || !contactInfo) {
      alert('Please fill in all required fields.');
      return;
    }

    // Perform actions to submit the form data (e.g., send it to the server)
    // Replace the alert with your desired action
    alert('Customer information submitted successfully!');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          First Name <span className="required">*</span>:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Last Name <span className="required">*</span>:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Contact Information <span className="required">*</span>:
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Selection (Optional):
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => setIsSelected(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <button type="submit">Confirm/Submit</button>
      </div>
    </form>
  );
};

export default CustomerDetails;
