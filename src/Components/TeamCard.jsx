import React from 'react'
import { motion } from 'framer-motion';

const TeamCard = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[45px] border-2 border-black p-8 lg:p-10 shadow-[0_5px_0_0_#000] hover:shadow-[0_8px_0_0_#000] transition-all duration-300 hover:-translate-y-1"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div
                            className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center overflow-hidden"
                            style={{ backgroundColor: '#B9FF66' }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg lg:text-xl font-semibold text-black mb-1">
                            {member.name}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-700">
                            {member.position}
                        </p>
                    </div>
                </div>

                <motion.a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </motion.a>
            </div>

            <div className="border-t border-black pt-6">
                <p className="text-sm lg:text-base text-black leading-relaxed">
                    {member.description}
                </p>
            </div>
        </motion.div>
    );
};

export default TeamCard