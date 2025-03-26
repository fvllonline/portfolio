import { FaArrowRight } from "react-icons/fa"

const BlogCard = ({ image, date, title, excerpt, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href={link} className="inline-flex items-center text-primary font-medium hover:underline">
          Read More <FaArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </div>
  )
}

const Blog = ({ data }) => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Blog</h2>
          <p className="text-xl font-medium text-primary">LATEST BLOG</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

