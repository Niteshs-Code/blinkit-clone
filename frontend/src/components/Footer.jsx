import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { PiXLogoDuotone } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import bottombanner from "../assets/bottombannner.avif"
import apple from "../assets/applestore.webp";
import google from "../assets/googlestore.webp"

const footer = () => {

  const [on, seton] = useState(true);
  // footerrenderforcondition
  const bottom =(<div className='lg:w-[80%] w-[98%] lg:m-auto lg:block mx-3'>
        <div className='w-[100%]  m-auto p-1 flex mt-20 mb-20 flex-col lg:flex-row gap-y-15'>
          {/* left side fotter */}
          <div className='lg:w-[30%]   w-full '>
            <h2 className='text-lg font-bold '>Usefull Links</h2>
            <div className='flex gap-x-24  mt-3 text-gray-500 '>

              <div className='flex flex-col space-y-2'>
                <a href="#" className="hover:text-gray-700">Blog</a>
                <a href="#" className="hover:text-gray-700">Privacy</a>
                <a href="#" className="hover:text-gray-700">Terms</a>
                <a href="#" className="hover:text-gray-700">FAQs</a>
                <a href="#" className="hover:text-gray-700">Security</a>
                <a href="#" className="hover:text-gray-700">Contact</a>
              </div>
              <div className='flex flex-col space-y-2'>
                <a href="#" className="hover:text-gray-700">Partner</a>
                <a href="#" className="hover:text-gray-700">Frachise</a>
                <a href="#" className="hover:text-gray-700">Seller</a>
                <a href="#" className="hover:text-gray-700">Warehouse</a>
                <a href="#" className="hover:text-gray-700">Deliver</a>
                <a href="#" className="hover:text-gray-700">Resources</a>
              </div>
              <div className='flex flex-col space-y-2 lg:hidden xl:flex'>
                <a href="#" className="hover:text-gray-700">Recipes</a>
                <a href="#" className="hover:text-gray-700">Bistro</a>
                <a href="#" className="hover:text-gray-700">Distict</a>

              </div>
            </div>

          </div>


          <div className='lg:w-[65%] lg:ml-20 '>
            <h2 className='inline mr-3 text-lg font-bold'>Categories </h2> <a className='inline text-green-600 text-lg' href='#'>See all</a>
           <div className='lg:flex gap-x-3 mt-3 text-gray-500 grid-cols-2 grid gap-y-12'>
              {/* column1 */}
              <div className='flex flex-col gap-y-2 lg:w-[32%] '>
                <a href="" className="hover:text-gray-700">Vegetables & Fruits</a>
                <a href="" className="hover:text-gray-700">Cold Drinks & Juices</a>
                <a href="" className="hover:text-gray-700">Bakery & Biscuits</a>
                <a href="" className="hover:text-gray-700">Dry Fruits, Masala & Oil</a>
                <a href="" className="hover:text-gray-700">Pann Corner</a>
                <a href="" className="hover:text-gray-700">Pharma & wellness</a>
                <a href="" className="hover:text-gray-700">Personal Care</a>
                <a href="" className="hover:text-gray-700">Beauty & Cosmetics</a>
                <a href="" className="hover:text-gray-700">Kitchen & Dining</a>
                <a href="" className="hover:text-gray-700">Books</a>
                <a href="" className="hover:text-gray-700">E-Gift Cards</a>
              </div>
              {/* columm2 */}
              <div className='flex flex-col gap-y-2  lg:w-[32%]'>
                <a href="" className="hover:text-gray-700">Dairy & Breakfast</a>
                <a href="" className="hover:text-gray-700">Instant & Frozen Food</a>
                <a href="" className="hover:text-gray-700">Sweet Tooth</a>
                <a href="" className="hover:text-gray-700">Sauces & Spreads</a>
                <a href="" className="hover:text-gray-700">Organic & Premium</a>
                <a href="" className="hover:text-gray-700">Cleaning Essentials</a>
                <a href="" className="hover:text-gray-700">Ice Creams & Frozenn Desserts</a>
                <a href="" className="hover:text-gray-700">Fashion & Accessories</a>
                <a href="" className="hover:text-gray-700">Electronics & Electricals</a>
                <a href="" className="hover:text-gray-700">Toys & Games</a>
                <a href="" className="hover:text-gray-700">Rakhi Gifts</a>
              </div>
              {/* column3 */}
              <div className='flex flex-col gap-y-2 lg:w-[32%] '>
                <a href="" className="hover:text-gray-700">Munchies</a>
                <a href="" className="hover:text-gray-700">Tea, Coffee & Health Drinks</a>
                <a href="" className="hover:text-gray-700">Atta, Rice & Dal</a>
                <a href="" className="hover:text-gray-700">Chicken, Meat & Fish</a>
                <a href="" className="hover:text-gray-700">Baby Care</a>
                <a href="" className="hover:text-gray-700">Home & Office</a>
                <a href="" className="hover:text-gray-700">Pet Care</a>
                <a href="" className="hover:text-gray-700">Magazines</a>
                <a href="" className="hover:text-gray-700">Stationery Needs</a>
                <a href="" className="hover:text-gray-700">Print Store</a>
              </div>


            </div>
          </div>


        </div>
        <div className='bg-  w-full p-1 flex items-center justify-evenly  flex-col lg:flex-row gap-y-10 '>
          <div className='text-gray-500 font-semibold text-sm'>© Blink Commerce Private Limited, 2016-2025</div>
          <div className='font-bold text-gray-500 text-lg flex gap-x-2 bg-white'><span className='mr-4'>Downolad</span>
            <img src={apple} className='w-25' />
            <img src={google} className='w-25 ' />
          </div>
          <div className='flex gap-x-6 lg:ml-4'>





            <p className='rounded-full p-2 bg-black text-white text-2xl cursor-pointer'><FaFacebookF /></p>
            <p className='rounded-full p-2 bg-black text-white text-2xl cursor-pointer'><PiXLogoDuotone /></p>
            <p className='rounded-full p-2 bg-black text-white text-2xl cursor-pointer'><IoLogoInstagram /></p>
            <p className='rounded-full p-2 bg-black text-white text-2xl cursor-pointer'><FaLinkedinIn /></p>
            <p className='rounded-full p-2 bg-black text-white text-2xl cursor-pointer'><FaThreads /></p>
          </div>

        </div>
        <div className='lg:w-full lg:p-2 lg:m-4 mt-9'>
          <p className='text-gray-500 text-sm mb-25 text-left lg:m-0'> “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        </div>
        
      </div>)
  //
  
  return (
    <>
       <div className='hidden lg:block'>{bottom}</div>
       <div> <img src={bottombanner}  />
       <p className='text-7xl text-gray-300 font-bold p-12 mt-12 mb-10'>India's last minute app<FaHeart className='text-red-400 inline ml-5'/></p>
       <hr className=' text-gray-300 mt-10 mb-10'/><p className='m-14 text-gray-300 text-5xl font-bold'>Blinkit</p></div>
       <div className='text-gray-300  font-bold'><hr /></div>
      <div className='flex justify-between mx-2  shadow  w-98% '><p className=' text-gray-400 lg:hidden m-3 font-bold'>Indai's last minute app - blinkit</p><button onClick={()=>seton(!on)} className='text-gray-400'>{ on ? <FaPlus />  : <FaMinus />}</button></div>
      <div>{!on && bottom}</div>
      
    </>

  )
}

export default footer