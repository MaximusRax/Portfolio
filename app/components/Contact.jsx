import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { delay } from 'motion'

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("sending...");
        const formData = new FormData(event.target)
        formData.append("access_key", "a73c27fd-544c-4d3f-8b36-ffe0091f8a2b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,

        });

        const data = await response.json();

        if (data.success) {
            setResult("Message send successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }} id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length: 90_auto]">
            <motion.h4 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }} className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
            <motion.h2 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }} className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </motion.p>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="max-w-2xl mx-auto" onSubmit={onSubmit}>
                <div className="grid grid-cols-[repeat(autofit, minmax(200px, 1fr))] lg:grid-cols-2  gap-6 mt-10 mb-8 ">
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }} type="text" placeholder="Enter your Name" name='name' required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }} type="email" placeholder="Enter your Email" name='email' required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" />
                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }} rows="6" placeholder="Enter your Message" name="message" id="" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 bg-white resize-none"></motion.textarea>
                <motion.button
                    whileHover={{ sclae: 1.05 }}
                    transition={{ duration: 0.3 }} type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
                    Submit now<Image src={assets.right_arrow_white} alt='submit' className='w-4' />
                </motion.button>
                <p className='mt-4' >{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact