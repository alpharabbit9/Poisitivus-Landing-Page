import React from 'react';
import { motion } from 'framer-motion';

const CaseStudiesSection = () => {
    const caseStudies = [
        {
            title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
            delay: 0.1
        },
        {
            title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
            delay: 0.2
        },
        {
            title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
            delay: 0.3
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full py-8 px-4 sm:px-6 lg:px-8 mt-10 mb-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                    >
                        <div className=" text-3xl md:text-4xl font-bold text-black mb-2">
                            Case Studies
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <p className=" font-medium text-[#191A23] mb-6 lg:mb-8">
                            Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies
                        </p>
                    </motion.div>
                </div>

                <div className="mt-8 lg:mt-12">
                    <div className="bg-[#191A23] rounded-2xl p-6 sm:p-8 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: study.delay }}
                                    viewport={{ once: true }}
                                    className="text-white"
                                >
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                                        {study.title}
                                    </p>

                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="btn btn-link text-green-400 hover:text-green-300 p-0 no-underline font-medium flex items-center gap-2 group"
                                    >
                                        Learn more
                                        <motion.svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            whileHover={{ x: 3 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </motion.button>
                                </motion.div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudiesSection;