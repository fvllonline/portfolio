"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import CV from "../assets/NAWFALCV.pdf" // Import du CV

const ResumeItem = ({ title, organization, period, description, variants }) => {
  return (
    <motion.div 
      className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-dark"
      variants={variants}
      whileHover={{ x: 5 }}
    >
      <motion.div 
        className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gray-dark transform -translate-x-1.5"
        whileHover={{ scale: 1.5 }}
      />
      <h3 className="text-xl font-bold mb-1 text-black">{title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-black/80">{organization}</span>
        <span className="text-sm text-black/60">({period})</span>
      </div>
      <p className="text-black/70">{description}</p>
    </motion.div>
  )
}

const SkillBar = ({ name, percentage, variants }) => {
  return (
    <motion.div 
      className="mb-6"
      variants={variants}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-black">{name}</span>
        <span className="text-black/80">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-dark/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gray-dark rounded-full"
          initial={{ width: 0 }}
          variants={{
            visible: { 
              width: `${percentage}%`,
              transition: { 
                duration: 1.5,
                ease: "easeOut",
                delay: 0.3
              }
            }
          }}
        />
      </div>
    </motion.div>
  )
}

const Resume = ({ data }) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <section id="resume" className="py-16 md:py-24 bg-beige-light" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
            My Resume
          </motion.h2>
          <motion.p 
            className="text-xl font-medium text-gray-dark/80"
            variants={item}
          >
            2+ YEARS OF EXPERIENCE
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

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-10 bg-white p-8 rounded-lg shadow-sm"
            variants={item}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black"
                variants={item}
              >
                Education
              </motion.h3>
              {data.education.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.degree}
                  organization={item.institution}
                  period={item.period}
                  description={item.description}
                  variants={item}
                />
              ))}
            </div>

            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black"
                variants={item}
              >
                Experience
              </motion.h3>
              {data.experience.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.position}
                  organization={item.company}
                  period={item.period}
                  description={item.description}
                  variants={item}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-10 bg-white p-8 rounded-lg shadow-sm"
            variants={item}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black"
                variants={item}
              >
                Technical Skills
              </motion.h3>
              {data.softwareSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage}
                  variants={item}
                />
              ))}
            </div>

            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black"
                variants={item}
              >
                Professional Skills
              </motion.h3>
              {data.professionalSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage}
                  variants={item}
                />
              ))}
            </div>
            <a 
            href={CV} 
            download 
            className="inline-block bg-gray-dark text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-black transition-colors"
          >
            Download my resume
          </a>
          </motion.div>
          
        </motion.div>

        {/* Télécharger CV */}
        
      </div>
    </section>
  )
}

export default Resume
