import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight, Info, ThumbsUp, stethoscope } from 'lucide-react';
import { SymptomResult } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';

interface SymptomResultsProps {
  result: SymptomResult;
}

const SymptomResults: React.FC<SymptomResultsProps> = ({ result }) => {
  // Function to render urgency level with appropriate styling
  const renderUrgencyLevel = () => {
    const urgencyConfig = {
      mild: {
        color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
        icon: <ThumbsUp size={18} />,
        text: 'Mild',
        description: 'Your symptoms suggest a mild condition that can likely be managed at home.'
      },
      moderate: {
        color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
        icon: <Info size={18} />,
        text: 'Moderate',
        description: 'Your symptoms may require medical attention but are not immediately life-threatening.'
      },
      emergency: {
        color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
        icon: <AlertCircle size={18} />,
        text: 'Emergency',
        description: 'Your symptoms require immediate medical attention. Please seek emergency care.'
      }
    };

    const config = urgencyConfig[result.urgency];

    return (
      <div className={`${config.color} p-4 rounded-lg mb-6`}>
        <div className="flex items-center mb-2">
          {config.icon}
          <h3 className="ml-2 font-semibold">{config.text} Urgency</h3>
        </div>
        <p>{config.description}</p>
      </div>
    );
  };

  // Animation variants for staggered children
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8"
    >
      <motion.div variants={itemVariants}>
        {renderUrgencyLevel()}
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">
          Possible Conditions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {result.conditions.map((condition, index) => (
            <Card key={index} className="p-4">
              <h4 className="font-semibold text-neutral-800 dark:text-white mb-2">
                {condition.name}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {condition.description}
              </p>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">
          Recommended Actions
        </h3>
        
        <div className="mb-6">
          <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Home Remedies & Self-Care
          </h4>
          <ul className="space-y-2">
            {result.remedies.map((remedy, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span className="text-neutral-600 dark:text-neutral-400">{remedy}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-4">
        <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Medical Consultation
        </h4>
        
        <div className="bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="shrink-0 mt-1">
              <stethoscope size={20} className="text-primary-500" />
            </div>
            <div className="ml-3">
              <p className="font-medium text-neutral-800 dark:text-white">
                {result.consultDoctor.required 
                  ? "Professional medical consultation recommended" 
                  : "Medical consultation may not be necessary at this time"}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                {result.consultDoctor.reason}
              </p>
            </div>
          </div>
          
          {result.consultDoctor.required && (
            <div className="mt-4">
              <Link to="/doctors">
                <Button 
                  fullWidth 
                  rightIcon={<ArrowRight size={16} />}
                >
                  Find a Doctor
                </Button>
              </Link>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
        <p>
          <strong>Disclaimer:</strong> This analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SymptomResults;