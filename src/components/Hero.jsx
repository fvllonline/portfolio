"use client"

import { motion } from "framer-motion"
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa"
import ProfilePic from "../assets/ProfilePic.jpg"

const Hero = ({ data, setActiveSection }) => {
  const handleCVDownload = () => {
    alert("CV download functionality will be implemented here")
  }

  // Variantes pour l'animation du texte
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-black text-beige-light overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Texte principal avec animations */}
        <motion.div 
          className="order-2 md:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.span 
              className="inline-block py-1.5 px-4 bg-beige-light/20 text-beige-light rounded-full text-sm font-medium tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {data.subtitle}
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            {data.title} <br />
            <motion.span 
              className="text-beige-light font-extrabold"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {data.highlightedText}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-beige-light/80 mb-8 max-w-lg text-lg"
            variants={itemVariants}
          >
            {data.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => window.open("https://www.linkedin.com/in/nawfal-addaoui-40b651248/", "_blank")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3 
                bg-beige-light text-black 
                rounded-md 
                hover:bg-beige-light/80 
                transition-all duration-200 
                flex items-center gap-2 
                group
                relative overflow-hidden
                font-medium
                shadow-md hover:shadow-lg
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                View LinkedIn
              </span>
              <FaArrowRight 
                size={14} 
                className="
                  relative z-10
                  transition-all duration-300
                  group-hover:translate-x-1 
                " 
              />
              
              {/* Effet de vague animée */}
              <motion.span
                className="absolute inset-0 bg-beige-light/90 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => {
                setActiveSection("contact")
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-7 py-3.5 
                border-2 border-beige-light text-beige-light 
                rounded-md hover:bg-beige-light/10 
                transition-all font-medium
                relative overflow-hidden
              "
            >
              <span className="relative z-10">Contact Me</span>
              {/* Effet de lumière au survol */}
              <motion.span
                className="absolute inset-0 bg-beige-light/5 z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Photo avec animations */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center relative group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="
              relative
              w-64 h-64 md:w-80 md:h-80
              rounded-full
              overflow-hidden
              border-4 border-beige-light/20
              group-hover:border-beige-light/40
              transition-all duration-500
              shadow-[0_0_30px_rgba(211,205,184,0.15)]
              group-hover:shadow-[0_0_40px_rgba(211,205,184,0.25)]
            "
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={ProfilePic}
              alt="Photo de Nawfal ADDAOUI"
              className="
                w-full h-full
                object-cover
              "
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />

            {/* Halo animé */}
            <motion.div 
              className="
                absolute -inset-4
                rounded-full
                border border-beige-light/15
                pointer-events-none
              "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: [0.9, 1.1, 0.9],
                opacity: [0, 0.4, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Points animés en arrière-plan */}
            <motion.div 
              className="absolute -inset-8 pointer-events-none"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-beige-light/40 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    transform: `rotate(${i * 30}deg) translateX(60px)`
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero