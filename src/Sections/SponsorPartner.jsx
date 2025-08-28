import { motion } from "framer-motion";
import amazon from "../assets/Logo/amazon.jpg";
import dribble from "../assets/Logo/driibble.png";
import notion from "../assets/Logo/notiiion.png";
import netflx from "../assets/Logo/net.png";
import hubspot from "../assets/Logo/HubSpot_Logo.png";
import zoom from "../assets/Logo/zoom.png";

const logos = [amazon, dribble, notion, netflx, hubspot, zoom ];

const SponsorPartner = () => {
  return (
    <div className="py-12 overflow-hidden mt-10 mb-16">
      <div className="container mx-auto">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20, // adjust speed
            ease: "linear",
          }}
        >
         
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Sponsor ${i}`}
              className="h-12 grayscale hover:grayscale-0 transition"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorPartner;
