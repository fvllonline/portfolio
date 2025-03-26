import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Colonne Adresse */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-beige-light">Address</h3>
            <p className="mb-4 text-gray-300">{data.address}</p>
            <p className="mb-4 text-gray-300">{data.phone}</p>
            <p className="mb-4 text-gray-300">{data.email}</p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/share/1A4qvX2pKx/?mibextid=wwXIfr"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beige-light hover:text-black transition-colors text-gray-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/fvllonline?igsh=dnExYWRtOGo1cDQ4"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beige-light hover:text-black transition-colors text-gray-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/nawfal-addaoui-40b651248/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beige-light hover:text-black transition-colors text-gray-300"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://github.com/fvllonline"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beige-light hover:text-black transition-colors text-gray-300"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Colonne Liens */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-beige-light">Explore Links</h3>
            <ul className="space-y-3">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-300 hover:text-beige-light transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-beige-light">My Services</h3>
            <ul className="space-y-3">
              {data.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-beige-light transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Nawfal ADDAOUI. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer