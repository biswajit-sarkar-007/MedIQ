import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stethoscope, Activity, UserPlus } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10">
          <stethoscope size={120} />
        </div>
        <div className="absolute bottom-20 right-10">
          <Activity size={160} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Get Trusted Health Insights Instantly
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            MedIQ combines medical expertise with AI to provide reliable symptom analysis and
            connect you with healthcare professionals when you need them most.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link to="/symptom-check">
              <Button
                size="lg"
                variant="secondary"
                leftIcon={<stethoscope size={20} />}
                className="bg-blue text-primary-600 hover:bg-neutral-100"
              >
                Check Symptoms Now
              </Button>
            </Link>
            <Link to="/doctors">
              <Button
                size="lg"
                variant="outline"
                leftIcon={<UserPlus size={20} />}
                className="border-white text-white hover:bg-white/20"
              >
                Find a Doctor
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center justify-center space-x-4"
            variants={itemVariants}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary-600 font-semibold text-xs"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm opacity-90">Trusted by 10,000+ users</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;