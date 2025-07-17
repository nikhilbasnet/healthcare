import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can also use Heroicons or SVG

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-600">
          <Link to="/" onClick={closeMenu}>DHS</Link>
        </h1>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-teal-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLinks onClick={closeMenu} />
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col items-center bg-gray-50 py-4 rounded shadow">
          <NavLinks onClick={closeMenu} mobile />
        </div>
      )}
    </header>
  );
}

function NavLinks({ onClick, mobile }) {
  const linkClass = `text-gray-700 hover:text-teal-600 ${mobile ? "block w-full text-center py-2" : ""}`;
  
  return (
    <>
      <Link to="/consult" className={linkClass} onClick={onClick}>
        Consult Now
      </Link>
      <Link to="/book" className={linkClass} onClick={onClick}>
        Book Appointment
      </Link>
      <Link to="/packages" className={linkClass} onClick={onClick}>
        Health Packages
      </Link>
      <Link to="/ask" className={linkClass} onClick={onClick}>
        Ask Question
      </Link>
      <Link to="/find" className={linkClass} onClick={onClick}>
        Find a Doctor
      </Link>
      <Link to="/login" onClick={onClick}>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition">
          Login
        </button>
      </Link>
    </>
  );
}
