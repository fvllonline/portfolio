"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProfilePic from "../assets/ProfilePic.jpg";

const Hero = ({ data, setActiveSection }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.section 
      id="home" 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-black text-beige-light"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="order-2 md:order-1" variants={item}>
          <motion.div className="mb-4" variants={item}>
            <span className="inline-block py-1.5 px-4 bg-beige-light/20 text-beige-light rounded-full text-sm font-medium tracking-wide">
              {data.subtitle}
            </span>
          </motion.div>
          
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" variants={item}>
            {data.title} <br />
            <motion.span className="text-beige-light font-extrabold" variants={item}>
              {data.highlightedText}
            </motion.span>
          </motion.h1>
          
          <motion.p className="text-beige-light/80 mb-8 max-w-lg text-lg" variants={item}>
            {data.description}
          </motion.p>
          
          <motion.div className="flex flex-wrap gap-4" variants={item}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://www.linkedin.com/in/nawfal-addaoui-40b651248/", "_blank")}
              className="px-6 py-3 bg-beige-light text-black rounded-md flex items-center gap-2 group relative overflow-hidden font-medium shadow-md hover:shadow-lg"
            >
              <span className="relative z-10">View LinkedIn Profile</span>
              <motion.div variants={item}>
                <FaArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-all duration-300" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveSection("contact");
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 border-2 border-beige-light text-beige-light rounded-md hover:bg-beige-light/10 transition-all font-medium"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="order-1 md:order-2 flex justify-center relative group"
          variants={item}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-beige-light/20 transition-all duration-500 shadow-[0_0_30px_rgba(211,205,184,0.15)]"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={ProfilePic}
              alt="Photo de Nawfal ADDAOUI"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute -inset-4 rounded-full border border-beige-light/15 transition-all duration-1000 animate-pulse-slow pointer-events-none"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
