
// import './agecalc.css';
// import React from 'react';

// function agecalc(){

//    function calc(){
//         const dob = document.getElementById("dob").value;

//         const dobDate = new Date(dob);
//         const currentDate = new Date();
//         const age = currentDate.getFullYear() - dobDate.getFullYear();
//         document.getElementById("ans").value=age;
//    }
//    return (
//     <div className="agecalc-container">
//         <h1>Age Calculator</h1>
//         <form>
//             <label htmlFor="dob">Date of Birth:</label>
//             <input type="date" id="dob" name="dob" /><br /><br />
//             <button type="submit" onClick={calc}>Enter</button>  
//             <input type="text " id="ans"/>
            
//         </form>
//     </div>
// );
//    }

// export default agecalc;

            

// import React from 'react'
import React, { useState} from 'react';
import './agecalc.css';

function AgeCalc() {
  // Ref to store the input element
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  // Handler function to update the state when the input changes
  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate if the date of birth is not empty
    if (dob.trim() === '') {
      alert('Please enter a valid date of birth.');
      return;
    }

    // Access the user's date of birth using the 'dob' state
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const calculatedAge = currentDate.getFullYear() - dobDate.getFullYear();
    // Update the 'age' state
    setAge(calculatedAge);
  };

  return (
    <div className="agecalc-container">
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={dob}
          onChange={handleDobChange}
        /><br /><br />
        <button type="submit">Enter</button>
      </form>
      {age !== null && (
        <div>
          <p>Calculated Age: {age} years</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalc;