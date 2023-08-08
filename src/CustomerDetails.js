import React, { useState } from 'react';

export const CustomerDetails = (props) => {
  return (
    <div>CustomerDetails
      <form>
        <label htmlFor='firstname'>First Name </label>
        <input type='text' value={props.firstname} name='firstname' id='firstname' className=''/>
      </form>
    </div>
  )
}
