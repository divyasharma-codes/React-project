import React, { useState } from 'react'

function ResetPassword({setPage}){
    const [error,setError]  = useState("")
    const  [email, setEmail] = useState("")

    const handleReset = () => {
        if(!email){
            setError(
                'please enter your email'
            )
            return
        }
        setError('')
        alert('Password Reset Link Sent !')
        setPage('login')
    }
  return (
    <div className='container'>
      <h1>Reset Password</h1>
      <input type='email' placeholder='Enter Your Email'
      value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />

      {error && (
            <p style={{color:'red' }}>{error}</p>
        )}

      <br />
      <br />

      <button onClick={handleReset}>Reset Password</button>

      <p className='link' onClick={()=>setPage('login')}
      style={{cursor:'pointer' , color:'blue' }}>
        Back to Login
      </p>
    </div>
  )
}

export default ResetPassword
