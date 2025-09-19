import React from 'react'
import banner from "../assets/banner.webp"
import card1 from "../assets/cardone.avif"
import card2 from "../assets/cardtwo.avif"
import card3 from "../assets/cardthree.avif"


const Menu = () => {
  return (
    <>
    <div className=' w-[80%] m-auto'>
        <div className='mt-2'>
            <div className="banner hidden md:block"> <a href=""><img src={banner} alt="" /></a></div>
            <div className="options mt-2 hidden md:flex">
                <a href=""><img src={card1} alt="" className='h-53 w-auto ml-3'/></a>
                <a href=""><img src={card2} alt="" className='h-53 w-auto ml-3'/></a>
                <a href=""><img src={card3} alt="" className='h-53 w-auto ml-3'/></a>
            </div>
            <div className="cards"> </div>

        </div>
        <div className='products'>

        </div>
        
        
    </div>
    
    
    
    </>
    
  )
}

export default Menu