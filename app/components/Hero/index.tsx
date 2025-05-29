'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div
              className="flex items-center mb-6 bg-background-secondary/70 backdrop-blur-sm px-4 py-2 rounded-full w-fit"
              variants={itemVariants}
            >
              <span className="w-3 h-3 bg-[#684DF4] rounded-full mr-2 animate-pulse"></span>
              <p className="text-sm font-medium">From Concept to Launch – We Code Your Dreams</p>
            </motion.div>

            <motion.h1 className="mb-6 text-6xl" variants={itemVariants}>
              We Build <span className="text-[#684DF4]">Full-Snack</span> Solutions for{' '}
              <span className="text-[#684DF4] gradient-text">Digital Success</span>
            </motion.h1>

            <motion.p className="text-gray-300 text-lg mb-8 max-w-xl" variants={itemVariants}>
              From startups to enterprises, we help turn ideas into full-fledged digital solutions with expert
              development, design, and support services.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="flex items-center gap-6 mt-10 justify-start"
            >
              <Link href="/auth/enroll">
                <Button
                  label=" Book a Consultation"
                  width="w-fit"
                  buttonStyle="custom"
                  height="h-[45px]"
                  labelSize="text-[15px] font-lg rounded-md"
                  customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
                  icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
                  iconPosition="right"
                />
              </Link>
              <Link href="/services">
                <Button
                  label="Explore Our Services"
                  width="w-fit"
                  buttonStyle="custom"
                  height="h-[45px]"
                  labelSize="text-[15px] font-lg"
                  customClasses="text-white hover:text-black hover:bg-white cursor-pointer border border-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
                />
              </Link>
            </motion.div>
          </div>
          <motion.div className="relative" variants={itemVariants}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 mix-blend-overlay"></div>
              <img
                src="https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-primary to-transparent h-1/3"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-slate-900 p-3 rounded-lg shadow-lg border border-gray-800 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#684DF4]"></div>
                <span className="text-xs font-medium">Project: HealthTrack Pro</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">Completed 2 weeks ahead of schedule</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 p-3 rounded-lg shadow-lg border border-gray-800 animate-float animation-delay-1000">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#684DF4]"></div>
                <span className="text-xs font-medium">New Client Onboarding</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">3 new projects this month</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
