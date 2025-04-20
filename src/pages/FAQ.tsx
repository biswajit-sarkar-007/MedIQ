import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon, CheckCircleIcon, LockClosedIcon, CalendarIcon, CurrencyDollarIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Is the symptom checker 100% accurate?',
    answer: 'The AI offers suggestions, not diagnoses. Always consult a professional.',
    icon: <QuestionMarkCircleIcon className="w-6 h-6 text-blue-500" />,
  },
  {
    question: 'Can I consult a doctor online?',
    answer: 'Yes. We offer tele-consultation appointments depending on doctor availability.',
    icon: <PhoneIcon className="w-6 h-6 text-green-500" />,
  },
  {
    question: 'How is my data stored?',
    answer: 'Data is encrypted and never shared without consent.',
    icon: <LockClosedIcon className="w-6 h-6 text-purple-500" />,
  },
  {
    question: 'How do I cancel my appointment?',
    answer: 'You can cancel via your dashboard or contact support for help.',
    icon: <CalendarIcon className="w-6 h-6 text-yellow-500" />,
  },
  {
    question: 'Is this platform free?',
    answer: 'Most features are free. Some premium services may require payment.',
    icon: <CurrencyDollarIcon className="w-6 h-6 text-pink-500" />,
  },
];

export default function Faq() {
  return (
    <div className="min-h-screen bg-gradient-to-br  blue via-white to-green-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <QuestionMarkCircleIcon className="w-8 h-8 text-blue-600 animate-bounce" />
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">Your concerns answered instantly.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Disclosure key={i} as={Fragment}>
              {({ open }) => (
                <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100">
                  <Disclosure.Button className="flex items-center w-full px-6 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                    <span className="mr-3">{faq.icon}</span>
                    <span className="flex-1 text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronUpIcon
                      className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-y-0 opacity-0"
                    enterTo="transform scale-y-100 opacity-100"
                    leave="transition duration-200 ease-in"
                    leaveFrom="transform scale-y-100 opacity-100"
                    leaveTo="transform scale-y-0 opacity-0"
                  >
                    <Disclosure.Panel static className="px-8 pb-6 text-gray-700 text-base">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <span>{faq.answer}</span>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="mb-2 text-gray-700 text-lg font-medium">Still need help?</div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-semibold shadow hover:from-blue-700 hover:to-green-600 transition text-lg"
          >
            <PhoneIcon className="w-6 h-6" /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
