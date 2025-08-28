import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, dark, color, illustration, index , textbg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`${color} rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 border-b-2`}
    >
      {/* Top Row: Title + Illustration */}
      <div className="flex justify-between items-start gap-4">
        <h3
          className={`text-lg bg-${textbg} font-semibold leading-snug w-1/2 ${
            dark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>

        <div className="w-24 h-24 flex-shrink-0">{illustration}</div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-6 cursor-pointer group">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            dark ? "bg-white" : "bg-black"
          }`}
        >
          <ArrowUpRight
            size={16}
            className={`${
              dark ? "text-black" : "text-white"
            } group-hover:rotate-45 transition-transform duration-300`}
          />
        </motion.div>
        <span className={`text-sm ${dark ? "text-white" : "text-black"}`}>
          Learn more
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
