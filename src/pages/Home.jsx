import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Video,
  Package as PackageIcon,
  UserCheck,
  Database,
  Headphones,
  ShieldCheck,
  Users,
  Heart,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Search Bar */}
      <div className="p-4 bg-gray-50 flex justify-center">
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search doctors, services, packages..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-50 p-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Your Health, Our Priority
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Book Appointment", icon: Calendar, path: "/book" },
            { label: "Online Consultation", icon: Video, path: "/consult" },
            { label: "Health Packages", icon: PackageIcon, path: "/packages" },
            { label: "Find a Doctor", icon: UserCheck, path: "/" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="bg-white p-4 rounded shadow hover:shadow-lg flex flex-col items-center"
            >
              <item.icon className="w-6 h-6 mb-2 text-teal-600" />
              <span className="text-teal-600 font-semibold">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Popular Health Packages
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Bone & Joint", icon: UserCheck },
            { label: "Cardiac Care", icon: Heart },
            { label: "Child Health", icon: Users },
            { label: "COVID‑19 PCR", icon: ShieldCheck },
          ].map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded shadow p-4 hover:shadow-md"
            >
              <div className="flex items-center font-semibold text-teal-700">
                <pkg.icon className="w-5 h-5 text-teal-600 mr-2" />
                {pkg.label}
              </div>
              <button className="mt-2 text-sm text-teal-600 underline">
                View Packages
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - merged card */}
      <section className="bg-gray-100 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-700 mb-4">
            HamroDoctor offers Nepal’s largest network of verified medical
            professionals, responsive customer support, industry‑grade security,
            and the trust of thousands. Enjoy a secure, smooth, and reliable
            healthcare experience at your fingertips.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-teal-600 mr-2" /> Enormous Database
            </div>
            <div className="flex items-center">
              <Headphones className="w-5 h-5 text-teal-600 mr-2" /> Excellent Support
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-teal-600 mr-2" /> Safe &amp; Secure
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-teal-600 mr-2" /> Trusted by Thousands
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
