import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { ArrowLeftOnRectangleIcon as LogoutIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon as ExclamationIcon } from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';

interface SymptomData {
  date: string;
  input: string;
  result: string;
  severity: string;
}

interface Stat {
  label: string;
  value: string | number;
}

const dummySymptomData: SymptomData[] = [
  { date: '2025-04-19', input: 'Cough, Fever', result: 'Flu', severity: '🟡 Moderate' },
  { date: '2025-04-15', input: 'Headache', result: 'Tension', severity: '🟢 Mild' },
];

const stats: Stat[] = [
  { label: 'Total Symptoms Checked', value: 12 },
  { label: 'Appointments Booked', value: 3 },
  { label: 'Last Check Result', value: 'Cold' },
  { label: 'Upcoming Appointment', value: '2025-04-25 10:00 AM' },
];

export default function Dashboard(): JSX.Element {
  const [userName, setUserName] = useState<string>('User');
  const [password, setPassword] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDetail, setSelectedDetail] = useState<SymptomData | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [emailNotifications, setEmailNotifications] = useState<boolean>(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  // Save profile changes
  const handleSaveProfile = () => {
    toast.success('Profile updated successfully!');
  };

  // Book appointment
  const handleBookAppointment = () => {
    if (!appointmentDate) {
      toast.error('Please select a date for your appointment.');
      return;
    }
    toast.success(`Appointment booked for ${appointmentDate}`);
    setIsBookingOpen(false);
    setAppointmentDate('');
  };

  // Logout
  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggingOut(false);
      toast('Logged out successfully!', { icon: '👋' });
      // Optionally redirect or clear user state here
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  via-white dark:via-black to-green-50 dark:to-green-900 p-4 md:p-8 space-y-8">
      <Toaster position="top-right" />
      {/* Header & Stats */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <UserCircleIcon className="w-10 h-10 text-blue-600" />
          <h1 className="text-3xl font-bold tracking-tight">Welcome, {userName}! <span className="text-lg font-normal">Stay healthy today.</span></h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-white/90 shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow border border-blue-100"
            >
              {i === 0 && <ExclamationIcon className="w-6 h-6 text-yellow-400 mb-2" />}
              {i === 1 && <CalendarIcon className="w-6 h-6 text-green-500 mb-2" />}
              {i === 2 && <CheckCircleIcon className="w-6 h-6 text-blue-500 mb-2" />}
              {i === 3 && <CalendarIcon className="w-6 h-6 text-purple-500 mb-2" />}
              <div className="text-sm text-gray-600 font-medium">{s.label}</div>
              <div className="text-2xl font-bold mt-1 text-gray-900">{s.value}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Symptom History */}
      <section className="space-y-2">
        <div className="flex items-center gap-2">
          <ExclamationIcon className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-semibold">Symptom History</h2>
        </div>
        <div className="bg-black shadow rounded-xl overflow-x-auto border border-gray-100">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 font-semibold text-gray-700">Date</th>
                <th className="p-3 font-semibold text-gray-700">Input</th>
                <th className="p-3 font-semibold text-gray-700">Result</th>
                <th className="p-3 font-semibold text-gray-700">Severity</th>
                <th className="p-3 font-semibold text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              {dummySymptomData.map((row, idx) => (
                <tr key={idx} className="border-t hover:bg-blue-50/50 transition">
                  <td className="p-3">{row.date}</td>
                  <td className="p-3">{row.input}</td>
                  <td className="p-3">{row.result}</td>
                  <td className="p-3">{row.severity}</td>
                  <td className="p-3">
                    <button
                      className="text-blue-600 underline hover:text-blue-800 font-medium"
                      onClick={() => { setSelectedDetail(row); setIsModalOpen(true); }}
                    >View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Appointments */}
      <section className="space-y-2">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Appointments</h2>
        </div>
        <div className="bg-white/90 shadow rounded-xl p-6 border border-gray-100">
          {/* Placeholder for calendar - replace with real calendar if available */}
          <div className="h-64 border rounded flex items-center justify-center text-gray-400 bg-gray-50">
            <CalendarIcon className="w-12 h-12 mr-2" />
            <span className="text-lg">Calendar Coming Soon</span>
          </div>
        </div>
        <button
          className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-semibold shadow hover:from-blue-700 hover:to-green-600 transition"
          onClick={() => setIsBookingOpen(true)}
        >
          Book New Appointment
        </button>
      </section>

      {/* Book Appointment Modal */}
      <Transition show={isBookingOpen} as={React.Fragment}>
        <Dialog open={isBookingOpen} onClose={() => setIsBookingOpen(false)} className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="bg-white rounded-2xl p-8 z-30 w-full max-w-md shadow-lg border border-blue-200">
              <Dialog.Title className="text-xl font-bold mb-4">Book Appointment</Dialog.Title>
              <label className="block mb-2 text-sm font-medium">Select Date</label>
              <input
                type="date"
                className="block w-full border rounded p-2 mb-4"
                value={appointmentDate}
                onChange={e => setAppointmentDate(e.target.value)}
              />
              <div className="flex gap-2 mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={handleBookAppointment}
                >Book</button>
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setIsBookingOpen(false)}
                >Cancel</button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Profile Settings */}
      <section className="space-y-2">
        <div className="flex items-center gap-2">
          <UserCircleIcon className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-semibold">Profile Settings</h2>
        </div>
        <div className="bg-white/90 shadow rounded-xl p-6 space-y-6 border border-gray-100">
          <div>
            <label className="block  text-sm font-medium">Name</label>
            <input
              type="text"
              className="mt-1 text-black block w-full border rounded p-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Your name"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 text-black block w-full border rounded p-2 focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={emailNotifications}
                onChange={e => setEmailNotifications(e.target.checked)}
              />
              <span className="ml-2 text-sm">Email Notifications</span>
            </label>
          </div>
          <div className="flex gap-3">
            <button
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-xl font-semibold shadow hover:from-green-700 hover:to-blue-600 transition"
              onClick={handleSaveProfile}
            >
              Save Changes
            </button>
            <button
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold shadow hover:from-red-600 hover:to-pink-600 transition flex items-center gap-2"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogoutIcon className="w-5 h-5" />
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <Transition show={isModalOpen} as={React.Fragment}>
        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-30 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            <div className="bg-white rounded-2xl p-8 z-40 w-full max-w-md shadow-lg border border-blue-200">
              <Dialog.Title className="text-xl font-bold mb-4 flex items-center gap-2">
                <ExclamationIcon className="w-6 h-6 text-yellow-500" />
                Symptom Details
              </Dialog.Title>
              {selectedDetail && (
                <div className="mt-4 space-y-2">
                  <p><strong>Date:</strong> {selectedDetail.date}</p>
                  <p><strong>Input:</strong> {selectedDetail.input}</p>
                  <p><strong>Result:</strong> {selectedDetail.result}</p>
                  <p><strong>Severity:</strong> {selectedDetail.severity}</p>
                </div>
              )}
              <button
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setIsModalOpen(false)}
              >Close</button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
