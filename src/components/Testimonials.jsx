"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import mina from "../assets/mina.jpg"
import yns from "../assets/yns.jpg"
import { useEffect, useRef } from "react"

const TestimonialCard = ({ name, position, testimonial, image, variants }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-md border border-beige-light/30 h-full"
      variants={variants}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4 mb-6">
        <motion.div 
          className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-beige-light"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={image || "/placeholder-profile.jpg"} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <p className="text-black/70">{position}</p>
        </div>
      </div>
      <div className="relative">
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 5 }}
        >
          <FaQuoteRight className="absolute -top-4 -left-2 text-gray-dark/10" size={40} />
        </motion.div>
        <p className="text-black/80 relative z-10">{testimonial}</p>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px", once: false })

  useEffect(() => {
    if (isInView) controls.start("visible")
    else controls.start("hidden")
  }, [isInView, controls])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 }
    }
  }

  const testimonials = [
    {
      name: "Mrs. BOUJNAH Mina",
      position: "Founder/CEO of MB Way",
      testimonial: "Your work demonstrates a strong mastery of full stack skills, with a methodical and well-structured approach. The code is both clean and optimized, ensuring good performance and future scalability. Congratulations on this high-quality achievement.",
      image: mina
    },
    {
      name: "Mr. BENNAY Youness",
      position: "Founder/CEO of Adam Adventure Tours & Tourism",
      testimonial: "Working with Nawfal was a game-changer for our project. His full-stack expertise bridged our frontend and backend seamlessly, delivering a React + Laravel application 2 weeks ahead of schedule. His clean code and problem-solving skills set him apart - we've hired him for three more projects since!",
      image: yns
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-beige-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-black"
            variants={item}
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-xl font-medium text-black/80"
            variants={item}
          >
            WHAT PEOPLE SAY
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-black mx-auto mt-4"
            variants={{
              hidden: { scaleX: 0 },
              visible: { 
                scaleX: 1,
                transition: { type: "spring", stiffness: 200 }
              }
            }}
          />
        </motion.div>

        {/* Grille de témoignages */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
              variants={item}
            />
          ))}
        </motion.div>

        {/* Boutons de navigation */}
        <motion.div 
          className="flex justify-center mt-8 gap-4"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-dark hover:text-white transition-colors border border-gray-dark/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft size={16} />
          </motion.button>
          <motion.button 
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-dark hover:text-white transition-colors border border-gray-dark/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials