require('dotenv').config();
const mongoose = require('mongoose');
const Webinar = require('./models/Webinar');

const webinars = [
  {
    title: 'AI-Powered Diagnostics: Revolutionizing Medical Imaging',
    speakers: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez'],
    date: '2025-06-15',
    time: '14:00 IST',
    duration: '60 min',
    description:
      'Explore how artificial intelligence is transforming medical imaging diagnostics, from automated detection to predictive analytics.',
    topic: 'AI & Diagnostics',
    type: 'upcoming',
    registrationLink: 'https://register.mediq.ai/webinar-1',
    thumbnail: '/api/placeholder/400/225',
    featured: true,
  },
  {
    title: 'Telemedicine Best Practices: Building Patient Trust',
    speakers: ['Dr. Emily Johnson'],
    date: '2025-06-08',
    time: '15:30 IST',
    duration: '45 min',
    description:
      'Learn effective strategies for delivering quality healthcare remotely while maintaining strong patient relationships.',
    topic: 'Telemedicine',
    type: 'upcoming',
    registrationLink: 'https://register.mediq.ai/webinar-2',
    thumbnail: '/api/placeholder/400/225',
  },
  {
    title: 'Digital Health Records: Security and Compliance',
    speakers: ['Dr. Alex Kumar', 'Lisa Thompson'],
    date: '2025-05-28',
    time: '16:00 IST',
    duration: '90 min',
    description:
      'Understanding HIPAA compliance, data security best practices, and implementing secure digital health record systems.',
    topic: 'Digital Health',
    type: 'upcoming',
    registrationLink: 'https://register.mediq.ai/webinar-3',
    thumbnail: '/api/placeholder/400/225',
  },
  {
    title: 'Machine Learning in Drug Discovery',
    speakers: ['Dr. Robert Park', 'Dr. Anna Volkov'],
    date: '2025-05-10',
    time: '14:30 IST',
    duration: '75 min',
    description:
      'How ML algorithms are accelerating pharmaceutical research and reducing time-to-market for new medications.',
    topic: 'Research & Development',
    type: 'past',
    recordingLink: 'https://recordings.mediq.ai/webinar-4',
    thumbnail: '/api/placeholder/400/225',
    attendees: 1247,
    rating: 4.8,
  },
  {
    title: 'Patient Data Privacy in the Digital Age',
    speakers: ['Dr. Jennifer Lee'],
    date: '2025-04-22',
    time: '13:00 IST',
    duration: '50 min',
    description:
      'Navigating the complex landscape of patient data privacy, consent management, and regulatory compliance.',
    topic: 'Digital Health',
    type: 'past',
    recordingLink: 'https://recordings.mediq.ai/webinar-5',
    thumbnail: '/api/placeholder/400/225',
    attendees: 892,
    rating: 4.6,
  },
  {
    title: 'Remote Patient Monitoring: Technologies and Trends',
    speakers: ['Dr. David Kim', 'Dr. Rachel Adams'],
    date: '2025-04-08',
    time: '15:00 IST',
    duration: '60 min',
    description:
      'Latest innovations in wearable technology, IoT devices, and continuous patient monitoring systems.',
    topic: 'Telemedicine',
    type: 'past',
    recordingLink: 'https://recordings.mediq.ai/webinar-6',
    thumbnail: '/api/placeholder/400/225',
    attendees: 1156,
    rating: 4.9,
    featured: true,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing webinars to avoid duplicates
    await Webinar.deleteMany({});
    console.log('Cleared existing webinars');

    // Insert new webinars
    await Webinar.insertMany(webinars);
    console.log('Webinars seeded successfully');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Seeding error:', err);
  }
}

seed();
// Temporary data entry to test the seeding process