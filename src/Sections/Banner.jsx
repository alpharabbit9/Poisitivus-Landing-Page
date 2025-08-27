import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Play, MapPin } from 'lucide-react';
import megaphone from '../assets/images/pharmaceutical-marketing-abstract-concept-vector-illustration-pharmaceutical-digital-agency-medicine-marketing-strategy-drugs-advertising-medical-equipment-market-promotion-abstract-metaphor.png'
const Banner = () => {
    // Animation variants for the rolling icons
    const iconVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen  flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold  leading-tight">
                            Navigating the
                            <br />
                            digital landscape
                            <br />
                            for success
                        </h1>

                        <p className="text-lg  leading-relaxed max-w-lg">
                            Our digital marketing agency helps businesses
                            grow and succeed online through a range of
                            services including SEO, PPC, social media marketing,
                            and content creation.
                        </p>

                        <button className="relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 group">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                Book a consultation
                            </span>
                            {/* wipe effect layer */}
                            <span className="absolute inset-0 bg-[#B9FF66] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                        </button>


                    </motion.div>

                    {/* Right Illustration */}
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex justify-center items-center">
                        {/* Main megaphone illustration */}
                        <div className="relative">
                            {/* Megaphone base */}
                            <div className="relative">
                                <img className='w-[400px]' src={megaphone} alt="" />
                            </div>

                            {/* Animated floating icons */}
                            {/* Heart icon */}
                            <motion.div
                                className="absolute -top-8 -right-4 bg-black rounded-full p-3"
                                variants={floatingVariants}
                                animate="animate"
                            >
                                <motion.div variants={iconVariants} animate="animate">
                                    <Heart className="w-6 h-6 text-white fill-white" />
                                </motion.div>
                            </motion.div>

                            {/* Share icon */}
                            <motion.div
                                className="absolute -top-4 right-16 bg-lime-400 rounded-full p-3"
                                variants={floatingVariants}
                                animate="animate"
                                style={{ animationDelay: '1s' }}
                            >
                                <motion.div
                                    variants={iconVariants}
                                    animate="animate"
                                    transition={{ delay: 1 }}
                                >
                                    <Share2 className="w-6 h-6 text-black" />
                                </motion.div>
                            </motion.div>

                            {/* Play icon */}
                            <motion.div
                                className="absolute top-8 -right-8 bg-black rounded-full p-3"
                                variants={floatingVariants}
                                animate="animate"
                                style={{ animationDelay: '2s' }}
                            >
                                <motion.div
                                    variants={iconVariants}
                                    animate="animate"
                                    transition={{ delay: 2 }}
                                >
                                    <Play className="w-6 h-6 text-white fill-white" />
                                </motion.div>
                            </motion.div>

                            {/* Location icon */}
                            <motion.div
                                className="absolute bottom-4 right-8 bg-lime-400 rounded-full p-3"
                                variants={floatingVariants}
                                animate="animate"
                                style={{ animationDelay: '3s' }}
                            >
                                <motion.div
                                    variants={iconVariants}
                                    animate="animate"
                                    transition={{ delay: 3 }}
                                >
                                    <MapPin className="w-6 h-6 text-black" />
                                </motion.div>
                            </motion.div>

                            {/* Additional floating elements */}
                            <motion.div
                                className="absolute -top-12 left-8 w-4 h-4 bg-black rounded-full"
                                animate={{
                                    y: [-15, 15, -15],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <motion.div
                                className="absolute top-16 -left-12 w-6 h-6 bg-lime-400 rounded-full"
                                animate={{
                                    y: [-10, 20, -10],
                                    x: [-5, 5, -5]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Diamond shapes */}
                            <motion.div
                                className="absolute bottom-8 left-4"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <div className="w-6 h-6 bg-black transform rotate-45"></div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 left-20"
                                animate={{
                                    rotate: [360, 0],
                                    scale: [1, 0.8, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <div className="w-4 h-4 bg-black transform rotate-45"></div>
                            </motion.div>

                            {/* Small circles */}
                            <motion.div
                                className="absolute bottom-12 right-24 w-3 h-3 bg-lime-400 rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;