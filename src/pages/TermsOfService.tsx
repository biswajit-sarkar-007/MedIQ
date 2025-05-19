import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, DocumentTextIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function TermsOfService() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950">
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
       
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex justify-center items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <ScaleIcon className="w-4 h-4 mr-2" />
            <span>Terms & Conditions</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The rules and guidelines for using MedIQ's services
          </p>
        </motion.div>

       
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl border border-blue-50 dark:border-neutral-700/80 p-8 md:p-10 shadow-xl shadow-blue-900/5 dark:shadow-blue-900/30">
            
          
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between mb-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 nessuno-dark:border-blue-800/50"
            >
              <div className="flex items-center">
                <DocumentTextIcon className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">Last Updated:</span>
              </div>
              <span className="text-blue-700 dark:text-blue-300 font-medium">May 20, 2025</span>
            </motion.div>

          
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ScaleIcon className="w-6 h-6 text-blue-500 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to MedIQ ("we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and related services (collectively, our "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                If you do not agree with these Terms, you must not use our Services. We reserve the right to update or modify these Terms at any time, and such changes will be effective upon posting on our website.
              </p>
            </motion.div>

          
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Use of Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for all activities conducted under your account.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Eligibility</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                To use our Services, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>Be at least 13 years of age or older</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Prohibited Conduct</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Transmit viruses, malware, or any harmful code</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </motion.div>

          
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                User Content
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may provide content, such as medical information, feedback, or other materials ("User Content") through our Services. By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process such content to provide and improve our Services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>You own or have the necessary rights to submit the User Content</li>
                <li>The User Content does not violate any laws or third-party rights</li>
              </ul>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All content, features, and functionality of the Services, including but not limited to text, graphics, logos, and software, are the exclusive property of MedIQ or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You are granted a limited, non-transferable, non-exclusive license to access and use the Services for personal,Bryan Garner use only. You may not copy, modify, distribute, or create derivative works from our Services without our prior written permission.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may terminate or suspend your access to the Services at our sole discretion, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Upon termination, your right to use the Services will immediately cease, and we may delete your account and User Content without further obligation to you.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Disclaimers and Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Services are provided on an "as is" and "as available" basis. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To the fullest extent permitted by law, MedIQ will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the Services.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Any disputes arising under or in connection with these Terms shall be resolved exclusively in the state or federal courts located in San Francisco, California.
              </p>
            </motion.div>

          
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to These Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use the Services after such changes, you agree to be bound by the revised Terms.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We encourage you to review these Terms periodically to stay informed about our policies.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50">
                <p className="text-gray-800 dark:text-gray-200 font-medium">MedIQ Health Technologies Pvt. Ltd.</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Email: support@mediq.ai</p>
                <p className="text-gray-600 dark:text-gray-300">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600 dark:text-gray-300">Address: 123 Health Avenue, Medical District San Francisco, CA 94101</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

       
        <div className="relative pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ShieldCheckIcon className="w-16 h-16 text-blue-300 dark:text-blue-700 absolute top-10 left-10 animate-pulse" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <ScaleIcon className="w-20 h-20 text-blue-300 dark:text-indigo-700 absolute bottom-10 right-10 rotate-12" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}