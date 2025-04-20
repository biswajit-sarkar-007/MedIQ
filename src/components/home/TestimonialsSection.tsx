import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'MedIQ helped me understand my symptoms when I was feeling anxious about what was wrong. The doctor it recommended was perfect for my situation.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    text: 'As someone with chronic health issues, I appreciate how MedIQ lets me track my symptoms over time. It gives me better conversations with my doctors.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 3,
    name: 'Amelia Chen',
    text: 'The symptom checker is surprisingly accurate. It identified that I needed immediate care for what turned out to be appendicitis. Possibly saved my life!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Discover how MedIQ is helping people take control of their health journey.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center -ml-5 md:-ml-10">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-neutral-700 shadow-md text-primary-500 hover:bg-primary-50 dark:hover:bg-neutral-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center -mr-5 md:-mr-10">
            <button
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-neutral-700 shadow-md text-primary-500 hover:bg-primary-50 dark:hover:bg-neutral-600"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonials */}
          <div className="overflow-hidden px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-neutral-50 dark:bg-neutral-700 rounded-lg shadow-card p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={18} />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic text-neutral-700 dark:text-neutral-200 mb-4">
                      "{testimonials[current].text}"
                    </blockquote>
                    
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {testimonials[current].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  current === index 
                    ? 'bg-primary-500' 
                    : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;