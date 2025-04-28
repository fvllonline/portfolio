"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { FaExternalLinkAlt, FaAward } from "react-icons/fa"
import ciscologo from "../assets/ciscologo.jpg"
import tcflogo from "../assets/tcflogo.jpg"
import { useEffect, useRef } from "react"

const CertificationCard = ({ title, issuer, logo, link, variants }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg border border-beige-light/30 bg-beige-light shadow-sm hover:shadow-md transition-all h-full"
      variants={variants}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <motion.div 
            className="p-3 bg-white rounded-full text-gray-dark"
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            <FaAward size={20} />
          </motion.div>
          <span className="text-sm font-medium text-gray-dark/80">{issuer}</span>
        </div>

        <div className="flex-grow flex items-center justify-center mb-4">
          <motion.img
            src={logo}
            alt={`${title} Certificate`}
            className="max-h-32 object-contain"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="mt-auto">
          <h3 className="text-lg text-center font-bold text-gray-dark mb-1">{title}</h3>
          
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium bg-gray-dark text-white px-4 py-2 rounded-full hover:bg-gray-dark/90 transition-colors w-full justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Credential <FaExternalLinkAlt size={12} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Certifications = () => {
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

  const certifications = [
    {
      title: "TCF French B2",
      issuer: "France Éducation International",
      logo: tcflogo,
      link: "https://www.france-education-international.fr/article/comprendre-mes-resultats-au-tcf"
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      logo: ciscologo,
      link: "https://www.credly.com/badges/fecacadf-dc61-441e-93ce-71218866c122/print"
    },
    {
      title: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy",
      logo: ciscologo,
      link: "https://www.credly.com/badges/4acf73b6-845b-4477-b272-b25af6ea61c9"
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      logo: ciscologo,
      link: "https://www.credly.com/badges/8a3516bb-28b8-409c-9d68-e1102074a10e/print"
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      logo: ciscologo,
      link: "https://www.credly.com/badges/c7c19e42-e87d-4f43-a068-e729d103945c"
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco Networking Academy",
      logo: ciscologo,
      link: "https://www.credly.com/badges/c7c19e42-e87d-4f43-a068-e729d103945c"
    }
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark"
            variants={item}
          >
            My Certifications
          </motion.h2>
          <motion.p 
            className="text-xl font-medium text-gray-dark/60"
            variants={item}
          >
            PROFESSIONAL QUALIFICATIONS
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-gray-dark mx-auto mt-4"
            variants={{
              hidden: { scaleX: 0 },
              visible: { 
                scaleX: 1,
                transition: { type: "spring", stiffness: 200 }
              }
            }}
          />
        </motion.div>

        {/* Grille de certifications */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              logo={cert.logo}
              link={cert.link}
              variants={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications