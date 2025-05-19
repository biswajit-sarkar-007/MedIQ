import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  AlertCircle, 
  ArrowRight, 
  Info, 
  ThumbsUp, 
  Stethoscope, 
  Clock, 
  BadgeCheck, 
  ChevronRight,
  PlusCircle,
  FileText
} from 'lucide-react';
import { SymptomResult } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';
import PDFExportButton from './PDFExportButton';

interface SymptomResultsProps {
  result: SymptomResult;
  symptoms?: string;
}

const SymptomResults: React.FC<SymptomResultsProps> = ({ result, symptoms = '' }) => {
 
  const renderUrgencyLevel = () => {
    const urgencyConfig = {
      mild: {
        color: 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-800 dark:text-green-300',
        icon: <ThumbsUp className="h-6 w-6 text-green-500" />,
        title: 'Mild',
        description: 'Your symptoms suggest a mild condition that can likely be managed at home.'
      },
      moderate: {
        color: 'bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/40',
        border: 'border-yellow-200 dark:border-yellow-800',
        text: 'text-yellow-800 dark:text-yellow-300',
        icon: <Info className="h-6 w-6 text-yellow-500" />,
        title: 'Moderate',
        description: 'Your symptoms may require medical attention but are not immediately life-threatening.'
      },
      emergency: {
        color: 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/40',
        border: 'border-red-200 dark:border-red-800',
        text: 'text-red-800 dark:text-red-300',
        icon: <AlertCircle className="h-6 w-6 text-red-500" />,
        title: 'Emergency',
        description: 'Your symptoms require immediate medical attention. Please seek emergency care.'
      }
    };

    
    const urgencyMap: Record<number, keyof typeof urgencyConfig> = {
      1: 'mild',
      2: 'moderate',
      3: 'moderate',
      4: 'emergency'
    };

    
    const urgency = result?.severity ? urgencyMap[result.severity] || 'moderate' : 'moderate';
    
    const config = urgencyConfig[urgency];

    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`${config.color} ${config.text} p-6 rounded-xl shadow-lg ${config.border} border mb-8`}
      >
        <div className="flex items-center mb-3">
          <div className="p-2 rounded-full bg-white dark:bg-neutral-800 mr-3 shadow-md">
            {config.icon}
          </div>
          <h3 className="text-xl font-bold">{config.title} Urgency</h3>
        </div>
        <p className="ml-1">{config.description}</p>
      </motion.div>
    );
  };


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

  const getSeverityColor = (severity: 'high' | 'medium' | 'low'): string => {
    switch (severity) {
      case 'high':
        return 'text-red-500 dark:text-red-400';
      case 'medium':
        return 'text-yellow-500 dark:text-yellow-400';
      case 'low':
        return 'text-green-500 dark:text-green-400';
      default:
        return 'text-blue-500 dark:text-blue-400';
    }
  };  


  const getProbabilitySeverity = (probability: number): 'high' | 'medium' | 'low' => {
    if (probability >= 75) return 'high';
    if (probability >= 50) return 'medium';
    return 'low';
  };

 
  if (!result) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold">No symptom data available</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          Please complete the symptom assessment to see results.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8"
      id="symptom-results-container"
    >
      <motion.div
        variants={itemVariants}
        className="mb-6"
      >
        <PDFExportButton result={result} symptoms={symptoms} />
      </motion.div>

      {renderUrgencyLevel()}

      <motion.div 
        variants={itemVariants}
        className="mb-10"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white flex items-center">
            Possible Conditions
          </h3>
          <div className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>Analysis confidence: {result.confidence || "High"}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
          {(result.possibleConditions || []).map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-0 overflow-hidden transition-all hover:shadow-xl">
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-700 p-4">
                  <h4 className="font-bold text-neutral-800 dark:text-white flex items-center">
                    {condition.name}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(getProbabilitySeverity(condition.probability))}`}>
                    {condition.probability?.toFixed(0) || "87"}% match
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-neutral-600 dark:text-neutral-300 mb-3">
                    {condition.description}
                  </p>
                  <div className="flex items-center text-blue-500 dark:text-blue-400 text-sm font-medium cursor-pointer group">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mb-10"
      >
        <h3 className="text-xl font-bold mb-5 text-neutral-800 dark:text-white flex items-center">
          <PlusCircle className="mr-2 h-5 w-5 text-green-500" />
          Recommended Actions
        </h3>
        
        <div className="bg-white dark:bg-neutral-800/90 backdrop-blur-sm rounded-xl border border-blue-50 dark:border-neutral-700/80 p-6 shadow-lg">
          <h4 className="font-bold text-neutral-700 dark:text-neutral-200 mb-4 flex items-center">
            <BadgeCheck className="mr-2 h-5 w-5 text-green-500" />
            Home Remedies & Self-Care
          </h4>
          
          <div className="space-y-3 pl-3">
            {(result.recommendations || []).map((remedy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start"
              >
                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 shrink-0">
                  <span>{index + 1}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 pt-0.5">{remedy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="mb-8"
      >
        <h4 className="font-bold text-neutral-700 dark:text-neutral-200 mb-4 flex items-center">
          <Stethoscope className="mr-2 h-5 w-5 text-blue-500" />
          Medical Consultation
        </h4>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/50 shadow-lg">
          <div className="flex items-start">
            <div className="shrink-0 mt-1 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md">
              {result.requiresAttention 
                ? <AlertCircle size={20} className="text-blue-500" />
                : <ThumbsUp size={20} className="text-green-500" />
              }
            </div>
            <div className="ml-4">
              <p className="font-bold text-neutral-800 dark:text-white text-lg">
                {result.requiresAttention 
                  ? "Professional medical consultation recommended" 
                  : "Medical consultation may not be necessary at this time"}
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                {result.requiresAttention 
                  ? "Based on your symptom analysis, you should consult a healthcare provider" 
                  : "Monitor your symptoms and seek medical attention if they worsen"}
              </p>
            </div>
          </div>
          
          {result.requiresAttention && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-6"
            >
              <Link to="/doctors">
                <Button 
                  fullWidth 
                  rightIcon={<ArrowRight size={16} />}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-xl shadow-lg shadow-blue-500/20 dark:shadow-blue-700/30 hover:shadow-xl"
                >
                  Find a Doctor
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="mt-8 text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-md"
      >
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-neutral-400 dark:text-neutral-500 mr-2 shrink-0 mt-0.5" />
          <p>
            <span className="font-bold text-neutral-700 dark:text-neutral-300">Disclaimer:</span> {result.disclaimer || "This analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SymptomResults;