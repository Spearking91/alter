// import React from 'react'

// const Card = () => {
//   return (
//     <div className="card card-compact carousel-item bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//   )
// }

// export default Card

import Link from 'next/link';
import React from 'react'

interface props{
  src: string;
  title: string;
  id: number;
}

const Card = ({src, title, id}:props) => {
  return (
    <div key={id} className="card card-compact carousel-item bg-base-100 w-96 shadow-xl">
  <figure>
  <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link className="btn btn-primary" href={'Items'}>Buy Now</Link>
    </div>
  </div>
</div>
  )
}

export default Card