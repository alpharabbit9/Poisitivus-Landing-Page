import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../Components/TestimonialCard';
import SliderControls from '../Components/SliderControls';





const TestimonialSlider = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / visibleTestimonials);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentTestimonials = () => {
    const start = currentSlide * visibleTestimonials;
    const end = start + visibleTestimonials;
    return testimonials.slice(start, end);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-[220px]">
        <AnimatePresence mode="popLayout">
          {getCurrentTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={`${currentSlide}-${index}`}
              testimonial={testimonial}
              isActive={true}
            />
          ))}
        </AnimatePresence>
      </div>

      <SliderControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onSlideSelect={goToSlide}
      />
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      position: "Marketing Director at ABC Inc"
    },
    {
      review: "Working with Positivus has been a game-changer for our digital marketing strategy. Their expertise in SEO and content marketing has helped us reach new audiences and drive meaningful engagement with our brand.",
      name: "Sarah Johnson",
      position: "CEO at Digital Solutions"
    },
    {
      review: "The team at Positivus delivered exceptional results for our PPC campaigns. Their data-driven approach and attention to detail helped us achieve a 300% increase in conversions while reducing our cost per acquisition.",
      name: "Mike Chen",
      position: "Growth Manager at TechStart"
    },
    {
      review: "Positivus transformed our social media presence completely. Their creative campaigns and strategic approach helped us build a strong community and significantly increase our brand awareness.",
      name: "Emily Davis",
      position: "Brand Manager at Fashion Forward"
    },
    {
      review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      position: "Marketing Director at ABC Inc"
    },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="px-6 py-4 rounded-lg font-bold text-xl lg:text-2xl text-black" style={{ backgroundColor: '#B9FF66' }}>
              Testimonials
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-[45px] p-8 lg:p-12"
          style={{ backgroundColor: '#191A23' }}
        >
          <TestimonialSlider testimonials={testimonials} />
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;