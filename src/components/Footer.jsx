// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white p-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold">HamroDoctor</h4>
          <p>Providing trusted healthcare information and services in Nepal.</p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p>Phone: +977‑1‑1234567</p>
          <p>Email: support@hamrodoctor.com</p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-300">
        © 2025 HamroDoctor. All rights reserved.
      </div>
    </footer>
  );
}
