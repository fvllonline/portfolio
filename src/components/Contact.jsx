"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa"

const ContactInfo = ({ icon: Icon, title, content }) => {
  return (
    <div className="flex items-start gap-4 mb-6 transition-all duration-300 hover:scale-[1.02]">
      <div className="w-12 h-12 bg-beige-light rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
        <Icon className="text-gray-dark" size={18} />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-gray-dark">{title}</h3>
        <p className="text-gray-dark/80">{content}</p>
      </div>
    </div>
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">
            Contact Me
          </h2>
          <p className="text-xl font-medium text-gray-dark/80">I'M AVAILABLE FOR OPPORTUNITIES</p>
          <div className="w-20 h-1 bg-gray-dark mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <ContactInfo 
              icon={FaMapMarkerAlt} 
              title="Address" 
              content="Morocco, Casablanca" 
            />
            <ContactInfo 
              icon={FaPhone} 
              title="Phone" 
              content="+212 631-108355" 
            />
            <ContactInfo 
              icon={FaEnvelope} 
              title="Email" 
              content="Naoufaladdaoui@gmail.com" 
            />

            <div className="mt-8">
              <p className="text-gray-dark/80 mb-6">
                Feel free to reach out for collaborations or just a friendly hello.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nawfal-addaoui-40b651248/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-light rounded-full flex items-center justify-center text-gray-dark hover:bg-gray-dark hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/fvllonline" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-light rounded-full flex items-center justify-center text-gray-dark hover:bg-gray-dark hover:text-white transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-beige-light p-8 rounded-lg shadow-sm border border-beige-light/50">
            <h3 className="text-2xl font-bold mb-6 text-gray-dark">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-beige-light/70 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-dark/30 bg-white"
                  required
                ></textarea>
              </div>
              <div className="space-y-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-dark text-white rounded-md hover:bg-black transition-all duration-300 flex items-center gap-2 w-full justify-center hover:shadow-md"
                >
                  Send Message <FaPaperPlane size={16} />
                </button>
                
                <a
                  href="https://www.linkedin.com/in/nawfal-addaoui-40b651248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-dark text-gray-dark rounded-md hover:bg-gray-dark hover:text-white transition-all duration-300 w-full"
                >
                  Contact on LinkedIn
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact