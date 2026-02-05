function Resume() {
  const experience = [
    {
      id: 1,
      title: 'Independent Developer',
      company: 'Uncorrelated Contents LLC, Portland, Oregon',
      period: 'Nov 2023 - Present',
      description: [
        'Designed and developed Unpro Camera, a commercial iOS app with >5,700 downloads and $1,300 in revenue.',
        'Built app from concept through release, including handling marketing, creating an LLC, programming, designing assets, handling customer feedback, and continued updates.',
        'Learned Swift and SwiftUI, began leveraging Claude Code as part of development.',
      ],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'General Motors IT Innovation Center, Chandler, Arizona',
      period: 'April 2022 - Oct 2023',
      description: [
        'Developed customer-facing websites using Next.js for dynamic, performant user experiences, collaborating with a team distributed across the country.',
        'Did data analysis using Azure SQL, Python and Pandas to inform business decisions regarding the Vehicle-to-Grid (V2G) program.',
        'Position ended due to site closure.',
      ],
    },
    {
      id: 3,
      title: 'Programming Intern',
      company: 'Alta Cima Corp, Tempe, Arizona',
      period: '2020 - 2021',
      description: [
        'Worked on websites for corporate clients using React.',
        'Automated some data update tasks with Python.',
        'Contributed to backend development using Java.',
      ],
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Bachelor's in Computer Science",
      school: 'Arizona State University, Tempe, Arizona',
      period: '2017 - 2021',
      details: '',
    },
  ]

  const skills = {
    'Languages': ['JavaScript', 'TypeScript', 'Swift', 'Python', 'Java', 'SQL'],
    'Frameworks': ['React', 'Next.js', 'SwiftUI', 'Pandas'],
    'AI-Assisted Development': ['Claude Code', 'Gemini'],
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Luke Stegmayer</h1>
          <p className="text-gray-500 mb-4">
            Portland, Oregon |{' '}
            <a
              href="https://www.linkedin.com/in/luke-stegmayer-9b9360180"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm a software engineer with experience across the full stack, particularly React and Next.js for frontends and Java on backend, as well as iOS app development.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Download PDF
          </a>
        </div>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-1 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-1 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                {edu.details && <p className="text-gray-600 mt-2">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Skills
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
