import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Send, stethoscope } from 'lucide-react';
import TextArea from '../common/TextArea';
import Button from '../common/Button';

interface SymptomFormProps {
  onSubmit: (symptoms: string) => void;
  isLoading: boolean;
}

const SymptomForm: React.FC<SymptomFormProps> = ({ onSubmit, isLoading }) => {
  const [symptoms, setSymptoms] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!symptoms.trim()) {
      setError('Please enter your symptoms');
      return;
    }
    
    setError('');
    onSubmit(symptoms);
  };

  // Simulated voice recording for demo
  const handleVoiceInput = () => {
    setIsRecording(true);
    
    // Simulate recording delay
    setTimeout(() => {
      setIsRecording(false);
      setSymptoms('I have a headache, fatigue, and slight fever since yesterday.');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-neutral-800 rounded-lg shadow-card p-6"
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
          <stethoscope size={20} />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">
          Describe Your Symptoms
        </h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <TextArea
          label="What symptoms are you experiencing?"
          placeholder="E.g., I've had a persistent cough and sore throat for the past 3 days, with mild fever in the evenings..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          error={error}
          disabled={isLoading || isRecording}
          className="mb-4"
        />
        
        <div className="flex items-center justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={handleVoiceInput}
            disabled={isLoading || isRecording}
            leftIcon={<Mic size={16} />}
            className={isRecording ? 'animate-pulse' : ''}
          >
            {isRecording ? 'Listening...' : 'Voice Input'}
          </Button>
          
          <Button
            type="submit"
            disabled={isLoading || isRecording || !symptoms.trim()}
            rightIcon={<Send size={16} />}
            isLoading={isLoading}
          >
            Analyze Symptoms
          </Button>
        </div>
      </form>
      
      <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
        <p className="text-center">
          Note: This tool is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </motion.div>
  );
};

export default SymptomForm;