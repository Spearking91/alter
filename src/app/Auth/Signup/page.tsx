'use client'

import Checkbox from '@/Components/Checkbox'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Signup = () => {
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); 
    router.push('/Home'); 
  };

  
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6">
        Join our community and explorer our market for quality products and a fun experience
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body" >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Enter email address" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered" required />
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Re-enter the same password" className="input input-bordered" required />
          </div>
            <div className='flex flex-row justify-between items-center'>
          <Checkbox label={'I agree with all '} link={'Terms and Conditions'} />
            </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary" >Register</button>
          </div>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <span>Already have an account?</span>
            <Link className='link-primary' href={'Login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup