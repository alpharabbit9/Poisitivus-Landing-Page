import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ number, title, content, isOpen, onToggle }) => {
  const isActive = number === '01';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: parseInt(number) * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-[45px] border border-b-4 border-black mb-6 overflow-hidden ${
        isActive ? 'shadow-[0_5px_0_0_#000]' : ''
      }`}
      style={{
        backgroundColor: isActive ? '#B9FF66' : '#F3F3F3'
      }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full p-8 lg:p-10 flex items-center justify-between text-left"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-6">
          <span className="text-4xl lg:text-6xl font-medium text-black">
            {number}
          </span>
          <h3 className="text-xl lg:text-3xl font-medium text-black">
            {title}
          </h3>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-black flex items-center justify-center">
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 lg:px-10 pb-8 lg:pb-10">
              <div className="border-t border-black pt-6 lg:pt-8 ml-20 lg:ml-24">
                <p className="text-base lg:text-lg text-black leading-relaxed">
                  {content}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WorkingProcessSection = () => {
  const [openItem, setOpenItem] = useState('01');

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      content: 'We conduct thorough market research and competitive analysis to develop a comprehensive digital marketing strategy tailored to your business objectives and target audience.'
    },
    {
      number: '03',
      title: 'Implementation',
      content: 'Our team implements the strategic plan across all chosen digital channels, ensuring consistent messaging and optimal performance from day one.'
    },
    {
      number: '04',
      title: 'Monitoring and Optimization',
      content: 'We continuously monitor campaign performance using advanced analytics tools and make data-driven optimizations to maximize your return on investment.'
    },
    {
      number: '05',
      title: 'Reporting and Communication',
      content: 'Regular detailed reports keep you informed of progress, insights, and recommendations, maintaining transparent communication throughout our partnership.'
    },
    {
      number: '06',
      title: 'Continual Improvement',
      content: 'We believe in continuous evolution, constantly testing new strategies and refining existing ones to ensure your digital marketing stays ahead of the competition.'
    }
  ];

  const handleToggle = (number) => {
    setOpenItem(openItem === number ? null : number);
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="px-6 py-4 rounded-lg font-bold text-xl lg:text-2xl text-black" style={{ backgroundColor: '#B9FF66' }}>
              Our Working Process
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className=" font-medium text-black">
              Step-by-Step Guide to Achieving <br /> Your Business Goals
            </p>
          </motion.div>
        </div>

        <div className="space-y-0">
          {processSteps.map((step) => (
            <AccordionItem
              key={step.number}
              number={step.number}
              title={step.title}
              content={step.content}
              isOpen={openItem === step.number}
              onToggle={() => handleToggle(step.number)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessSection;