import Link from 'next/link';
import React from 'react'

interface props{
  label: string;
  link?: string;
}

const Checkbox = ({label, link=''}:props) => {
  return (
    <div className='items-center flex gap-2'>
    <input type="checkbox" id='check' defaultChecked className="checkbox checkbox-sm" />
    <label htmlFor="check" className='cursor-pointer'>{label}</label>
    <Link className='link-primary' href={''}>{link}</Link>
    </div>
  )
}

export default Checkbox