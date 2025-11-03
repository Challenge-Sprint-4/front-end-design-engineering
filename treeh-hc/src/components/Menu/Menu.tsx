import { useState } from "react";
import { Link } from "react-router-dom";
import LogoTRH from '../../assets/logo-threeh.png'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md relative w-full">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 relative">
        <Link to="/" className="text-2xl font-bold z-10">
          <img src={LogoTRH} alt="Logo da equipe do projeto" className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28"/>
        </Link>
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-3">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <span className="text-gray-400">|</span>
          <Link to="/Contato" className="hover:text-blue-500 transition-colors">Contato</Link>
          <span className="text-gray-400">|</span>
          <Link to="/Faq" className="hover:text-blue-500 transition-colors">FAQ</Link>
          <span className="text-gray-400">|</span>
          <Link to="/Equipe" className="hover:text-blue-500 transition-colors">Equipe</Link>
          <span className="text-gray-400">|</span>
          <Link to="/Tutorial" className="hover:text-blue-500 transition-colors">Tutorial</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-md">
          <Link to="/" className="block px-6 py-3 hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Contato" className="block px-6 py-3 hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(false)}>Contato</Link>
          <Link to="/Faq" className="block px-6 py-3 hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/Equipe" className="block px-6 py-3 hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(false)}>Equipe</Link>
          <Link to="/Tutorial" className="block px-6 py-3 hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(false)}>Tutorial</Link>
        </div>
      )}
    </header>
  )
}
