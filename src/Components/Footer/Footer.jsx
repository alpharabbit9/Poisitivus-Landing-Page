import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-11/12 lg:w-10/12 mx-auto bg-[#191A23] rounded-tl-[45px] rounded-tr-[45px] text-white p-6 lg:p-12">


            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6">
                <h3 className="text-2xl flex gap-2">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7572 4.95854L29.1885 0.78125L24.9777 15.0001L29.1885 29.1788L14.7572 25.0416L0.285049 29.1788L4.53676 15.0001L0.285049 0.78125L14.7572 4.95854Z" fill="white" />
                    </svg>
                    Positivus</h3>

                <ul className="flex flex-col md:flex-row gap-3 text-center md:text-left">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Use Cases</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Prices</a></li>
                </ul>

                <div className="flex gap-4 text-2xl">
                    <FaLinkedin />
                    <FaFacebook />
                    <FaTwitter />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-10 mb-12">

                <div className="flex-1">
                    <span className="bg-[#B9FF66] text-[#191A23] rounded px-2">Contact Us</span>
                    <div>
                        <p className="text-sm mt-2 mb-3">Email : email@positivus.com</p>
                        <p className="text-sm mt-2 mb-3">Phone : 555-567-8901</p>
                        <p className="text-sm mt-2 mb-3">
                            Address : 1234 main St <br /> Moonsoon City , Stardust State 12345
                        </p>
                    </div>
                </div>

                <div className="flex-1 bg-[#292A32] px-5 py-8 md:px- md:py-14 rounded-2xl flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
                    <input
                        className="flex-1 border border-gray-500 rounded p-1 w-full sm:w-auto"
                        type="text"
                        placeholder="Email"
                    />
                    <button className="bg-[#B9FF66] text-black font-medium px-4 py-1 rounded w-full sm:w-auto">
                        Subscribe to news
                    </button>
                </div>
            </div>


            <div className="h-[2px] bg-gray-500 w-full my-5"></div>

            <footer className="text-center md:text-left text-sm">
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved by Positivus
                </p>
            </footer>
        </motion.div>
    )
}

export default Footer
