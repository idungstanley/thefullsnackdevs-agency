import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: '100+',
    label: 'Projects Completed',
    icon: <Code className="h-10 w-10 text-primary-500" />,
  },
  {
    id: 2,
    value: '50+',
    label: 'Happy Clients',
    icon: <Users className="h-10 w-10 text-primary-500" />,
  },
  {
    id: 3,
    value: '12+',
    label: 'Industry Awards',
    icon: <Award className="h-10 w-10 text-primary-500" />,
  },
  {
    id: 4,
    value: '8',
    label: 'Years Experience',
    icon: <Clock className="h-10 w-10 text-primary-500" />,
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-background-primary relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;