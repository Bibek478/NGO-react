import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title Section - Adjusted padding and margin */}
      <div className="pt-24 pb-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-6 flex items-center justify-center">
            {/* Empty news header image/space */}
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">About Our NGO</h1>
          <p className="text-gray-600 mb-4">Learn more about our mission, vision, and the team behind our work.</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-15 after:h-1 after:bg-blue-600 after:rounded">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Phansidewa Social & Rural Welfare Society was founded in October 2014 with a mission to uplift rural communities and ensure access to basic rights and services. Since its inception, the society has been engaged in various NGO-related activities focusing on social welfare, awareness, community development, and environmental sustainability.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-15 after:h-1 after:bg-blue-600 after:rounded">
            Our Mission & Vision
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-8">
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="text-blue-600 font-bold">Mission: </span>
                To empower rural and underprivileged communities by providing them with access to safe drinking water, improved sanitation, education, and sustainable development solutions.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="text-blue-600 font-bold">Vision: </span>
                To build a society that is self-reliant, aware, inclusive, and sustainable—where basic services are accessible to all, and development is people-centric and environment-friendly.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Details */}
        <section className="bg-gray-50 p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Registration Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow transition-transform hover:-translate-y-1">
              <p><span className="text-blue-600 font-bold">Registration No.:</span><br />S/2L/No. 29798</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transition-transform hover:-translate-y-1">
              <p><span className="text-blue-600 font-bold">PAN No.:</span><br />AADAP3841Q</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transition-transform hover:-translate-y-1">
              <p><span className="text-blue-600 font-bold">12A Registration No.:</span><br />AADAP3841QE20241</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transition-transform hover:-translate-y-1">
              <p><span className="text-blue-600 font-bold">80G Registration No.:</span><br />AADAP3841QF20251</p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Values</h2>
          <div className="space-y-6">
            {[
              { title: "Transparency", desc: "We maintain complete transparency in our governance and execution of all activities." },
              { title: "Community Participation", desc: "We believe in inclusive development through active community involvement and participation." },
              { title: "Equality & Inclusiveness", desc: "We ensure equal access and fair treatment in all our service delivery programs." },
              { title: "Sustainability", desc: "We implement environment-conscious approaches in all our development initiatives." },
              { title: "Accountability & Dedication", desc: "We maintain the highest standards of accountability and dedication in all areas of our work." }
            ].map((value, index) => (
              <div key={index} className="p-6 border-b border-gray-200 last:border-0">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
