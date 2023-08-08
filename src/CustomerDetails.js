import React, { useState } from 'react';

export const CustomerDetails = ({formData, setFormData, submitForm}) => {
  return (
    <div>CustomerDetails
      <form>
        <label htmlFor='firstname'>First Name </label>
        <input type='text' value={formData.fname} name='firstname' id='firstname' className=''/>
      </form>
    </div>
  )
}
