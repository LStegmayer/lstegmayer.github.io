import mePhoto from '../assets/me.jpeg'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-2">I'm Luke Stegmayer.</h1>
          <p className="text-xl text-blue-100 mb-6">
            Software Engineer, App Developer, Artist
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#/resume"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Resume
            </a>
            <a
              href="https://github.com/lstegmayer"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img
              src={mePhoto}
              alt="Luke Stegmayer"
              className="rounded-lg shadow-md w-full max-w-xs max-h-90 mx-auto object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                About Me
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to my personal website! I'm a software developer
                who's passionate about using creative approaches solve complex
                problems, or grinding away at CRUD apps, whichever gets me hired.
              </p>
              <p className="text-gray-600 mb-4">
                For me, coding is as much a way to fill artistic vacuums as it is 
                a way to build practical solutions. While I learned the ropes of software 
                development the traditional way, I've embraced coding agents now, too.
              </p>
              <p className="text-gray-600">
                I hope you see something here that interests you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-5 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Web Dev</h3>
              <p className="text-gray-600">
                I've worked as part of teams to build dynamic websites based on Next.js, React, 
                and similar frameworks. This website is built using React and Tailwind.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Backend Work</h3>
              <p className="text-gray-600">
                I'm skilled enough with Java to work with/bugfix/add features to existing backends, 
                and I'm experienced with creating robust APIs and optimizing data queries.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-gray-600">
                I've traveled the independent route, learning to manage an app from concept to 
                development, marketing, business management, and maintenance as a one-man company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
