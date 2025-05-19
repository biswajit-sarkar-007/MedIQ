import React from 'react';
import { motion } from 'framer-motion';
import {DocumentTextIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Accessibility() {
 
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
           
            <span>Accessibility Statement</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Accessibility
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            MedIQ's commitment to making our services accessible to everyone
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
              className="flex items-center justify-between mb-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50"
            >
              <div className="flex items-center">
                <DocumentTextIcon className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">Last Updated:</span>
              </div>
              <span className="text-blue-700 dark:text-blue-300 font-medium">May 20, 2025</span>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                MedIQ Health Technologies Pvt. Ltd. ("we", "our", or "us") is dedicated to ensuring that our website, mobile applications, and related services (collectively, our "Services") are accessible to all users, including those with disabilities. We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and other applicable accessibility standards.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                This Accessibility Statement outlines our ongoing efforts to enhance accessibility and provide an inclusive experience for all users.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Commitment to Accessibility
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We are committed to making our Services accessible by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>Designing our Services with accessibility in mind from the outset</li>
                <li>Regularly testing our Services for accessibility compliance</li>
                <li>Training our team on accessibility best practices</li>
                <li>Engaging with users to gather feedback on accessibility improvements</li>
                <li>Partnering with accessibility experts to enhance our Services</li>
              </ul>
            </motion.div>

            
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Accessibility Features
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our Services incorporate the following accessibility features to ensure an inclusive experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li><span className="font-semibold">Keyboard Navigation:</span> All interactive elements are accessible via keyboard</li>
                <li><span className="font-semibold">Screen Reader Support:</span> Compatibility with popular screen readers like JAWS, NVDA, and VoiceOver</li>
                <li><span className="font-semibold">Text Alternatives:</span> Alt text for images and descriptive labels for form inputs</li>
                <li><span className="font-semibold">High Contrast Mode:</span> Support for high contrast themes for users with visual impairments</li>
                <li><span className="font-semibold">Adjustable Text Size:</span> Options to increase or decrease text size without breaking the layout</li>
                <li><span className="font-semibold">Consistent Navigation:</span> Predictable and logical navigation patterns across our Services</li>
              </ul>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Compliance Efforts
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We aim to align our Services with the following standards:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                <li>Section 508 of the Rehabilitation Act (for U.S. federal compliance)</li>
                <li>Americans with Disabilities Act (ADA) Title III requirements</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                We conduct regular accessibility audits using both automated tools and manual testing to identify and address potential barriers.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Feedback and Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We welcome feedback from users to help us improve the accessibility of our Services. If you encounter any accessibility barriers or have suggestions, please contact us.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To report an accessibility issue, please provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>A description of the issue</li>
                <li>The URL or section of the Services where the issue occurred</li>
                <li>Your contact information (optional, for follow-up)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </motion.div>

            
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Third-Party Content
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our Services may include links to third-party websites or content that we do not control. We are not responsible for the accessibility of third-party content. We encourage users to contact third-party providers directly for accessibility concerns related to their services.
              </p>
            </motion.div>

            
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ongoing Improvements
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Accessibility is an ongoing process. We are continuously working to enhance the usability and accessibility of our Services by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>Updating our design and development practices</li>
                <li>Incorporating user feedback into our accessibility roadmap</li>
                <li>Monitoring changes in accessibility standards and guidelines</li>
                <li>Investing in accessibility training for our team</li>
              </ul>
            </motion.div>

           
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have questions, feedback, or need assistance with accessibility, please reach out to us:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50">
                <p className="text-gray-800 dark:text-gray-200 font-medium">MedIQ Health Technologies Pvt. Ltd.</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Email: accessibility@mediq.ai</p>
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
           
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <GlobeAltIcon className="w-20 h-20 text-blue-300 dark:text-indigo-700 absolute bottom-10 right-10 rotate-12" />
          </motion.div>
        </div>
        </div>
      </div>
  );
}