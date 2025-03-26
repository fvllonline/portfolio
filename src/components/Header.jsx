"use client"

import { useState, useEffect } from "react"
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
    <header className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-300
      ${isScrolled ? "bg-black shadow-md py-3" : "bg-transparent py-5"}
      border-b border-gray-dark/10
    `}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo avec animation au hover */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-beige-light ml-1 transition-all hover:tracking-wider">NAWFAL ADDAOUI</span>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    relative py-1 px-2
                    text-beige-light font-medium
                    transition-all duration-200
                    hover:text-gray-dark
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:h-0.5 after:w-0 after:bg-gray-dark
                    after:transition-all after:duration-300
                    hover:after:w-full
                    ${activeSection === item.id ? "text-beige-light after:w-full" : ""}
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton Mobile */}
        <button
          className="md:hidden p-2 text-gray-dark hover:text-black transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="animate-spin-in" />
          ) : (
            <FaBars size={24} className="animate-pulse-once" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className={`
          md:hidden bg-beige-light
          shadow-lg absolute top-full left-0 right-0
          animate-slide-down
        `}>
          <ul className="py-2 px-4 divide-y divide-gray-dark/10">
            {menuItems.map((item) => (
              <li key={item.id}>
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header