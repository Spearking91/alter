import Checkbox from '@/Components/Checkbox'
import Silde from '@/Components/Silde'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form className="card-body" >
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
            <div className='flex flex-row justify-between items-center'>
          <Checkbox label={'I agree with all '} link={'Terms and Conditions'} />
            </div>
          </div>
          <div className="form-control mt-6">
            <Link className="btn btn-primary" href={'/Home'} >Register</Link>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <p>Already have an account?</p>
            <Link className='link-primary' href={'Login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login