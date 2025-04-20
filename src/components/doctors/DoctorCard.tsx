import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star } from 'lucide-react';
import { Doctor } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Card interactive className="h-full flex flex-col">
      <div className="relative">
        <img
          src={doctor.photoUrl}
          alt={doctor.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        
        {doctor.isAvailableToday && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Available Today
          </div>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
          {doctor.name}
        </h3>
        
        <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
          {doctor.specialization}
        </p>
        
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          <MapPin size={16} className="mr-1" />
          <span>{doctor.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          <Calendar size={16} className="mr-1" />
          <span>Available on: {doctor.availability.join(', ')}</span>
        </div>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(doctor.rating) ? "#facc15" : "none"}
              color={i < Math.floor(doctor.rating) ? "#facc15" : "#d1d5db"}
            />
          ))}
          <span className="ml-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {doctor.rating}
          </span>
        </div>
        
        <div className="mt-auto">
          <Link to={`/appointment/${doctor.id}`} className="w-full">
            <Button fullWidth>
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;