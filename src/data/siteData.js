import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const siteData = {
  hero: {
    subtitle: "I'M A FULL STACK WEB DEVELOPER",
    title: "Building Modern",  
    highlightedText: "Web Solutions",  
    description:
      "Passionate about web technologies, I constantly explore new solutions to create efficient and intuitive applications.",
  },

  about: {
    heading: "Full Stack Web Developer: Bridging Frontend Elegance & Backend Power",
    description:
      "I deliver full-cycle web development - from UI/UX design to API development and database optimization. My solutions are built for real users, with attention to performance, security, and seamless functionality across all devices.",
    stats: [
      { value: "10+", label: "Complete Project" },
      { value: "2+", label: "Year of experience" },
    ],
    features: [
      "Work simple and clean design",
      "Web Design Full stack",
      "New idea and user friendly design",
      "Unlimited Revisions",
    ],
    skills: [
      // Frontend
      { name: "JavaScript (ES6+)", percentage: 95 },
      { name: "React.js", percentage: 90 },
      { name: "PHP", percentage: 90 },
      { name: "Laravel", percentage: 85 },
      { name: "C# (.NET)", percentage: 75 },
      { name: "Java", percentage: 70 },
      { name: "Python", percentage: 88 },
    ],
  },

  services: [
    {
      title: "UI/UX Design",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      title: "Mobile App",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      title: "Graphic Design",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      title: "Web Developer",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      title: "SEO Optimisation",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      title: "WordPress Developer",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      title: "App Development",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      title: "Business Strategy",
      description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
  ],

  resume: {
    education: [
      {
        degree: "Technician specialized in IT development",
        institution: "IFIAG vocational school Casablanca",
        period: "2023 - 2025",
        description: "Hands-on programming in web and desktop technologies.",
      },
      {
        degree: "Personal and professional coaching training",
        institution: "IFIAG vocational school Casablanca",
        period: "2023 - 2025",
        description: "Life coaching methods for career optimization.",
      },
      {
        degree: "Training in artificial intelligence.",
        institution: "IFIAG vocational school Casablanca",
        period: "2024",
        description: "Machine learning fundamentals.",
      },
      {
        degree: "Baccalaureate in physical sciences - French option",
        institution: "Lycée Al Baroudi Casablanca",
        period: "2021 - 2022",
        description: "Scientific baccalaureate with advanced mathematics/physics training.",
      },
    ],
    experience: [
      {
        position: "Backend Web Developer",
        company: "M-B Way",
        period: "2024 - present",
        description: "As an intern, I developed the backend of the 'QuickStay' web application. I also designed the app's logo and created its brand identity.",
      },
      {
        position: "Desktop Developer",
        company: "IFIAG vocational school",
        period: "2024 - 2025",
        description: "I developed a desktop application for university management using C# (.NET).",
      },
      {
        position: "Full Stack Web Developer",
        company: "M-B Way & Abdelwahed EL KADIRI Foundation", 
        period: "2024",
        description: "Participation in the 'Your Idea, Our Future' Hackathon with the project: 'QUICK STAY'.",
      },
      {
        position: "UI/UX Designer",
        company: "IFIAG vocational school",
        period: "2023 - 2024",
        description: "Final year project defense (Website redevelopment) about the company ‘PATEK PHILIPPE’.",
      },
    ],
    softwareSkills: [
      { name: "Visual Studio Code", percentage: 90 },
      { name: "Visual Studio 2019", percentage: 77 },
      { name: "IntelliJ Idea", percentage: 80 },
      { name: "MySQL Server", percentage: 86 },
      { name: "Adobe Photoshop", percentage: 75 },
      { name: "Microsoft Office", percentage: 90 },
    ],
    professionalSkills: [
      { name: "Frontend Web", percentage: 90 },
      { name: "Backend Web", percentage: 85 },
      { name: "Mobile", percentage: 80 },
      { name: "WordPress", percentage: 82 },
    ],
  },

  portfolio: [
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Website Redesign",
      category: "Web Design",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Brand Identity",
      category: "Branding Design",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Product Packaging",
      category: "Graphic Design",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Mobile Game UI",
      category: "App Development",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "E-commerce Website",
      category: "Web Design",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ],

  testimonials: [
    {
      name: "Robert E. Wolf",
      position: "Director, Techso",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "John K. Meraz",
      position: "CTO, Xyz Group",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Johnson",
      position: "CEO, ABC Inc",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],

  blog: [
    {
      title: "Become a UX/UI Designer With Career Foundry",
      date: "20 January, 2023",
      excerpt: "Learn how to become a successful UX/UI designer with the right training and mindset.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "The Best App Development For Your Business Plan",
      date: "15 January, 2023",
      excerpt: "Discover the most effective app development strategies to boost your business growth.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "The Best Portfolio For Agency Design Thinking",
      date: "08 January, 2023",
      excerpt: "How to create a portfolio that showcases your design thinking and problem-solving skills.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
  ],

  contact: {
    address: "202 Dog Hill Lane Beloit, KS 67420",
    phone: "+01589634755",
    email: "yourname@example.com",
    description:
      "At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati.",
    socialLinks: [
      { name: "Facebook", icon: <FaFacebookF size={18} />, link: "#" },
      { name: "Twitter", icon: <FaTwitter size={18} />, link: "#" },
      { name: "Instagram", icon: <FaInstagram size={18} />, link: "#" },
      { name: "LinkedIn", icon: <FaLinkedinIn size={18} />, link: "#" },
    ],
  },

  footer: {
    address: "Morocco, Casablanca",
    phone: "+212 631-108355",
    email: "Naoufaladdaoui@gmail.com",
    links: [
      { text: "About", url: "#about" },
      { text: "Resume", url: "#resume" },
      { text: "Portfolio", url: "#portfolio" },
      { text: "My Certifications", url: "#certifications" },
    ],
    services: ["Frontend Devlopment", "Backend Devlopment" , "Mobile Devlopment" ,  "UI/UX Design"],
  },
}

export default siteData

