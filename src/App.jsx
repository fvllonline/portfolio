"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Resume from "./components/Resume"
import Certifications from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import data from "./data/siteData"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero data={data.hero} setActiveSection={setActiveSection} />
        <About data={data.about} />
        <Services data={data.services} />
        <Resume data={data.resume} />
        <Certifications data={data.portfolio} />
        <Testimonials data={data.testimonials} />
        <Contact data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </div>
  )
}

export default App

