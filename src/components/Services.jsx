import {
  FaCode,
  FaMobileAlt,
  FaPencilAlt,
  FaSearch,
  FaWordpress,
  FaLayerGroup,
  FaChartBar,
  FaServer,
  FaDatabase,
  FaPalette
} from "react-icons/fa"

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="
      bg-gray-dark 
      p-6 rounded-lg 
      shadow-lg hover:shadow-xl 
      transition-all duration-300
      group
      border border-beige-light/10
      hover:border-beige-light/30
      h-full flex flex-col
    ">
      {/* Icône */}
      <div className="
        w-14 h-14 
        bg-beige-light/10 
        rounded-lg 
        flex items-center justify-center 
        mb-5 
        group-hover:bg-beige-light
        transition-colors duration-500
      ">
        <Icon className="
          text-beige-light 
          group-hover:text-gray-dark 
          transition-colors duration-300
        " size={24} />
      </div>
      
      {/* Contenu */}
      <h3 className="text-xl font-bold mb-3 text-beige-light">{title}</h3>
      <p className="text-beige-light/80 flex-grow">{description}</p>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, accessible interfaces with React, Tailwind CSS and modern JavaScript",
      icon: FaCode
    },
    {
      title: "Backend Development",
      description: "Building robust APIs and server logic with Laravel and PHP",
      icon: FaServer
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native",
      icon: FaMobileAlt
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user experiences with attention to detail",
      icon: FaPalette
    },
    {
      title: "WordPress Development",
      description: "Custom themes and plugins for powerful CMS solutions",
      icon: FaWordpress
    },
    {
      title: "Desktop Applications",
      description: "Building performant Windows apps with C# and Java",
      icon: FaLayerGroup
    },
    {
      title: "Database Design",
      description: "Structuring efficient data models for optimal performance",
      icon: FaDatabase
    },
    {
      title: "Technical Consulting",
      description: "Strategic guidance for your digital projects",
      icon: FaChartBar
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">
            My Services
          </h2>
          <p className="text-xl font-medium text-gray-dark/60">
            FULL-STACK SOLUTIONS
          </p>
          <div className="w-20 h-1 bg-gray-dark mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services