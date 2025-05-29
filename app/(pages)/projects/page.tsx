'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/app/constants/projects';
import Link from 'next/link';

const Projects: React.FC = () => {
  return (
    <main className="pt-32 md:px-20 p-4">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
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
                      <span className="text-xs font-medium bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full">
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
                      <span key={tech} className="text-xs bg-background-primary py-1 px-3 rounded-full text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
