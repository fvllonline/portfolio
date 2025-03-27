import { motion, useAnimation, useInView } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef } from "react";

// Configuration des animations
const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.5
      }
    }
  },
  progressBar: (percentage) => ({
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: { 
        duration: 1.5, 
        ease: "easeOut", 
        delay: 0.5 
      }
    }
  }),
  hover: {
    scale: 1.03,
    y: -5
  },
  fromLeft: {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring" }
    }
  },
  fromRight: {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring" }
    }
  }
};

const About = ({ data }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-beige-light overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header avec effet de scroll */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={ANIMATION_CONFIG.container}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-dark mb-4"
            variants={ANIMATION_CONFIG.item}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gray-dark mx-auto"
            variants={ANIMATION_CONFIG.item}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche avec effet de scroll */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={ANIMATION_CONFIG.fromLeft}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-dark mb-6"
              variants={ANIMATION_CONFIG.item}
            >
              {data.heading}
            </motion.h3>
            
            <motion.p 
              className="text-gray-dark/80 mb-8"
              variants={ANIMATION_CONFIG.item}
            >
              {data.description}
            </motion.p>

            {/* Statistiques */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={ANIMATION_CONFIG.container}
            >
              {data.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={ANIMATION_CONFIG.item}
                  whileHover={ANIMATION_CONFIG.hover}
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <motion.h4 
                    className="text-3xl font-bold text-gray-dark mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.h4>
                  <p className="text-gray-dark/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Liste de Features */}
            <motion.div 
              className="space-y-3"
              variants={ANIMATION_CONFIG.container}
            >
              {data.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={ANIMATION_CONFIG.item}
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                    <FaCheckCircle className="text-gray-dark flex-shrink-0 mt-1" size={18} />
                  </motion.div>
                  <p className="text-gray-dark/90">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Colonne droite avec effet de scroll */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md border border-beige-light/30 relative"
            initial="hidden"
            animate={controls}
            variants={ANIMATION_CONFIG.fromRight}
          >
            <motion.div 
              className="space-y-6"
              variants={ANIMATION_CONFIG.container}
            >
              {data.skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={ANIMATION_CONFIG.item}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-dark">{skill.name}</span>
                    <span className="text-gray-dark/80">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-dark/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gray-dark rounded-full"
                      variants={ANIMATION_CONFIG.progressBar(skill.percentage)}
                      initial="hidden"
                      animate={controls}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Effet décoratif */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-beige-light/30 rounded-full"
              initial={{ scale: 0 }}
              animate={controls}
              custom={1}
              variants={{
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: { 
                    delay: 1, 
                    type: "spring" 
                  }
                }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;