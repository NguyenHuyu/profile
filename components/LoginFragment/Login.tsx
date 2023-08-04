import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Nguyễn Minh Huy',
  description: 'Login - Nguyễn Minh Huy'
}

export default function Login() {
  return (
    <div className='login-box'>
      <h2 className='text-3xl'>Login</h2>
      <form>
        <div className='user-box'>
          <input type='text' name='' required className='focus-within:none' />
          <label>Username</label>
        </div>
        <div className='user-box'>
          <input type='password' name='' required />
          <label>Password</label>
        </div>
        <a href='#'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}
