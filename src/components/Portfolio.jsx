"use client"

import { FaExternalLinkAlt, FaAward } from "react-icons/fa"
import ciscologo from "../assets/ciscologo.jpg"
import tcflogo from "../assets/tcflogo.jpg"

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">My Certifications</h2>
          <p className="text-xl font-medium text-gray-dark/60">PROFESSIONAL QUALIFICATIONS</p>
          <div className="w-20 h-1 bg-gray-dark mx-auto mt-4"></div>
        </div>

        {/* Grille de certifications - Chaque carte est indépendante */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Carte 1 - TCF B2 */}
          <div className="group relative overflow-hidden rounded-lg border border-beige-light/30 bg-beige-light shadow-sm hover:shadow-md transition-all h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-full text-gray-dark">
                  <FaAward size={20} />
                </div>
                <span className="text-sm font-medium text-gray-dark/80">France Éducation International</span>
              </div>

              <div className="flex-grow flex items-center justify-center mb-4">
                {/* Remplacez par votre image */}
                <img
                  src={tcflogo}
                  alt="TCF French B2 Certificate"
                  className="max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-lg text-center font-bold text-gray-dark mb-1">TCF French B2</h3>
                
                <a
                  href="https://www.france-education-international.fr/article/comprendre-mes-resultats-au-tcf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-gray-dark text-white px-4 py-2 rounded-full hover:bg-gray-dark/90 transition-colors w-full justify-center"
                >
                  View Credential <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Carte 2 - JS Essentials 1 */}
          <div className="group relative overflow-hidden rounded-lg border border-beige-light/30 bg-beige-light shadow-sm hover:shadow-md transition-all h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-full text-gray-dark">
                  <FaAward size={20} />
                </div>
                <span className="text-sm font-medium text-gray-dark/80">Cisco Networking Academy</span>
              </div>

              <div className="flex-grow flex items-center justify-center mb-4">
                <img
                  src={ciscologo}
                  alt="JavaScript Essentials 1 Certificate"
                  className="max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-lg text-center font-bold text-gray-dark mb-1">JavaScript Essentials 1</h3>
                
                <a
                  href="https://www.credly.com/badges/fecacadf-dc61-441e-93ce-71218866c122/print"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-gray-dark text-white px-4 py-2 rounded-full hover:bg-gray-dark/90 transition-colors w-full justify-center"
                >
                  View Credential <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Carte 3 - JS Essentials 2 */}
          <div className="group relative overflow-hidden rounded-lg border border-beige-light/30 bg-beige-light shadow-sm hover:shadow-md transition-all h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-full text-gray-dark">
                  <FaAward size={20} />
                </div>
                <span className="text-sm font-medium text-gray-dark/80">Cisco Networking Academy</span>
              </div>

              <div className="flex-grow flex items-center justify-center mb-4">
                <img
                  src={ciscologo}
                  alt="JavaScript Essentials 2 Certificate"
                  className="max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-lg text-center font-bold text-gray-dark mb-1">JavaScript Essentials 2</h3>
                
                <a
                  href="https://www.credly.com/badges/4acf73b6-845b-4477-b272-b25af6ea61c9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-gray-dark text-white px-4 py-2 rounded-full hover:bg-gray-dark/90 transition-colors w-full justify-center"
                >
                  View Credential <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Carte 4 - Python Essentials 1 */}
          <div className="group relative overflow-hidden rounded-lg border border-beige-light/30 bg-beige-light shadow-sm hover:shadow-md transition-all h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-full text-gray-dark">
                  <FaAward size={20} />
                </div>
                <span className="text-sm font-medium text-gray-dark/80">Cisco Networking Academy</span>
              </div>

              <div className="flex-grow flex items-center justify-center mb-4">
                <img
                  src={ciscologo}
                  alt="Python Essentials 1 Certificate"
                  className="max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-lg text-center font-bold text-gray-dark mb-1">Python Essentials 1</h3>
                
                <a
                  href="https://www.credly.com/badges/8a3516bb-28b8-409c-9d68-e1102074a10e/print"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-gray-dark text-white px-4 py-2 rounded-full hover:bg-gray-dark/90 transition-colors w-full justify-center"
                >
                  View Credential <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Carte 5 - Python Essentials 2 */}
          <div className="group relative overflow-hidden rounded-lg border border-beige-light/30 bg-beige-light shadow-sm hover:shadow-md transition-all h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-full text-gray-dark">
                  <FaAward size={20} />
                </div>
                <span className="text-sm font-medium text-gray-dark/80">Cisco Networking Academy</span>
              </div>

              <div className="flex-grow flex items-center justify-center mb-4">
                <img
                  src={ciscologo}
                  alt="Python Essentials 2 Certificate"
                  className="max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-lg text-center font-bold text-gray-dark mb-1">Python Essentials 2</h3>
                
                <a
                  href="https://www.credly.com/badges/c7c19e42-e87d-4f43-a068-e729d103945c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-gray-dark text-white px-4 py-2 rounded-full hover:bg-gray-dark/90 transition-colors w-full justify-center"
                >
                  View Credential <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Certifications