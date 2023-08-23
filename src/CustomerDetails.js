import React, { useState } from 'react';

export const CustomerDetails = ({formData, setFormData, submitForm}) => {

  const handleNameChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setFormData((data) => ({
      ...data, 
      [name] : value,
    }))
  }


  return (
    <div>CustomerDetails
      <form>
        <label htmlFor='firstname'>First Name </label>
        <input type='text' value={formData.fname} name='firstname' id='firstname' className='' onChange={handleNameChange}/>
      </form>
    </div>
  )
}
