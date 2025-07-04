"use Client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-11/12  -z-10 -translate-y-[80%] ">
                <Image src={assets.header_bg_color} alt='' className="w-full" />
            </div>
            <nav className={`w-full fixed px-4 xl:px-[8%] my-4 flex items-center justify-between z-50 ${isScroll ? 
                " bg-white opacity-80 backdrop-blur-lg shadow-sm " : ''} `}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo:assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
                </a>
                <ul className={`hidden md:flex items-center gap-6 md:gap-8 rounded-full px-12 py-3 bg-white ${isScroll ? '' : 'bg-white shadow-sm opacity-50'}`}>
                    <li><a className={`font-Ovo `} href="#top">Home</a></li>
                    <li><a className={`font-Ovo `} href="#about">About Me</a></li>
                    <li><a className={`font-Ovo `} href="#services">Services</a></li>
                    <li><a className={`font-Ovo `} href="#works">My Works</a></li>
                    <li><a className={`font-Ovo `} href="#contact">Contact Me</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    {/* <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className="w-6 min-w-6 " />
                    </button> */}
                    <a href='#contact' className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo  ">Contact
                        <Image src={assets.arrow_icon} className="w-3 h-3" alt='' />
                    </a>
                    <button className="block md:hidden cursor-pointer" onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className="w-6 min-w-6" />
                    </button>
                </div>
                {/* mobile Menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col  gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ">
                    <div className="absolute top-6 right-6" onClick={closeMenu}  ><Image src={assets.close_black} alt='' className="w-5 cursor-pointer" /></div>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#top"> Home</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#works">My Works</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar