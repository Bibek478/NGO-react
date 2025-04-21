
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="pt-16 pb-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-6 flex items-center justify-center">
            {/* Logo/brand space intentionally left blank */}
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">About Our NGO</h1>
          <p className="text-gray-600 mb-4">Learn more about our mission, vision, and the team behind our work.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="mx-auto max-w-3xl bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            PSRWS was founded with a mission to uplift communities, promote health and sustainability, and foster social change in rural India. Our focus is on reaching the underserved through meaningful grassroots initiatives and relentless community engagement.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Our Mission & Vision</h2>
          <p className="text-gray-700 mb-4">
            Mission: Empower rural and underprivileged communities by providing them access to safe drinking water, sanitation, education, and sustainable development solutions.
          </p>
          <p className="text-gray-700">
            Vision: To build a society that is self-reliant and where every household has access to basic services, clean water, and a healthy living environment.
          </p>
        </div>
      </div>
    </div>
  );
}
