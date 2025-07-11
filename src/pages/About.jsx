import React from "react";
import {
  Target,
  Users,
  ClipboardList,
  HeartHandshake,
  Users2,
  Eye,
  CalendarCheck,
} from "lucide-react";

export default function About() {
  const sections = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "At HamroDoctor, our mission is to make quality healthcare accessible, affordable, and convenient for everyone in Nepal. We believe that every individual deserves timely medical support, no matter where they are. Our platform bridges the gap between patients and trusted medical professionals by providing a seamless online experience.",
    },
    {
      icon: Users,
      title: "Who We Are",
      content:
        "Founded in 2023, HamroDoctor is Nepal’s largest network of verified doctors, specialists, and healthcare providers. Our team includes medical experts, software engineers, and customer support professionals who are passionate about transforming the healthcare landscape. We leverage modern technology and data security standards to ensure a safe, reliable platform for both patients and doctors. With a wide range of services—from online consultations and appointment bookings to health packages and wellness tips—HamroDoctor empowers users to take charge of their health.",
    },
    {
      icon: ClipboardList,
      title: "What We Offer",
      content:
        "Online Consultation, Book Appointments, Health Packages, Health Articles & Tips, and a Trusted Network of verified doctors and specialists. Our services are designed to give you convenient and reliable access to quality healthcare.",
    },
    {
      icon: HeartHandshake,
      title: "Our Values",
      content:
        "Patient-centered care, accessibility, innovation, privacy & security, and collaboration are at the core of everything we do. We operate with integrity, transparency, and respect for every individual’s health journey.",
    },
    {
      icon: Users2,
      title: "Meet the Team",
      content:
        "Our dedicated team combines years of experience in healthcare, technology, and customer service. Meet Dr. Suman Thapa (Chief Medical Officer), Ashish Sharma (CEO & Founder), Pratima Karki (Head of Customer Support), Ramesh Singh (Lead Software Engineer), and Sita Gurung (Marketing Manager).",
    },
    {
      icon: Eye,
      title: "Our Vision for the Future",
      content:
        "We aim to become Nepal’s most trusted healthcare partner by expanding our network, adding new services, and empowering individuals with digital health tools. A future where every Nepalese can access expert medical care from the comfort of their home.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-teal-700 text-center mb-10">
        About HamroDoctor
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.map(({ icon: Icon, title, content }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Icon className="w-10 h-10 text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            </div>
            <p className="text-gray-700 flex-1 leading-relaxed">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
