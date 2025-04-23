import React from "react";

export default function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12 pt-8">
      <div className="pt-24 pb-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-6 flex items-center justify-center">
            {/* <img 
              src="/public/assets/SBM.jpg" 
              alt="Project Overview"
              className="h-full object-contain"
            /> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Our Projects</h1>
          <p className="text-gray-600 mb-4">Explore our major initiatives that drive change in rural communities.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-32 h-24 mb-4 bg-gray-100 flex items-center justify-center rounded">
              {/* Empty image space */}
            </div>
            <h2 className="text-xl font-bold text-blue-600 mb-2">Jal Jeevan Mission (ISA)</h2>
            <p className="text-gray-700 text-center">Implementation Support Agency providing community mobilization, village planning, IEC activities, and monitoring of safe water supply.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-32 h-24 mb-4 bg-gray-100 flex items-center justify-center rounded">
              <img 
                src="/public/assets/SBM.jpg" 
                alt="Mission Nirmal Bangla"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h2 className="text-xl font-bold text-blue-600 mb-2">Mission Nirmal Bangla</h2>
            <p className="text-gray-700 text-center">Facilitating construction of household toilets and promoting behavioral change for cleanliness and hygiene in rural communities.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-32 h-24 mb-4 bg-gray-100 flex items-center justify-center rounded">
              {/* Empty image space */}
            </div>
            <h2 className="text-xl font-bold text-blue-600 mb-2">Solid Waste Management</h2>
            <p className="text-gray-700 text-center">Leading awareness and implementation of waste segregation, eco-friendly disposal practices, and sustainable waste management systems in rural areas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
