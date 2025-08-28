import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ testimonial, isActive }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`relative bg-transparent border-2 border-green-400 rounded-3xl p-6 lg:p-8 min-h-[280px] flex flex-col justify-between ${isActive ? 'opacity-100' : 'opacity-60'
                }`}
        >
            <div className="mb-6">
                <p className="text-white text-base lg:text-lg leading-relaxed">
                    "{testimonial.review}"
                </p>
            </div>

            <div className="flex flex-col">
                <h4 className="text-white font-semibold text-lg mb-1">
                    {testimonial.name}
                </h4>
                <p className="text-gray-300 text-sm">
                    {testimonial.position}
                </p>
            </div>

            <div className="absolute bottom-0 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-green-400 transform translate-y-full"></div>
        </motion.div>
    );
};

export default TestimonialCard