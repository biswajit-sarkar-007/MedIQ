import React from 'react';
import { motion } from 'framer-motion';
import { stethoscope, Users, Calendar, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: <stethoscope size={24} />,
    title: 'Symptom Analysis',
    description: 'Get AI-powered analysis of your symptoms with possible conditions and recommended next steps.',
  },
  {
    icon: <Users size={24} />,
    title: 'Find Specialists',
    description: 'Search for doctors by specialty, location, and availability to get the care you need.',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Easy Booking',
    description: 'Book appointments with just a few clicks and manage your healthcare schedule in one place.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Private & Secure',
    description: 'Your health data is encrypted and protected with industry-leading security standards.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            MedIQ provides all the tools you need to understand your symptoms and connect with healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;