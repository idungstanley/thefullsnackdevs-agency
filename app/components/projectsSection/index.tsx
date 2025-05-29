'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/app/constants/projects';

const ProjectsSection: React.FC = () => {
  const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'E-Learning', 'FinTech'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section className="section bg-background-secondary md:p-20 p-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl">
            Our <span className="text-[#684DF4]">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 cursor-pointer py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category ? 'bg-[#684DF4] text-white' : 'bg-slate-900 text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Link href={project.path} className="block group">
                <div className="overflow-hidden rounded-xl mb-4 aspect-video bg-background-primary relative">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-primary to-transparent">
                    <span className="text-xs font-medium bg-[#684DF4]/70 text-primary-500 px-3 py-1 rounded-full">
                      {project.category[0]}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-slate-800 py-1 px-3 rounded-full text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center text-[#684DF4] hover:text-[#684DF4]/80 font-medium"
          >
            <span>View all projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;