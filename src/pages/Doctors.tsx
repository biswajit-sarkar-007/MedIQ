import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DoctorCard from '../components/doctors/DoctorCard';
import DoctorFilter from '../components/doctors/DoctorFilter';
import { Doctor } from '../types';
import { mockDoctors } from '../services/mockData';

const Doctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(mockDoctors);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = (filters: {
    search: string;
    specialization: string;
    location: string;
    availableToday: boolean;
  }) => {
    let filtered = [...doctors];
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        doctor => 
          doctor.name.toLowerCase().includes(searchTerm) || 
          doctor.specialization.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.specialization) {
      filtered = filtered.filter(
        doctor => doctor.specialization === filters.specialization
      );
    }
    
    if (filters.location) {
      filtered = filtered.filter(
        doctor => doctor.location === filters.location
      );
    }
    
    if (filters.availableToday) {
      filtered = filtered.filter(
        doctor => doctor.isAvailableToday
      );
    }
    
    setFilteredDoctors(filtered);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
            Find the Right Doctor
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Connect with qualified healthcare professionals specializing in your needs.
            Filter by specialty, location, and availability.
          </p>
        </motion.div>

        <DoctorFilter onFilter={handleFilter} />

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredDoctors.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
              No doctors found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Try adjusting your filters to find more doctors
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredDoctors.map((doctor) => (
              <motion.div key={doctor.id} variants={itemVariants}>
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Doctors;