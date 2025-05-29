'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/app/constants/services';
import { Code, Headset, Palette, Rocket, Smartphone, Waypoints } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <main className="pt-20">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              We offer a comprehensive range of development, design, and support services to help businesses of all
              sizes achieve their digital goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                className="card card-hover"
              >
                <div className="bg-background-primary p-3 rounded-lg w-fit mb-4">
                  {service.icon === 'Code' && <Code className="h-6 w-6 text-primary-500" />}
                  {service.icon === 'Smartphone' && <Smartphone className="h-6 w-6 text-primary-500" />}
                  {service.icon === 'Palette' && <Palette className="h-6 w-6 text-primary-500" />}
                  {service.icon === 'Headset' && <Headset className="h-6 w-6 text-primary-500" />}
                  {service.icon === 'Rocket' && <Rocket className="h-6 w-6 text-primary-500" />}
                  {service.icon === 'Waypoints' && <Waypoints className="h-6 w-6 text-primary-500" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link
                  href={service.path}
                  className="text-primary-500 font-medium hover:text-primary-400 transition-colors"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
