import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SymptomForm from '../components/symptom-checker/SymptomForm';
import SymptomResults from '../components/symptom-checker/SymptomResults';
import { SymptomResult } from '../types';
import { getMockSymptomResult } from '../services/mockData';

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState<SymptomResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (symptoms: string) => {
    setSymptoms(symptoms);
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // In a real app, this would be an API call to the backend
      const mockResult = getMockSymptomResult(symptoms);
      setResult(mockResult);
      setIsLoading(false);
    }, 1500);
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
            AI-Powered Symptom Checker
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Describe your symptoms to get an instant analysis, possible conditions, 
            and guidance on what to do next. Your health is our priority.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <SymptomForm onSubmit={handleSubmit} isLoading={isLoading} />
          
          {result && !isLoading && (
            <SymptomResults result={result} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;