import Card from '@/Components/Card'
import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import Silde from '@/Components/Silde'
import React from 'react'
import { Url } from 'url'

interface props{
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  const photos:props[] = await res.json();

  return (
    <div>
        <NavBar />
        <Silde />
        <div className='bg-base-300 w-full min-h-screen'>
          <div className='w-full bg-orange-300 p-5 overflow-scroll'>
            <div className="w-full">
              <p className='text-2xl'>Products</p>
            </div>
            <div className="flex flex-row carousel gap-2 overflow-auto">
        {photos.map(item => <Card id={item.id} src={''} title={''} />)}
            </div>
       
          </div>
          <div className='w-full bg-orange-300 p-5 overflow-scroll'>
            <div className="w-full">
              <p className='text-2xl'>Products</p>
            </div>
            <div className="flex flex-row carousel gap-2 overflow-auto">
        {photos.map(item => <Card id={item.id} src={''} title={''} />)}
            </div>
       
          </div>
          <div className='w-full bg-orange-300 p-5 overflow-scroll'>
            <div className="w-full">
              <p className='text-2xl'>Products</p>
            </div>
            <div className="flex flex-row carousel gap-2 overflow-auto">
        {photos.map(item => <Card id={item.id} src={''} title={''} />)}
            </div>
       
          </div>

        </div>
        <Footer />
    </div>
  )
}

export default page