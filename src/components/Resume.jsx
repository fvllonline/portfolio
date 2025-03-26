"use client"

const ResumeItem = ({ title, organization, period, description }) => {
  return (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-dark">
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gray-dark transform -translate-x-1.5"></div>
      <h3 className="text-xl font-bold mb-1 text-black">{title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-black/80">{organization}</span>
        <span className="text-sm text-black/60">({period})</span>
      </div>
      <p className="text-black/70">{description}</p>
    </div>
  )
}

const SkillBar = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-black">{name}</span>
        <span className="text-black/80">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-dark/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-dark rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const Resume = ({ data }) => {
  return (
    <section id="resume" className="py-16 md:py-24 bg-beige-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">My Resume</h2>
          <p className="text-xl font-medium text-gray-dark/80">2+ YEARS OF EXPERIENCE</p>
          <div className="w-20 h-1 bg-gray-dark mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-10 bg-white p-8 rounded-lg shadow-sm">
            <div>
              <h3 className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black">
                Education
              </h3>
              {data.education.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.degree}
                  organization={item.institution}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black">
                Experience
              </h3>
              {data.experience.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.position}
                  organization={item.company}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10 bg-white p-8 rounded-lg shadow-sm">
            <div>
              <h3 className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black">
                Technical Skills
              </h3>
              {data.softwareSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 inline-block border-b-2 border-black pb-2 text-black">
                Professional Skills
              </h3>
              {data.professionalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <button 
          onClick={() => window.open("https://www.linkedin.com/in/nawfal-addaoui-40b651248/", "_blank")}

          className="
            px-8 py-3 
            bg-gray-dark text-beige-light 
            rounded-md 
            hover:bg-gray-dark/90 
            transition-colors
            border-2 border-gray-dark
            hover:text-beige-light
          ">
            View LinkedIn Profile
          </button>
        </div>
      </div>
    </section>
  )
}

export default Resume