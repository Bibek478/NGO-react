import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

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
      <div className="h-[400px] relative bg-blue-600">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/projects" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
              About the Project
              <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
            </h2>
            <p className="text-gray-600 leading-relaxed">{project.about}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
              Our Role
              <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
            </h2>
            <p className="text-gray-600 mb-4">{project.role}</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              {project.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 relative inline-block">
              Project Impact
              <div className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-600"></div>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {project.impact.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
