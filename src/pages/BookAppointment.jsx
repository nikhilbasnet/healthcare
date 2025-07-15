import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";  
import {
  CalendarDays,
  User,
  Phone,
  Mail,
  ClipboardList,
  Stethoscope,
  MessageSquare,
} from "lucide-react";

export default function BookAppointment() {
  /* -------------------------------------------------
     1) Grab passed specialty from navigation state
  ------------------------------------------------- */
  const location = useLocation();
  const preselectedDept = location.state?.specialty || "";

  /* -------------------------------------------------
     2) Form state — initialize department with preselected
  ------------------------------------------------- */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: preselectedDept,
    doctor: "",
    symptoms: "",
    date: "",
  });

  /* -------------------------------------------------
     3) Options
  ------------------------------------------------- */
  const departments = ["General Physician", "Cardiology", "Pediatrics", "Dermatology","Orthopedic"];
  const doctors = {
    "General Physician": ["Dr. Sita Sharma", "Dr. Raj Thapa"],
    Cardiology: ["Dr. Aayush Shrestha", "Dr. Anil Rana"],
    Pediatrics: ["Dr. Kriti Rana", "Dr. Milan Khadka"],
    Dermatology: ["Dr. Suman Lama", "Dr. Asha Singh"],
    Orthopedic: ["Dr. Nisha Singh", "Dr. Sandy Smith"],
  };

  /* -------------------------------------------------
     4) Reset doctor field if department changes
  ------------------------------------------------- */
  useEffect(() => {
  if (preselectedDept && doctors[preselectedDept]) {
    setForm((prev) => ({
      ...prev,
      department: preselectedDept,
      doctor: doctors[preselectedDept][0], // Auto-select first doctor
    }));
  }
}, [preselectedDept]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked!\n\nDept: ${form.department}\nDoctor: ${form.doctor || "TBD"}`
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-700 text-center mb-8">
        Book an Appointment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <User className="w-5 h-5 text-teal-600" /> Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <Mail className="w-5 h-5 text-teal-600" /> Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <Phone className="w-5 h-5 text-teal-600" /> Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+977-98XXXXXXXX"
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Department */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <ClipboardList className="w-5 h-5 text-teal-600" /> Department
          </label>
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded bg-white"
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <Stethoscope className="w-5 h-5 text-teal-600" /> Select Doctor
          </label>
          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded bg-white"
            disabled={!form.department}
          >
            <option value="">Select Doctor</option>
            {(doctors[form.department] || []).map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>
        </div>

        {/* Symptoms */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <MessageSquare className="w-5 h-5 text-teal-600" /> Symptoms
          </label>
          <textarea
            name="symptoms"
            rows="3"
            value={form.symptoms}
            onChange={handleChange}
            placeholder="Describe your symptoms..."
            className="w-full border border-gray-300 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Date */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <CalendarDays className="w-5 h-5 text-teal-600" /> Appointment Date
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded shadow"
          >
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
