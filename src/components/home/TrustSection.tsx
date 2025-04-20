import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle } from 'lucide-react';

const TrustSection: React.FC = () => {
  const trustItems = [
    {
      icon: <Shield size={28} className="text-primary-500" />,
      title: 'HIPAA Compliant',
      description: 'Your health data is protected by industry-standard security protocols',
    },
    {
      icon: <Lock size={28} className="text-primary-500" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all your personal and health information',
    },
    {
      icon: <Award size={28} className="text-primary-500" />,
      title: 'Certified Providers',
      description: 'All healthcare professionals are verified and credentialed',
    },
    {
      icon: <CheckCircle size={28} className="text-primary-500" />,
      title: 'AI Accuracy',
      description: 'Our symptom checker is regularly reviewed by medical professionals',
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-4">
            Your Health Data is Safe with Us
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We prioritize the security and privacy of your health information with industry-leading standards and protocols.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;