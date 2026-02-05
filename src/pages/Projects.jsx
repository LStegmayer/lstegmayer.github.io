function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Unpro Camera',
      description:
        'My current baby. A camera app that uses various custom processing techniques to produce photos that \
        look natural, like what you see with your eyes.',
      technologies: ['Swift', 'SwiftUI', 'Core Image'],
      github: 'https://github.com/yourusername/project-one',
      demo: 'https://project-one-demo.com',
    },
    {
      id: 2,
      title: 'Project Two',
      description:
        'A description of your second project. Highlight the key features and your role in developing it.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project-two',
      demo: null,
    },
    {
      id: 3,
      title: 'Project Three',
      description:
        'A description of your third project. Mention any challenges you overcame and lessons learned.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project-three',
      demo: 'https://project-three-demo.com',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          My Projects
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a
          unique challenge and learning experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-32 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
