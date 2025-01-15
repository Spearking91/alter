
'use client'

import React, { useState } from 'react'

const Silde = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  
  const Images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    ]
  setInterval(() => {
    setCurrentIndex((prevIndex) =>prevIndex === Images.length - 1 ? 0 : prevIndex + 1)
  }, 2000);
  return (
    <>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={Images[currentIndex]}
      className="w-full" />
  </div>
  
</div>
</>
  )
}

export default Silde