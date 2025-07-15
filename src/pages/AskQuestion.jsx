import React from "react";
import { HelpCircle, User, Mail, MessageSquare } from "lucide-react";

export default function AskQuestion() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-2">
          <HelpCircle className="w-10 h-10 text-teal-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">
          Ask a Health Question
        </h1>
        <p className="text-gray-600 mt-2">
          Our expert doctors will get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form className="bg-white shadow-md rounded p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="pl-10 w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-10 w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Question
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <textarea
              rows="5"
              placeholder="Describe your symptoms or ask your health question here..."
              className="pl-10 pt-3 w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition duration-200"
        >
          Submit Question
        </button>
      </form>
    </div>
  );
}
