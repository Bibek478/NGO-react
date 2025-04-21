
import React from "react";

export default function JoinUs() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12 pt-8">
      <div className="pt-24 pb-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-6 flex items-center justify-center">
            {/* Empty logo/space for branding */}
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Become Part of the Change</h1>
          <p className="text-gray-600 mb-4">Join our team of passionate individuals working towards a better future.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl text-blue-600 font-bold mb-2 text-center">Volunteer Application</h2>
          <p className="text-center text-gray-700 mb-8">
            Thank you for your interest in volunteering with us! Your time and skills are invaluable. Please fill out the form below, and we'll get in touch with you regarding available opportunities that match your interests and availability.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-1">First Name:</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="First Name" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Last Name:</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="Last Name" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email Address:</label>
                <input type="email" className="w-full border rounded px-3 py-2" placeholder="Email Address" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Phone Number:</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="Phone Number" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-semibold mb-1">Address (City, State):</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="e.g., New Delhi, Delhi" />
              </div>
            </div>
            <div className="pt-2 flex justify-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold">
                Submit Application
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 text-center mt-6">
            We review applications regularly and will contact you soon. Thank you for your willingness to help!
          </p>
        </div>
      </div>
    </div>
  );
}
