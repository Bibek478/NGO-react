import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [animated, setAnimated] = useState(false);
  const [descAnimated, setDescAnimated] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mount with sequential timing
    const titleTimer = setTimeout(() => {
      setAnimated(true);
      
      // Start description animation after title animation
      const descTimer = setTimeout(() => {
        setDescAnimated(true);
      }, 500);
      
      return () => clearTimeout(descTimer);
    }, 100);
    
    return () => clearTimeout(titleTimer);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold text-gray-800">Project not found</h1>
          <Link to="/projects" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="h-[400px] relative bg-gray-800">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 
              className={`text-4xl font-bold mb-3 transition-all duration-500 ease-in-out transform ${
                animated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              {project.title}
            </h1>
            <p 
              className={`text-lg max-w-2xl mx-auto transition-all duration-1000 ease-in-out transform ${
                descAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {project.shortDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link to="/projects" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left image column */}
          <div className="bg-white p-0 rounded shadow-sm flex items-center justify-center group cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-sky-200 hover:border hover:border-sky-200 hover:bg-sky-50">
            <img 
              src="/assets/jjm.webp" 
              alt={`${project.title} logo`}
              className="w-full h-auto max-h-[1200px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Right content column */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded shadow-sm mx-auto max-w-3xl">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  About the Project
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify text-lg">
                  Jal Jeevan Mission is a flagship programme of the Government of India which aims to provide safe and 
                  adequate drinking water through individual household tap connections to all households in rural India by 2024.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Role
                </h2>
                <p className="text-gray-600 mb-4 text-justify text-lg">As an Implementation Support Agency (ISA), PSRWIS is responsible for:</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                  <li>Community mobilization and awareness generation</li>
                  <li>Capacity building of Gram Panchayat and VWSC</li>
                  <li>Support in planning and implementation</li>
                  <li>Technical assistance and monitoring</li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        {/* Project Impact Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Project Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <div className="text-3xl font-bold text-gray-800">1000+</div>
              <div className="text-gray-600 mt-2">Households Connected</div>
            </div>
            <div className="bg-gray-50 p-6 text-center">
              <div className="text-3xl font-bold text-gray-800">20+</div>
              <div className="text-gray-600 mt-2">Villages Covered</div>
            </div>
            <div className="bg-gray-50 p-6 text-center">
              <div className="text-3xl font-bold text-gray-800">5000+</div>
              <div className="text-gray-600 mt-2">People Benefited</div>
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery?.map((image, index) => (
              <div key={index} className="h-64 overflow-hidden">
                <img 
                  src={image} 
                  alt={`Project gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )) || (
              <>
                <div className="h-64 overflow-hidden bg-gray-100 rounded">
                  <img 
                    src="/assets/water.jpg" 
                    alt="Clean water supply" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = '/assets/default-image.jpg';
                    }}
                  />
                </div>
                <div className="h-64 overflow-hidden bg-gray-100 rounded">
                  <img 
                    src="/assets/water2.jpg" 
                    alt="Water conservation" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = '/assets/default-image.jpg';
                    }}
                  />
                </div>
                <div className="h-64 overflow-hidden bg-gray-100 rounded">
                  <img 
                    src="/assets/nirmal.jpg" 
                    alt="Nirmal project" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = '/assets/default-image.jpg';
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
