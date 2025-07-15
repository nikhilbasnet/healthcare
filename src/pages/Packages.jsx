import React from "react";
import { HeartPulse, Stethoscope, Baby, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Basic Health Checkup",
    icon: Stethoscope,
    price: "Rs. 999",
    features: ["Blood Test", "BP Check", "Cholesterol", "Diabetes Test"],
  },
  {
    name: "Cardiac Package",
    icon: HeartPulse,
    price: "Rs. 1499",
    features: ["ECG", "Cholesterol", "Blood Pressure", "Consultation"],
  },
  {
    name: "Child Care Package",
    icon: Baby,
    price: "Rs. 1199",
    features: ["Vaccination", "Growth Check", "General Test", "Doctor Advice"],
  },
  {
    name: "COVID-19 PCR Test",
    icon: ShieldCheck,
    price: "Rs. 799",
    features: ["PCR Test", "Report within 24hr", "MOHP Verified Lab"],
  },
];

export default function Packages() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
        Health Packages
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <pkg.icon className="w-8 h-8 text-teal-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                {pkg.name}
              </h2>
            </div>
            <ul className="text-sm text-gray-600 mb-4 list-disc ml-5 space-y-1">
              {pkg.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <div className="text-lg font-bold text-gray-800 mb-2">
              {pkg.price}
            </div>
            <Link
              to="/book"
              className="inline-block bg-teal-600 text-white text-sm px-4 py-2 rounded hover:bg-teal-700"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
