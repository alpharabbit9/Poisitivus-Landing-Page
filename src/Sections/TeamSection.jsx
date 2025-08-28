import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../Components/TeamCard';



const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      linkedIn: "#"
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      description: "7+ years of experience in project management and team leadership. Strong organisational and communication skills",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3d5?w=150&h=150&fit=crop&crop=face",
      linkedIn: "#"
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      linkedIn: "#"
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      linkedIn: "#"
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analysing metrics, and building engagement",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      linkedIn: "#"
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      linkedIn: "#"
    }
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
              Team
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
              Meet the skilled and experienced team behind our <br /> successful digital marketing strategies
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors duration-200"
          >
            See all team
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;