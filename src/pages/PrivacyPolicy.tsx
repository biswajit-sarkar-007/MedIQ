
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, LockClosedIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  
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
            <ShieldCheckIcon className="w-4 h-4 mr-2" />
            <span>Privacy & Data Protection</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            How MedIQ protects your data and respects your privacy
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
                <LockClosedIcon className="w-6 h-6 text-blue-500 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                MedIQ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by MedIQ. This Privacy Policy applies to our website, mobile applications, and related services (collectively, our "Services").
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We collect several different types of information for various purposes to provide and improve our Services to you:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Address and location information</li>
                <li>Medical history and health information</li>
                <li>Insurance information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Usage Data</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may also collect information on how the Services are accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Services that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>To provide and maintain our Services</li>
                <li>To notify you about changes to our Services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Services</li>
                <li>To monitor the usage of our Services</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To process and manage appointments and medical consultations</li>
                <li>To provide personalized health insights and recommendations</li>
              </ul>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement a variety of security measures to maintain the safety of your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li>All sensitive information is transmitted via Secure Socket Layer (SSL) technology</li>
                <li>All data is stored in secure, encrypted databases</li>
                <li>Access to personal information is restricted to authorized personnel only</li>
                <li>Regular security audits and assessments</li>
                <li>Compliance with HIPAA and other relevant healthcare privacy regulations</li>
              </ul>
            </motion.div>

            
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Sharing Your Personal Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may share your personal information in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li><span className="font-semibold">With Healthcare Providers:</span> To facilitate appointments, consultations, and medical services</li>
                <li><span className="font-semibold">With Service Providers:</span> To perform service-related services or assist in analyzing how our Services are used</li>
                <li><span className="font-semibold">For Business Transfers:</span> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
                <li><span className="font-semibold">With Your Consent:</span> When you have provided consent to share your information</li>
                <li><span className="font-semibold">For Legal Requirements:</span> Where required by law or to protect our rights</li>
              </ul>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Data Protection Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li><span className="font-semibold">The right to access</span> – You have the right to request copies of your personal data</li>
                <li><span className="font-semibold">The right to rectification</span> – You have the right to request that we correct any information you believe is inaccurate</li>
                <li><span className="font-semibold">The right to erasure</span> – You have the right to request that we erase your personal data, under certain conditions</li>
                <li><span className="font-semibold">The right to restrict processing</span> – You have the right to request that we restrict the processing of your personal data, under certain conditions</li>
                <li><span className="font-semibold">The right to data portability</span> – You have the right to request that we transfer the data we've collected to another organization, under certain conditions</li>
                <li><span className="font-semibold">The right to object</span> – You have the right to object to our processing of your personal data, under certain conditions</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: privacy@mediq.ai
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use cookies and similar tracking technologies to track activity on our Services and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Examples of Cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4 ml-4">
                <li><span className="font-semibold">Session Cookies:</span> To operate our Services</li>
                <li><span className="font-semibold">Preference Cookies:</span> To remember your preferences and various settings</li>
                <li><span className="font-semibold">Security Cookies:</span> For security purposes</li>
                <li><span className="font-semibold">Analytics Cookies:</span> To understand how you use our Services</li>
              </ul>
            </motion.div>

            
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our Services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </motion.div>

           
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50">
                <p className="text-gray-800 dark:text-gray-200 font-medium">MedIQ Health Technologies Pvt. Ltd.</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Email: privacy@mediq.ai</p>
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
            <LockClosedIcon className="w-20 h-20 text-blue-300 dark:text-indigo-700 absolute bottom-10 right-10 rotate-12" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}