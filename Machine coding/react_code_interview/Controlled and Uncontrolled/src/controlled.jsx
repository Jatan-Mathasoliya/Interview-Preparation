import React, { useState, useRef } from 'react';

function Controlled() {
  // State for controlled input
  const [controlledValue, setControlledValue] = useState('');
  
  // Ref for uncontrolled input
  const uncontrolledRef = useRef(null);

  const handleControlledChange = (e) => {
    setControlledValue(e.target.value);  // Update controlled input value
    console.log("Controlled Input Changed:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the controlled and uncontrolled values
    alert(`Controlled Input Value: ${controlledValue}\nUncontrolled Input Value: ${uncontrolledRef.current.value}`);
  };

  console.log("Uncontrolled Component", uncontrolledRef.current.value);

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled Input */}
      <div>
        <label>Controlled Input:</label>
        <input
          type="text"
          value={controlledValue}       // Controlled value tied to state
          onChange={handleControlledChange}  // Handle changes
        />
      </div>

      {/* Uncontrolled Input */}
      <div>
        <label>Uncontrolled Input:</label>
        <input
          type="text"
          ref={uncontrolledRef}         // Reference to access DOM directly
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Controlled;
