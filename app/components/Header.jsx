import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale } from 'motion/react'
const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex items-center justify-center flex-col gap-4">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
                <Image src={assets.profile_img} alt='' className=" rounded-full w-32" />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-end gap-2 text-xl md:text-2xl md-3 font-Ovo">
                Hi! I am Brijesh Gautam <Image src={assets.hand_icon} alt="" className="w-6" />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px].font-Ovo">
                Fullstack Web developer and software developer based in Mumbai
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="font-Ovo max-w-2xl mx-auto">
                I am Fullstack developer from Virar, Mumbai with Degree in Computer Engineering, have experience of 2 year in conpanies like Vignotech.
            </motion.p>
            <div className="flex flex-col sm:flex-row  items-center gap-4 mt-4">
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white">
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                    Contact me</motion.a>
                <motion.a 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 ">
                    My Resume  <Image src={assets.download_icon} alt="Resume" className="w-4" />
                </motion.a>
            </div>
        </div>
    )
}

export default Header