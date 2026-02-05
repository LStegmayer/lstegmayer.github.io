import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path)
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Luke Stegmayer
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className={linkClass('/')}>
              Home
            </Link>
            {/* Projects link hidden for now
            <Link to="/projects" className={linkClass('/projects')}>
              Projects
            </Link>
            */}
            <Link to="/resume" className={linkClass('/resume')}>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
