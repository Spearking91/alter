import Link from 'next/link'
import React from 'react'

const Landing = () => {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md ">
        <h1 className="mb-5 text-5xl font-bold">AlterShop</h1>
        <p className="mb-5">
          Join Our Macket Community to gain access to the wonderful products, offers and discounts. just sign-up 
        </p>
        <Link className="btn btn-primary" href={'Auth/Login'}>Get Started</Link>
      </div>
    </div>
  </div>
  )
}

export default Landing