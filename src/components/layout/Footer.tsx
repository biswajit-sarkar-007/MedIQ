import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import MedIQLogo from '../common/MedIQLogo';
import Button from '../common/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-2">
                <MedIQLogo size={40} />
              </div>
              <span className="text-xl font-bold text-white">MedIQ</span>
            </Link>
            <p className="text-neutral-300 mb-4">
              Your trusted partner for reliable health insights and connecting with healthcare professionals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/symptom-check" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

{/* Contact Info */}
<div>
  <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
  <div className="space-y-3">
    <div className="flex items-start">
      <Mail size={18} className="text-primary-400 mt-1 mr-2" />
      <a
        href="mailto:support@mediq.health"
        className="text-neutral-300 hover:underline hover:text-neutral-300"
      >
        support@mediq.health
      </a>
    </div>
    <div className="flex items-start">
      <Phone size={18} className="text-primary-400 mt-1 mr-2" />
      <a
        href="tel:+15551234567"
        className="text-neutral-300 hover:underline hover:text-neutral-300"
      >
        +1 (555) 123-4567
      </a>
    </div>
    <div className="flex items-start">
      <MapPin size={18} className="text-primary-400 mt-1 mr-2" />
      <span className="text-neutral-300">
        123 Health Avenue, Medical District
        <br />
        San Francisco, CA 94101
      </span>
    </div>
  </div>
</div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-neutral-300 mb-3">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <Button fullWidth>Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} MedIQ Health. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;