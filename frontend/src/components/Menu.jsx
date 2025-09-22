import React from 'react'
import data from "../assets/data"
import mobile from "../assets/dataMobile"
import banner from "../assets/banner.webp"
import card1 from "../assets/cardone.avif"
import card2 from "../assets/cardtwo.avif"
import card3 from "../assets/cardthree.avif"


const Menu = () => {
  return (
    <>
    <div className=' lg:w-[80%] w-full m-auto'>
        <div className='mt-2'>
            <div className="banner hidden lg:block"> <a href=""><img src={banner} className='h-40 w-auto'/></a></div>
            <div className="options mt-2 hidden lg:flex">
                <a href=""><img src={card1} alt="" className='h-53 w-auto ml-3'/></a>
                <a href=""><img src={card2} alt="" className='h-53 w-auto ml-3'/></a>
                <a href=""><img src={card3} alt="" className='h-53 w-auto ml-3'/></a>
            </div>
            <div className='w-full mt-4'>
              <h2 className='font-extrabold  text-lg lg:hidden'>Shop by Cateogry</h2>
              <div className="w-full mt-2 lg:hidden grid grid-cols-4 ">
  {mobile.map(({ id, name, image }, index) => (
    <div
      key={id}
      className={`
        flex flex-col items-center text-center p-1
        ${index < 2 ? "col-span-2" : ""} 
        ${index >= 2 && index < 5 ? (index === 4 ? "col-span-2" : "col-span-1") : ""} 
        ${index >= 5 ? "col-span-1" : ""}
      `}
    >
      {/* Image */}
      <div className='w-full bg-blue-100 rounded-lg '><img src={image} alt={name} className=" p-0 h-[6rem] m-auto "  /></div>

      {/* Text under image */}
      <p className="mt-2 text-sm font-medium text-gray-600 mb-2">{name}</p>
    </div>
  ))}
</div>



            </div>
            <div className=" w-full  pt-4 lg:grid-cols-10 lg:grid lg:grid-rows-2 hidden "> 
              
             {data.map(({id,img:images})=>(
                  
              <img  key={id} src={images} alt="" />
               ))}

               </div>

        </div>
        <div className='products'>

        </div>
        
        
    </div>
    
    
    
    </>
    
  )
}

export default Menu