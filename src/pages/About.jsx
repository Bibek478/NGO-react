import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-12 pt-8">
      <div className="pt-20 pb-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-8 items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">About</h1>
            <p className="text-gray-500 mb-4 max-w-1xl mx-auto">Learn more about our mission, vision, and the team behind our work.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
            Our Story
            <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Phansidewa Social & Rural Welfare Society was founded in October 2014 with a mission to uplift rural communities and ensure access to basic rights and services. Since its inception, the society has been engaged in various NGO-related activities focusing on social welfare, awareness, community development, and environmental sustainability.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
            Our Mission & Vision
            <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">Mission:</span> To empower rural and underprivileged communities by providing them with access to safe drinking water, improved sanitation, education, and sustainable development solutions.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">Vision:</span> To build a society that is self-reliant, aware, inclusive, and sustainable—where basic services are accessible to all, and development is people-centric and environment-friendly.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
            Our Values
            <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
          </h2>
          <div className="space-y-6">
            {[
              { title: "Transparency", desc: "We maintain complete transparency in our governance and execution of all activities." },
              { title: "Community Participation", desc: "We believe in inclusive development through active community involvement and participation." },
              { title: "Equality & Inclusiveness", desc: "We ensure equal access and fair treatment in all our service delivery programs." },
              { title: "Sustainability", desc: "We implement environment-conscious approaches in all our development initiatives." },
              { title: "Accountability & Dedication", desc: "We maintain the highest standards of accountability and dedication in all areas of our work." }
            ].map((value, index) => (
              <div key={index}>
                <h3 className="text-blue-600 font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Government Partnerships */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
            Government Partnerships
            <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">We actively collaborate with government initiatives to create sustainable change at scale:</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-blue-600 font-semibold mb-1">Jal Jeevan Mission (JJM)</h3>
                <p className="text-gray-600">Ensuring implementation success through community participation and monitoring of safe water supply.</p>
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold mb-1">Swachh Bharat Mission</h3>
                <p className="text-gray-600">Promoting hygiene, toilet usage, and cleanliness practices in rural households.</p>
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold mb-1">Solid Waste Management</h3>
                <p className="text-gray-600">Leading innovations and execution of waste segregation and eco-friendly waste management practices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
            Community Impact
            <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
          </h2>
          <p className="text-gray-600 mb-4">Through regular interaction and trust-building, we've learned that lasting change comes from understanding local factors, circumstances, and possibilities. Our consistent building initiatives have successfully built a strong community mindsets towards:</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Water Conservation</li>
            <li>Health Focused Living</li>
            <li>Community Well-being</li>
          </ul>
        </section>

        {/* Registration Details */}
        <section className="mt-16">
          <div className="space-y-2">
            <p className="text-gray-600"><span className="font-semibold">Registration No:</span> S/2L/No. 29798</p>
            <p className="text-gray-600"><span className="font-semibold">PAN No:</span> AADAP3841Q</p>
            <p className="text-gray-600"><span className="font-semibold">12A Registration No:</span> AADAP3841QE20241</p>
            <p className="text-gray-600"><span className="font-semibold">80G Registration No:</span> AADAP3841QF20251</p>
          </div>
        </section>
      </div>
    </div>
  );
}
