import React from "react";
import {
  Stethoscope,
  Baby,
  Smile,
  PhoneCall,
  ShieldCheck,
  Clock,
  Video,
  HeartHandshake,
} from "lucide-react";

export default function Consultation() {
  const services = [
    { icon: Stethoscope, label: "General Physician" },
    { icon: Baby, label: "Pediatrics" },
    { icon: Smile, label: "Dermatology" },
    { icon: HeartHandshake, label: "Psychiatry" },
  ];

  const features = [
    {
      icon: Video,
      title: "Video/Audio Consultation",
      desc: "Choose your preferred mode and consult doctors from home.",
    },
    {
      icon: PhoneCall,
      title: "Talk to Verified Doctors",
      desc: "All doctors are certified and experienced healthcare professionals.",
    },
    {
      icon: Clock,
      title: "Instant Booking",
      desc: "Book consultation slots instantly with flexible timing.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Confidential",
      desc: "Your health data is encrypted and never shared.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-700 text-center mb-8">
        Online Consultation
      </h1>

      {/* Section: Specialities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Choose a Specialist
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, label }, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg transition p-5 rounded-lg text-center flex flex-col items-center"
            >
              <Icon className="w-10 h-10 text-teal-600 mb-2" />
              <span className="font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Consult with Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6"
            >
              <Icon className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Start Your Consultation Now
        </h2>
        <p className="text-gray-600 mb-6">
          Get expert medical advice from the comfort of your home.
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow">
          Book Consultation
        </button>
      </section>
    </div>
  );
}
