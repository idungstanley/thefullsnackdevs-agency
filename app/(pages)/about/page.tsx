'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { team } from '@/app/constants/team';

const About: React.FC = () => {
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
              About <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              We&apos;re a team of passionate developers, designers, and problem solvers dedicated to turning your ideas into
              reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4">
                Founded in 2016, TheFullSnackDevs began with a simple mission: to help businesses transform their
                digital presence through exceptional software solutions.
              </p>
              <p className="text-gray-400">
                Today, we&apos;re proud to have helped hundreds of clients across the globe launch successful digital
                products and services. Our team has grown to include experts from various fields, all united by our
                passion for creating impactful digital experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our diverse team brings together expertise from various fields to deliver exceptional results for our
              clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 relative group">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-4">
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.socials?.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary-500 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {member.socials?.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary-500 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-500 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
