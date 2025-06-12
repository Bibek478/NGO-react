import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="bg-white min-h-screen pb-12 pt-8">
      <div className="pt-20 pb-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-8 items-center justify-center">
            {/* <img 
              src="/public/assets/SBM.jpg" 
              alt="Project Overview"
              className="h-full object-contain"
            /> */}
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Our Projects</h1>
            <p className="text-gray-500 mb-4 max-w-1xl mx-auto">Explore our major initiatives that drive change in rural communities.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="h-48 w-full mb-3 bg-gray-100 rounded overflow-hidden">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h2 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h2>
              <p className="text-gray-700 text-center">{project.shortDesc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
