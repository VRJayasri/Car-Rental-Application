import React, { useState } from 'react';

function Dropdown() {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="p-4">
         <div className='aa'>
         <label className="block mb-2">Gender:</label>
        </div>
        <div className='bb'>
        <select 
        value={selected} 
        onChange={handleChange} 
        className="border p-2 rounded"
      >
        <option value=" ">Select</option>
        <option value="apple">Female</option>
        <option value="banana">Male</option>
        <option value="cherry">Prefer Not to say</option>
      </select>
          </div>
     
      

      
    </div>
  );
}

export default Dropdown;
