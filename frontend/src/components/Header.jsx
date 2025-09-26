import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { ReactTyped } from "react-typed";
import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { MdArrowBack } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import banner from "../assets/download.jpg"






const Header = () => {
    //  notify
    const notify = () => {
        toast("sorry!, This is dumy website You can't login")
    }

    // forinput
    const [focus, setfocus] = useState(false)
    // formodal
    const [open, setOpen] = useState(false);
    // scrollerror
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // disable scroll
        } else {
            document.body.style.overflow = "auto"; // enable scroll
        }
    }, [open]);



    //  serachbar
    const search = (<div className={`flex items-center w-full ${focus && "h-12 ring-1 ring-gray-300 shadow-[0_0_5px_rgba(156,163,175,0.6)]"} bg-gray-100 rounded-lg`} >
        <a href="" className='p-2'><IoSearchOutline className=' text-xl' /></a>
        <ReactTyped
            strings={
                !focus ? [
                    "Search  'chocolate'",
                    "Search  'milk'",
                    "Search  'Drinks'",
                    "Search  'sugar'",
                    "Search  'fruits'",
                    "Search  'egg'",
                    "Search  'chips'",
                    "Search  'butter'",
                    "Search  'curd'",
                    "Search  'rice'",
                ] : []
            }
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
            className='w-full'
        ><input
                className={`transition-all duration-300 h-12  border-none w-full focus:outline-none text-sm px-4  py-2 rounded-lg ${focus ? "w-full" : "w-full border-0 "}`}
                type="text"
                placeholder="Search for atta dall and more"
                onFocus={() => setfocus(true)}
                onBlur={() => setfocus(false)}


            />


        </ReactTyped>


    </div>)


    const backButton = (<button className="absolute top-3 left-3 lg:text-gray-600 bg-white text-black rounded-full p-1 lg:p-0 lg:shadow-none lg:rounded-none shadow-md hover:text-black" onClick={() => setOpen(false)}>
        <MdArrowBack size={22} />
    </button>)


    const loginModal = (
        <div className="fixed inset-0 flex items-center lg:justify-center  flex-col justify-between">


            <div className="absolute inset-0 backdrop-blur-md  lg:bg-transparent bg-white"></div>

            <div style={{ width: "70rem", overflow: "hidden" }} className="bg-white h-auto absolute lg:hidden ">
                <div className='relative bg-black   shadow-md rounded-full text-black'>{backButton}</div>

                <style>
                    {`
                       @keyframes moveLeft {
                         0% { transform: translateX(0); }
                         100% { transform: translateX(-50%); } 
                       }
                     `}
                </style>

                {/* Wrapper jisme 2 images repeat hongi */}
                <div 
                    style={{
                        display: "flex",
                        width: "calc(70rem * 2)", // 2 images side by side
                        animation: "moveLeft 15s linear infinite",
                    }}
                >
                    {/* Same image 2 baar repeat karna */}
                    <img
                        src={banner}
                        alt="moving"
                        style={{ width: "70rem", height: "auto", flexShrink: 0 }}
                    />
                    <img
                        src={banner}
                        alt="moving"
                        style={{ width: "70rem", height: "auto", flexShrink: 0 }}
                    />
                </div>
            </div>



            <div className='lg:hidden block '>{backButton}</div>
            <div className="relative bg-white p-6 rounded-2xl lg:shadow-lg lg:w-[90%] w-full shadow-[0_-12px_12px_3px_rgba(255,255,255,0.8)] lg:max-w-md z-10 flex flex-col items-center gap-4 ">


                <div className='hidden lg:block'>{backButton}</div>


                <div className="flex flex-col items-center justify-center gap-4 w-full  ">

                    <div className="w-20 h-20 flex items-center justify-center bg-yellow-500 rounded-2xl">
                        <p className="text-black text-xl font-bold">
                            blink<span className="text-green-600">it</span>
                        </p>
                    </div>


                    <div className="text-center">
                        <p className="text-2xl font-bold">India&apos;s last minute app</p>
                        <p className="text-gray-600">Login or Sign up</p>
                    </div>


                    <div className="flex w-3/4 rounded-xl border-2 justify-center items-center h-10 border-gray-300 px-2">
                        <span className="mr-2">+91</span>
                        <input
                            type="tel"
                            placeholder="Enter mobile number"
                            className="w-full outline-none placeholder:text-gray-400 placeholder:font-medium"
                        />
                    </div>

                    <div className="w-3/4">
                        <button className="w-full p-2 bg-gray-400 text-white rounded-xl hover:bg-gray-500" onClick={notify}>
                            Continue
                        </button>
                    </div>


                    <p className="text-sm text-gray-400 mt-2 text-center">
                        By continuing, you agree to our{" "}
                        <a href="#" className="underline">
                            Terms of service{" "}
                        </a>
                        &{" "}
                        <a href="#" className="underline">
                            Privacy policy
                        </a>
                    </p>
                </div>
            </div>
        </div>)


    //  useraddres
    const userInfo = (<div className="ml-4 w-[300px]">
        <p className="font-bold">Delivery in 8 minutes</p>
        <p className="text-sm text-gray-500">Naraina, New Delhi, Delhi, India ▼</p>
    </div>)



    function handleInput() {

    }

    return (
        <>
            <header className='fixed top-0 right-0 left-0 bg-white' >
                <div className='flex items-center justify-between px-5 lg:shadow-md  bg-gray-50'>
                    {/* modal for login */}
                    {open && (loginModal)}
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div
                            className=' p-4 border-r-2 border-gray-200 mr-9 hidden lg:block'>
                            <a href='/' className="text-4xl font-bold text-yellow-500 cursor-pointer" >blink<span className='text-4xl font-bold text-green-600'>it</span></a>
                        </div>


                        {!focus && (<div className='hidden lg:block'>{userInfo}</div>)}
                        <div className="ml-4 w-[300px] lg:hidden block">
                            <p className="font-bold">Delivery in 8 minutes</p>
                            <p className="text-sm text-gray-500">Naraina, New Delhi, Delhi, India ▼</p>
                        </div>
                    </div>

                    {/* Search Bar */}

                    <div className='hidden lg:block w-full '>{search}</div>

                    {/* Right Section */}

                    <div className='flex items-center pl-2 w-[200px] '>{!focus && (<button className="cursor-pointer text-lg mr-35 ml-4 hover:bg-gra lg:block hidden" onClick={() => setOpen(true)} >Login</button>)}

                        {/* mycartbutton */}
                        <button className={`bg-gray-100 px-4 py-2 ${open ? "blur" : ""}absolute right-0 rounded-lg lg:flex items-center  text-gray-400 ml-4 mr-4 cursor-pointer hover:bg-gray-200 hover:scale-100 hidden`}>
                            <div className=''><SlBasket /> <span className='mx-2'>My Cart</span></div>
                        
                        </button>

                        {/* userbutton forsmall screen */}
                        <button className={`absolute ${open ? "hidden" : "block"}  right-4 cursor-pointer lg:hidden block text-2xl`} onClick={() => setOpen(true)}><FaRegUserCircle /></button>
                    </div>
                </div>
                <div className='w-full lg:hidden pl-2 pr-2 p-2'>{search}</div>

            </header>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />



        </>
    )
}

export default Header