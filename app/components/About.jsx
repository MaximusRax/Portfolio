import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion, scale } from 'motion/react';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-[12%] py-10 scroll-mt-20" id="about">
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo">About me</motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }} className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-64 sm:w-80 roundedd-3xl max-w-none">
                    <Image src={assets.user_image} alt='user' className="rounded-3xl w-full" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }} className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am an experience Fullstack developer with over 2 years of professional expertise in this feild.
                        Throughout my career, I had the privilege of collaborating with prestigious organizations,
                        contributing to their success and groowth.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {
                            infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.05 }} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-2xl" key={index} >
                                    <Image src={icon} alt={title} className="w-7 mt-3" />
                                    <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                    <p className="text-gray-600 text-sm">{description}</p>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="my-6 textt-gray-700 font-Ovo">Tools  I use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }} className="flex items-center gap-3 sm:gap-5">
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }} key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" >
                                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default About