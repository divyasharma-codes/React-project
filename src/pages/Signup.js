import React, { useState } from 'react'

function Signup({setPage}) {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignup = () => {
        if(!name || !email || !password){
            setError(
                'Please fill all fields'
            )
        }
        setError('')
        alert('Signup Successfull !')
        setPage('login')
    }
  return (
    <div className='container'>
        <h1>Signup Page</h1>
        <input type='text' placeholder='Enter Name' 
            value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <br />
        <input type='email' placeholder='Enter Email' 
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        <input type='password' placeholder='Enter Passwoed'
            value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br />
        <input type='password'  placeholder='Confirm Password' 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>

                {error && (
            <p style={{color:'red' }}>{error}</p>
        )}

        <br />
        <br />


        <button onClick={handleSignup}>Signup</button>
        
        <p>
            Already have an account ?  
            <span  className='link' onClick={()=>setPage('login')}
            style={{cursor:'ponter' , color:'blue'}}> Login
            </span>
        </p>
    </div>
  )
}

export default Signup
