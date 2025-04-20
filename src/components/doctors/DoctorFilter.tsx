import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';

interface DoctorFilterProps {
  onFilter: (filters: {
    search: string;
    specialization: string;
    location: string;
    availableToday: boolean;
  }) => void;
}

const DoctorFilter: React.FC<DoctorFilterProps> = ({ onFilter }) => {
  const [search, setSearch] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [location, setLocation] = useState('');
  const [availableToday, setAvailableToday] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ search, specialization, location, availableToday });
  };
  
  const handleClear = () => {
    setSearch('');
    setSpecialization('');
    setLocation('');
    setAvailableToday(false);
    onFilter({ search: '', specialization: '', location: '', availableToday: false });
  };
  
  const specializations = [
    'Family Medicine',
    'Internal Medicine',
    'Pediatrics',
    'Cardiology',
    'Neurology',
    'Dermatology',
    'Gastroenterology',
    'Psychiatry',
    'Orthopedics',
    'Obstetrics and Gynecology'
  ];
  
  const locations = [
    'San Francisco, CA',
    'Oakland, CA',
    'San Jose, CA',
    'Palo Alto, CA'
  ];

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-5 mb-6 sticky top-20 z-10">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-4">
            <Input
              placeholder="Search by doctor name or specialty"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search size={18} />}
            />
          </div>
          
          <div>
            <select
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">All Specializations</option>
              {specializations.map((spec, index) => (
                <option key={index} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary-500"
                checked={availableToday}
                onChange={(e) => setAvailableToday(e.target.checked)}
              />
              <span className="ml-2 text-neutral-700 dark:text-neutral-300">
                Available Today
              </span>
            </label>
          </div>
          
          <div className="flex space-x-2">
            <Button
              type="submit"
              leftIcon={<Filter size={16} />}
              fullWidth
            >
              Apply Filters
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DoctorFilter;