import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import Dashboard from './pages/Dashboard';
import Faq from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
            <Navbar />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/symptom-check" element={<SymptomChecker />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/appointment/:id" element={<Appointment />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                {/* Add routes for other pages as they're implemented */}
              </Routes>
            </main>
            
            <Footer />
          </div>
          
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: '8px',
                background: '#333',
                color: '#fff',
              },
            }}
          />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;