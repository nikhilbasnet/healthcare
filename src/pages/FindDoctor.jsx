import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import { Search, MapPin, Stethoscope, Phone } from "lucide-react";

const doctors = [
  {
    name: "Dr. Aayush Shrestha",
    specialty: "Cardiology",
    location: "Kathmandu",
    phone: "+977-9812345678",
  },
  {
    name: "Dr. Kriti Rana",
    specialty: "Pediatrics",
    location: "Pokhara",
    phone: "+977-9801122334",
  },
  {
    name: "Dr. Suman Lama",
    specialty: "Dermatology",
    location: "Lalitpur",
    phone: "+977-9805678910",
  },
  {
    name: "Dr. Nisha Singh",
    specialty: "Orthopedic",
    location: "Biratnagar",
    phone: "+977-9818765432",
  },
];

export default function FindDoctor() {
  const navigate = useNavigate(); // ✅ Use navigate hook

  // ✅ This sends specialty as router state
  const handleBook = (specialty) => {
    navigate("/book", { state: { specialty } });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="flex items-center border rounded shadow bg-white">
          <Search className="ml-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, specialty, location..."
            className="w-full p-3 outline-none rounded"
          />
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded p-5 hover:shadow-xl transition"
          >
            <div className="flex items-center mb-3">
              <Stethoscope className="text-teal-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">{doc.name}</h2>
            </div>
            <p className="text-gray-600 mb-1">
              <strong>Specialty:</strong> {doc.specialty}
            </p>
            <p className="text-gray-600 mb-1 flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> {doc.location}
            </p>
            <p className="text-gray-600 flex items-center">
              <Phone className="w-4 h-4 mr-1" /> {doc.phone}
            </p>
            <button
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 w-full"
              onClick={() => handleBook(doc.specialty)} // ✅ trigger with specialty
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
