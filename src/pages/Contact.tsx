import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PaperAirplaneIcon, EnvelopeIcon, PhoneIcon, ClockIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { sendContactForm } from '../services/contactApi';

interface ContactFormInputs {
  name: string;
  email: string;
  subject: 'Bug' | 'Feedback' | 'Appointment' | 'Other';
  message: string;
}

const SUPPORT_EMAIL = 'support@mediq.ai';
const SUPPORT_PHONE = '+91 9876543210';
const SUPPORT_HOURS = 'Mon–Fri | 10AM–6PM IST';

const SUBJECT_OPTIONS = [
  { value: 'Bug', label: 'Bug' },
  { value: 'Feedback', label: 'Feedback' },
  { value: 'Appointment', label: 'Appointment' },
  { value: 'Other', label: 'Other' },
];

export default function Contact() {
  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const res = await sendContactForm(data);
      if (res.success) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br blue via-white to-green-50 flex flex-col items-center py-12 px-4 relative overflow-hidden">
      {/* Floating message icons */}
      <ChatBubbleLeftEllipsisIcon className="w-16 h-16 text-blue-300 absolute top-10 left-10 animate-pulse opacity-30" />
      <PaperAirplaneIcon className="w-20 h-20 text-pink-300 absolute bottom-10 right-10 rotate-12 animate-float opacity-30" />
      <div className="max-w-2xl w-full z-10">
        {/* Hero Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <PaperAirplaneIcon className="w-8 h-8 text-blue-600 animate-bounce" />
            We’re here to help.
          </h1>
          <p className="text-lg text-gray-600">Get in touch with our support team.</p>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-blue rounded-2xl shadow-lg border border-blue-100 p-8 space-y-6">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input {...register('name', { required: 'Name is required' })} className="input  text-black input-bordered w-full" placeholder="Your Name" />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} className="input text-black input-bordered w-full" placeholder="you@email.com" />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Subject</label>
            <Controller
              name="subject"
              control={control}
              defaultValue={SUBJECT_OPTIONS[0].value}
              render={({ field }) => (
                <select {...field} className="input text-black input-bordered w-full">
                  {SUBJECT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea {...register('message', { required: 'Message is required' })} rows={4} className="input input-bordered w-full" placeholder="Type your message..." />
            {errors.message && <span className="text-red-500 text-black text-sm">{errors.message.message}</span>}
          </div>
          <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
            <PaperAirplaneIcon className="w-5 h-5" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {/* Support Info Box */}
        <div className="mt-8 bg-gradient-to-r blue to-green-100 rounded-xl p-6 flex items-center gap-6 shadow border border-blue-100">
          <div className="flex-shrink-0 flex flex-col gap-2 items-center">
            <EnvelopeIcon className="w-7 h-7 text-blue-500" />
            <PhoneIcon className="w-7 h-7 text-green-500" />
            <ClockIcon className="w-7 h-7 text-pink-500" />
          </div>
          <div>
            <div className="font-semibold text-lg flex items-center gap-2"><EnvelopeIcon className="w-5 h-5" /> {SUPPORT_EMAIL}</div>
            <div className="font-semibold text-lg flex items-center gap-2"><PhoneIcon className="w-5 h-5" /> {SUPPORT_PHONE}</div>
            <div className="text-gray-600 flex items-center gap-2"><ClockIcon className="w-5 h-5" /> {SUPPORT_HOURS}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this to your CSS (e.g., globals.css) for floating animation:
// .animate-float { animation: float 3s ease-in-out infinite; }
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
