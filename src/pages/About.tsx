import React from 'react';
import { motion } from 'framer-motion';
import { LightBulbIcon, LockClosedIcon, HandRaisedIcon, MagnifyingGlassIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const coreValues = [
  { icon: <LightBulbIcon className="w-10 h-10 text-blue-500" />, title: 'Innovation', desc: 'We embrace new ideas and technologies.' },
  { icon: <LockClosedIcon className="w-10 h-10 text-pink-500" />, title: 'Privacy First', desc: 'Protecting user data is our top priority.' },
  { icon: <HandRaisedIcon className="w-10 h-10 text-green-500" />, title: 'Accessibility', desc: 'Healthcare for everyone, everywhere.' },
  { icon: <MagnifyingGlassIcon className="w-10 h-10 text-yellow-500" />, title: 'Accuracy', desc: 'We strive for medical precision.' },
];

const team = [
  {
    name: 'Aarav Sharma',
    role: 'Founder & CEO',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: 'https://linkedin.com/in/aaravsharma',
    github: 'https://github.com/aaravsharma'
  },
  {
    name: 'Priya Patel',
    role: 'Lead Engineer',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: 'https://linkedin.com/in/priyapatel',
    github: 'https://github.com/priyapatel'
  },
  {
    name: 'Rahul Verma',
    role: 'AI Researcher',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    linkedin: 'https://linkedin.com/in/rahulverma',
    github: 'https://github.com/rahulverma'
  },
  {
    name: 'Sneha Gupta',
    role: 'Product Designer',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    linkedin: 'https://linkedin.com/in/snehagupta',
    github: 'https://github.com/snehagupta'
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br blue via-white to-green-50 flex flex-col items-center py-12 px-4">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-700 flex items-center justify-center gap-3">
          <span role="img" aria-label="AI">🤖</span> Empowering Health with AI
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">Our mission is to bring intelligent, accessible health tools to every individual.</p>
      </motion.div>

      {/* Our Story Timeline */}
      <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <ol className="relative border-l border-blue-300 ml-4">
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-white" />
            <h3 className="font-semibold text-lg">The Idea</h3>
            <p className="text-gray-600">MedIQ was born from a simple question: How can we make healthcare more accessible?</p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -left-1.5 border border-white" />
            <h3 className="font-semibold text-lg">Hackathon Beginnings</h3>
            <p className="text-gray-600">Our team met at a hackathon, united by the goal of using AI for good.</p>
          </li>
          <li className="ml-6">
            <div className="absolute w-3 h-3 bg-pink-400 rounded-full mt-1.5 -left-1.5 border border-white" />
            <h3 className="font-semibold text-lg">Today</h3>
            <p className="text-gray-600">Built with love by developers who care about health access for all.</p>
          </li>
        </ol>
      </motion.div>

      {/* Core Values */}
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coreValues.map((val, i) => (
            <motion.div key={val.title} whileHover={{ scale: 1.07 }} className="bg-white/90 rounded-xl p-6 flex flex-col items-center shadow border border-blue-100">
              {val.icon}
              <div className="font-semibold text-lg mt-2 mb-1">{val.title}</div>
              <div className="text-gray-600 text-center text-sm">{val.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* The Team */}
      <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-center">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map(member => (
            <motion.div key={member.name} whileHover={{ y: -8, boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)' }} className="bg-white/90 rounded-xl p-6 flex flex-col items-center shadow border border-blue-100">
              <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-3 object-cover border-2 border-blue-200" />
              <div className="font-semibold text-lg">{member.name}</div>
              <div className="text-blue-600 mb-2">{member.role}</div>
              <div className="flex gap-3">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.83-1.56 3.03 0 3.59 2 3.59 4.59v5.61z"/></svg>
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="GitHub">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.799 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.369.823 1.096.823 2.21v3.285c0 .319.192.694.801.576 4.765-1.59 8.199-6.088 8.199-11.386 0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Press/Community */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <EnvelopeIcon className="w-6 h-6 text-blue-600" />
          <span className="font-semibold">Press or Community?</span>
        </div>
        <div className="text-lg">Reach out to us at <a href="mailto:press@mediq.ai" className="text-blue-700 underline">press@mediq.ai</a></div>
      </motion.div>
    </div>
  );
}
