
import React from "react";

export default function News() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="pt-16 pb-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-6 flex items-center justify-center">
            {/* News header image/space */}
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">News & Publication</h1>
          <p className="text-gray-600 mb-4">Stay updated with our latest articles and announcements.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-blue-600 mb-1">Success in Swachh Bharat Mission</h2>
            <p className="text-xs text-gray-400 mb-2">October 24, 2023</p>
            <p className="text-gray-700">PSRWS's successful involvement in rural household toilet construction and sanitation awareness under Swachh Bharat Mission in Phandeshwar Block.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-blue-600 mb-1">Solid Waste Management Progress</h2>
            <p className="text-xs text-gray-400 mb-2">October 15, 2023</p>
            <p className="text-gray-700">Transforming rural sanitation through community engagement and sustainable waste management practices across multiple blocks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
