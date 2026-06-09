import React from 'react'

function Welcome({setPage}) {
  return (
    <div className='container'>
      <h1>Welcome</h1>
      <h2>you are Logged In Successfully !</h2>

      <button onClick={()=>setPage('login')}>Logout</button>
    </div>
  )
}

export default Welcome
