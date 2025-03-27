"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "resume", label: "Resume" },
    { id: "certifications", label: "Certifications" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300
        ${isScrolled ? "bg-black/90 shadow-md py-3" : "bg-transparent py-5"}
        backdrop-blur-sm header-bg
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo animé */}
        <motion.div 
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.span 
            className="text-beige-light ml-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            NAWFAL ADDAOUI
          </motion.span>
        </motion.div>

        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.button
                  onClick={() => handleNavClick(item.id)}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#f5f5f5"
                  }}
                  className={`
                    relative py-1 px-2
                    font-medium
                    transition-colors duration-200
                    ${activeSection === item.id ? "text-beige-light" : "text-gray-300"}
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-beige-light"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Bouton Mobile animé */}
        <motion.button
          className="md:hidden p-2 text-gray-dark"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-beige-light" />
          ) : (
            <motion.div
              animate={{ rotate: isScrolled ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaBars size={24} />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Menu Mobile animé */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-beige-light/95 overflow-hidden"
      >
        <ul className="py-2 px-4 divide-y divide-gray-dark/10">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -50,
                opacity: isMenuOpen ? 1 : 0
              }}
              transition={{ delay: 0.05 * index }}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left py-3 px-4
                  transition-all duration-200
                  ${activeSection === item.id 
                    ? "text-black font-medium bg-gray-dark/5" 
                    : "text-gray-dark hover:bg-gray-dark/5 hover:text-black"
                  }
                `}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}

export default Header