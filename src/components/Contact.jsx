"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ContactInfo = ({ icon: Icon, title, content, variants }) => {
  return (
    <motion.div 
      className="flex items-start gap-4 mb-6"
      variants={variants}
      whileHover={{ x: 5 }}
    >
      <motion.div 
        className="w-12 h-12 bg-beige-light rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="text-gray-dark group-hover:text-gray-700 transition-colors" size={18} />
      </motion.div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-gray-dark">{title}</h3>
        <p className="text-gray-dark/80">{content}</p>
      </div>
    </motion.div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px", once: false })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark"
            variants={itemVariants}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-xl font-medium text-gray-dark/80 mb-4"
            variants={itemVariants}
          >
            I'M AVAILABLE FOR OPPORTUNITIES
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-gray-dark mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants}>
            <ContactInfo 
              icon={FaMapMarkerAlt} 
              title="Address" 
              content="Morocco, Casablanca"
              variants={itemVariants}
            />
            <ContactInfo 
              icon={FaPhone} 
              title="Phone" 
              content="+212 631-108355"
              variants={itemVariants}
            />
            <ContactInfo 
              icon={FaEnvelope} 
              title="Email" 
              content="Naoufaladdaoui@gmail.com"
              variants={itemVariants}
            />

            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <p className="text-gray-dark/80 mb-6">
                Feel free to reach out for collaborations or just a friendly hello.
              </p>

              <motion.div 
                className="flex gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href="https://www.linkedin.com/in/nawfal-addaoui-40b651248/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-light rounded-full flex items-center justify-center text-gray-dark hover:bg-gray-dark hover:text-white transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://github.com/fvllonline" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-light rounded-full flex items-center justify-center text-gray-dark hover:bg-gray-dark hover:text-white transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={18} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="bg-beige-light p-8 rounded-lg shadow-sm border border-beige-light/50"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-gray-dark"
              variants={itemVariants}
            >
              Send Me a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="grid md:grid-cols-2 gap-4 mb-4"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                    required
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="grid md:grid-cols-2 gap-4 mb-4"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                    required
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                  required
                ></textarea>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-gray-dark text-white rounded-md hover:bg-black transition-all duration-300 flex items-center gap-2 w-full justify-center hover:shadow-md"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  Send Message <FaPaperPlane size={16} />
                </motion.button>
                
                <motion.a
                  href="https://www.linkedin.com/in/nawfal-addaoui-40b651248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-dark text-gray-dark rounded-md hover:bg-gray-dark hover:text-white transition-all duration-300 w-full"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  Contact on LinkedIn
                </motion.a>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact