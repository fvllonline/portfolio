import { FaCheckCircle } from "react-icons/fa"

const About = ({ data }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-beige-light">
      <div className="container mx-auto px-4">
        {/* Section Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-dark mx-auto"></div>
        </div>

        {/* Contenu Principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne Gauche */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-dark mb-6">{data.heading}</h3>
            <p className="text-gray-dark/80 mb-8">{data.description}</p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {data.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-3xl font-bold text-gray-dark mb-2">{stat.value}</h4>
                  <p className="text-gray-dark/70">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Liste de Features */}
            <div className="space-y-3">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-gray-dark flex-shrink-0 mt-1" size={18} />
                  <p className="text-gray-dark/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne Droite - Compétences */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-beige-light/30">
            <div className="space-y-6">
              {data.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-dark">{skill.name}</span>
                    <span className="text-gray-dark/80">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-dark/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-dark rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.percentage}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About