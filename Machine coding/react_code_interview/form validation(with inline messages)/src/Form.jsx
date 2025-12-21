import React, { useEffect, useState } from 'react'
import './App.css'
function Form() {
    const [emailError, setemailError] = useState(false);
    const [email, setemail] = useState("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        const validateEmail = (email) => {
            if(!emailPattern.test(email)){
                setemailError(true)
            }else{
                setemailError(false)
            }
        }
        if(email != "") {
            validateEmail(email);
        }
    },[email])
  return (
    <div>
        <h1>Form Component</h1>

        <div action="" className='form'>
            <label htmlFor="email">Email : </label>
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)}/>
            {emailError && <p className='error'>Please enter a valid email</p>}

            <label htmlFor="password">Password : </label>
            <input type="password" />
        </div>
    </div>
  )
}

export default Form