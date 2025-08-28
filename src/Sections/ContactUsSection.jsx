import React from 'react';
import { motion } from 'framer-motion';
import SeoIllustration from '../Components/illustration/utils';

const ContactUsSection = () => {
    return (
        <div className="w-full py-8 px-4  ">
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 mb-8 ">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                    >
                        <div className="px-6 py-4 rounded-lg font-bold text-xl lg:text-2xl text-black " style={{ backgroundColor: '#B9FF66' }}>
                            Contact Us
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <p className="font-medium text-gray-800">
                            Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
                        </p>
                    </motion.div>
                </div>

                <div className="rounded-2xl  sm:p-8 " style={{ backgroundColor: '#F3F3F3' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2  sm:px-6  gap-8 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex gap-6">
                                <label className="flex items-center cursor-pointer">
                                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B9FF66' }}></div>
                                    </div>
                                    <span className="ml-3 text-[#191A23] font-medium">Say Hi</span>
                                </label>

                                <label className="flex items-center cursor-pointer">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400">
                                    </div>
                                    <span className="ml-3 text-[#191A23] font-medium">Get a Quote</span>
                                </label>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[#191A23] font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                                        style={{ '--tw-ring-color': '#B9FF66' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#191A23] font-medium mb-2">Email*</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                                        style={{ '--tw-ring-color': '#B9FF66' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#191A23] font-medium mb-2">Message*</label>
                                    <textarea
                                        placeholder="Message"
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-opacity-50"
                                        style={{ '--tw-ring-color': '#B9FF66' }}
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 rounded-lg text-white font-medium transition-colors duration-200"
                                    style={{ backgroundColor: '#191A23' }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex justify-end"
                        >
                            <SeoIllustration />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;