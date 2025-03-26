"use client"

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import mina from "../assets/mina.jpg"

const TestimonialCard = ({ name, position, testimonial, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-beige-light/30 h-full">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-beige-light">
          <img 
            src={image || "/placeholder-profile.jpg"} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <p className="text-black/70">{position}</p>
        </div>
      </div>
      <div className="relative">
        <FaQuoteRight className="absolute -top-4 -left-2 text-gray-dark/10" size={40} />
        <p className="text-black/80 relative z-10">{testimonial}</p>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Client Testimonials</h2>
          <p className="text-xl font-medium text-black/80">WHAT PEOPLE SAY</p>
          <div className="w-20 h-1 bg-black mx-auto mt-4"></div>
        </div>

        {/* Cartes de témoignages statiques - À remplir manuellement */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Carte 1 - À personnaliser */}
          <TestimonialCard
            name="Mrs. BOUJNAH Mina"
            position="Founder/CEO of MB Way"
            testimonial="Your work demonstrates a strong mastery of full stack skills, with a methodical and well-structured approach. The code is both clean and optimized, ensuring good performance and future scalability. Congratulations on this high-quality achievement."
            image={mina}
          />
        </div>

        {/* Boutons de navigation (optionnels) */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-dark hover:text-white transition-colors border border-gray-dark/20">
            <FaChevronLeft size={16} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-dark hover:text-white transition-colors border border-gray-dark/20">
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials