import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-yellow-50 min-h-screen">
      
      <nav className="text-sm text-gray-600 mb-6">
        Home &gt; <span className="font-semibold">Contact Us</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Info */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold text-teal-900 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-xl leading-relaxed">
            Hamro Doctor is the{" "}
            <strong>First Online Healthcare Service Provider</strong> from Ascol where patients
            can consult certified medical personnel and get additional{" "}
            <strong>health related</strong> services along with other information related to health
            online.
          </p>

          <div>
            <h2 className="text-xl font-bold text-teal-900 mb-4">Contact Info</h2>

            <div className="flex items-start space-x-3 mb-3">
              <MapPin className="w-6 h-6 text-teal-600 mt-1" />
              <div className="text-gray-700">
                <p className="font-semibold">Address</p>
                <p>Lazimpath, Kathmandu Nepal</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 mb-3">
              <Phone className="w-6 h-6 text-teal-600 mt-1" />
              <div className="text-gray-700">
                <p className="font-semibold">Phone Number</p>
                <p>+977-1234567890 / +977-9876543210</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 mb-3">
              <Mail className="w-6 h-6 text-teal-600 mt-1" />
              <div className="text-gray-700">
                <p className="font-semibold">Email Address</p>
                <p>info@hamrodoctor.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="flex-1 bg-white p-6 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-teal-900 mb-6">Contact Us</h2>

          <label className="block mb-3">
            <span className="text-gray-700 font-semibold mb-1 block">
              Your Full Name
            </span>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-semibold mb-1 block">
              Email Address
            </span>
            <input
              type="email"
              placeholder="email"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-semibold mb-1 block">Subject</span>
            <input
              type="text"
              placeholder="Some subject"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 font-semibold mb-1 block">Message</span>
            <textarea
              rows={5}
              placeholder="This is your message here."
              className="w-full border border-gray-300 rounded p-2 resize-y focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </label>

          {/* Placeholder for reCAPTCHA */}
          <div className="mb-4">
            {/* Integrate Google reCAPTCHA here */}
            <div className="bg-gray-100 border border-gray-300 rounded p-4 text-center text-gray-500 text-sm">
              reCAPTCHA placeholder
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded hover:bg-teal-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
