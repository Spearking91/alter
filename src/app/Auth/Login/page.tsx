import Checkbox from '@/Components/Checkbox'
import Silde from '@/Components/Silde'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
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
            <div className='flex flex-row justify-between items-center'>
          <Checkbox label={'Remember me'} />
            
            <label className="label">
              <Link href="#" className="label-text link link-primary link-hover">Forgot password?</Link>
            </label>

            </div>
          </div>
          <div className="form-control mt-6">
            <Link className="btn btn-primary" href={'/Home'} >Login</Link>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <p>Don't have an account?</p>
            <Link className='link-primary' href={'Signup'}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login