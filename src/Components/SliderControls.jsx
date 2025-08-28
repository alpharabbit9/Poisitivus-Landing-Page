import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const SliderControls = ({ currentSlide, totalSlides, onPrevious, onNext, onSlideSelect }) => {
  return (
    <div className="flex items-center justify-center gap-8 mt-12">
      <motion.button
        onClick={onPrevious}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gray-800"
        >
          <path 
            d="M15 18L9 12L15 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideSelect(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'w-8 h-3 rounded-full' 
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
            style={{
              backgroundColor: currentSlide === index ? '#B9FF66' : undefined
            }}
          />
        ))}
      </div>

      <motion.button
        onClick={onNext}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gray-800"
        >
          <path 
            d="M9 18L15 12L9 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default SliderControls