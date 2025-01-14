import Image from "next/image";

import Landing from "@/Components/Landing";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main>
      <Landing />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="carousel carousel-end rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                alt="Drink"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Products</h1>
            <p className="py-6">
              We deal in a variety of products ranging from basic items like snacks to electronic gadgets such as laptops, Tvs, Frigdes, mobile phone, Microwaves and so on.
            </p>
            <button className="btn btn-primary">Check Out Our Products</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content lg:flex-rowreverse flex-col-reverse">

    <div className="flex-row flex">
  

  <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://1000logos.net/wp-content/uploads/2018/03/logo-wa-500x417.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Whatsapp</h2>
    <p>Check our community on whatsapp for our <param name="" value="" />roducts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Join us</button>
    </div>
  </div>
</div>

  <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://1000logos.net/wp-content/uploads/2017/08/Snapchat-logo-700x394.png"
      alt="Snapchat"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Snapchat</h2>
    <p>Check our page for more Products</p>
    <div className="card-actions">
      <button className="btn btn-primary">Follow us</button>
    </div>
  </div>
</div>
  
  <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x281.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Instagram</h2>
    <p>Follow our instagram page for more Products</p>
    <div className="card-actions">
      <button className="btn btn-primary">Follow us</button>
    </div>
  </div>
</div>

  <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu-500x281.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Facebook</h2>
    <p>Check our page for more Products</p>
    <div className="card-actions">
      <button className="btn btn-primary">Follow us</button>
    </div>
  </div>
</div>
      </div>

    <div>
      <h1 className="text-5xl font-bold">Contact</h1>
      <p className="py-6">
        We are availale on Whatsapp, InstaGram, SnapChat and FaceBook. Follow our page to be updated on our latest products
      </p>
    
    </div>
  </div>
</div>
      
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
  <div className="carousel carousel-vertical rounded-box h-96">
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
  </div>
</div>
    <div>
      <h1 className="text-5xl font-bold">About</h1>
      <p className="py-6">
       Our products are approved bt the FDA and .We are located in all parts of Ghana and 23 different countries arround the world.
      </p>

    </div>
  </div>
</div>
      
      <Footer />
    </main>
  );
}
