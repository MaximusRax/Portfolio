import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="works" className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }} className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }} className="text-center text-5xl font-Ovo">My latest work</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my Portfolio! Explore a collection of projects showcasing my expertise in Fullstack and Software development.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }} className="grid grid-cols-[repeat(autofit, minmax(200px, 1fr))] lg:grid-cols-2 xl:grid-cols-4  gap-5 my-10 ">
                {workData.map((project, index) => (
                    <motion.div whileHover={{ scale: 1.05 }} key={index} style={{ backgroundImage: `url(${project.bgImage})` }}
                        className="aspect-square rounded-lg relative cursor-pointer group">
                        <div className="bg-white w-10/12  absolute  rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-700" >{project.description}</p>
                            </div>
                            <div className=" rounded-full  w-9 aspect-square flex items-center justify-center group-hover:border-b group-hover:shadow-[2px_2px_0_#000] duration-500 group-hover:bg-lime-300 transition">
                                <Image src={assets.send_icon} alt='send icon' className="w-5 " />
                            </div>
                        </div>
                    </motion.div>
                ))}

            </motion.div>
            <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto  my-20 hover:bg-[#fcf4ff] duration-500 group">
                Show more <Image src={assets.right_arrow_bold} alt="more" className="w-4 group-hover:translate-x-2 transition duration-500" />
            </a>
        </motion.div>
    )
}

export default Work