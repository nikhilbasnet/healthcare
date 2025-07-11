// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-teal-600">
        <Link to="/">HamroDoctor</Link>
      </h1>
      <nav className="space-x-6 hidden md:flex">
        <Link to="/consult" className="text-gray-700 hover:text-teal-600">
          Consult Now
        </Link>
        <Link to="/book" className="text-gray-700 hover:text-teal-600">
          Book Appointment
        </Link>
        <Link to="/packages" className="text-gray-700 hover:text-teal-600">
          Health Packages
        </Link>
        <Link to="/ask" className="text-gray-700 hover:text-teal-600">
          Ask Question
        </Link>
        <button className="bg-teal-600 text-white px-4 py-2 rounded">Login</button>
      </nav>
    </header>
  );
}
