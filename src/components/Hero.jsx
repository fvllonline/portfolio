"use client"

import { FaArrowRight } from "react-icons/fa"
import ProfilePic from "../assets/ProfilePic.jpg"

const Hero = ({ data, setActiveSection }) => {
  const handleCVDownload = () => {
    alert("CV download functionality will be implemented here")
  }

  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-black text-beige-light"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Texte principal */}
        <div className="order-2 md:order-1">
          <div className="mb-4">
            <span className="inline-block py-1.5 px-4 bg-beige-light/20 text-beige-light rounded-full text-sm font-medium tracking-wide">
              {data.subtitle}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {data.title} <br />
            <span className="text-beige-light font-extrabold">{data.highlightedText}</span>
          </h1>
          
          <p className="text-beige-light/80 mb-8 max-w-lg text-lg">
            {data.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
          <button
            onClick={() => window.open("https://www.linkedin.com/in/nawfal-addaoui-40b651248/", "_blank")}
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
            <span className="relative z-10">View LinkedIn Profile</span>
            <FaArrowRight 
              size={14} 
              className="
                relative z-10
                transition-all duration-300
                group-hover:translate-x-1 
              " 
            />
            
            {/* Effet de fond animé */}
            <span className="
              absolute inset-0 
              bg-gradient-to-r from-beige-light to-beige-light/70
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              z-0
            "/>
          </button>
            
            <button
              onClick={() => {
                setActiveSection("contact")
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-7 py-3.5 border-2 border-beige-light text-beige-light rounded-md hover:bg-beige-light/10 transition-all font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Photo placeholder - A remplacer par votre image */}
        <div className="order-1 md:order-2 flex justify-center relative group">
          <div className="
            relative
            w-64 h-64 md:w-80 md:h-80
            rounded-full
            overflow-hidden
            border-4 border-beige-light/20
            group-hover:border-beige-light/40
            transition-all duration-500
            shadow-[0_0_30px_rgba(211,205,184,0.15)]
            group-hover:shadow-[0_0_40px_rgba(211,205,184,0.25)]
          ">
            {/* Image avec effet de zoom au survol */}
            <img
              src={ProfilePic}
              alt="Photo de Nawfal ADDAOUI"
              className="
                w-full h-full
                object-cover
                group-hover:scale-105
                transition-transform duration-700 ease-in-out
              "
            />

            {/* Halo animé amélioré */}
            <div className="
              absolute -inset-4
              rounded-full
              border border-beige-light/15
              group-hover:border-beige-light/25
              transition-all duration-1000
              animate-pulse-slow
              pointer-events-none
              group-hover:opacity-80
            "/>

            {/* Effet de lumière au survol */}
            <div className="
              absolute inset-0
              bg-gradient-to-br
              from-beige-light/0 via-beige-light/0 to-beige-light/10
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
              pointer-events-none
            "/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero