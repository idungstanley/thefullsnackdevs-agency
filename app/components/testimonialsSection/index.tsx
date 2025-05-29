import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/app/constants/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section relative overflow-hidden md:p-20 p-4">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl">
            What Our <span className="text-[#684DF4]">Clients Say</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Don&apos;t just take our word for it. See what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="card relative"
            >
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <p className="text-gray-300 mb-4 italic">{testimonial.content}</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 text-6xl font-serif text-primary-500 opacity-20">&ldquo;</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;