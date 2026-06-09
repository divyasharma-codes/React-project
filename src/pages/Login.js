import React, { useState } from 'react'

function Login({setPage}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState('')

    const handleLogin = () => {
        if(!email || !password){
            setError(
                'please fill all fields'
            )
            return
        }
        setError('')
        setPage('welcome')

    }
  return (
    <div className='container'>
        <h1>Login Page</h1>
      <input type='email' placeholder='Enter Email'
            value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br />
      <br />
      <input type='password' placeholder='Enter Password' 
        value={password} onChange={(e)=>setPassword(e.target.value)}
        />

        {error && (
            <p style={{color:'red' }}>{error}</p>
        )}
        
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>

         <p className='link' onClick={()=>setPage('reset')}>
        Forgot Password ? 
      </p>

      <p >Don't have an account ? 
        <span className='link' onClick={()=>setPage('signup')}> signup</span> 
      </p>
     
    </div>
  )
}

export default Login
