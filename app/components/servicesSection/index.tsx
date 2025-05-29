'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Headset, Rocket, Waypoints, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/app/constants/services';

const iconComponents: Record<string, React.ReactNode> = {
  Code: <Code className="h-6 w-6 text-primary-500" />,
  Smartphone: <Smartphone className="h-6 w-6 text-primary-500" />,
  Palette: <Palette className="h-6 w-6 text-primary-500" />,
  Headset: <Headset className="h-6 w-6 text-primary-500" />,
  Rocket: <Rocket className="h-6 w-6 text-primary-500" />,
  Waypoints: <Waypoints className="h-6 w-6 text-primary-500" />
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section md:p-20 p-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl">
            Our <span className="text-[#684DF4]">Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            We offer a comprehensive range of development, design, and support services to help businesses of all sizes
            achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Link
                href={service.path}
                className="card p-4 hover:shadow-[#684DF4] hover:shadow flex flex-col h-full group bg-[#1A1A1D] rounded-xl p-6 transition-all duration-300"
              >
                <div className="bg-slate-900 p-3 rounded-lg w-fit mb-4 text-[#684DF4]">
                  {iconComponents[service.icon]}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
                <div className="flex items-center text-[#684DF4] font-medium">
                  <span>Learn more</span>
                  <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
