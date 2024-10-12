import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const PrivacyPolicy = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-indigo-600 py-20">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-2xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="mb-4 text-gray-200">
          At JobBoard, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Information We Collect</h2>
        <p className="mb-4 text-gray-200">
          We may collect personal information, such as your name, email address, and phone number, when you register for an account, apply for jobs, or subscribe to our newsletter.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">How We Use Your Information</h2>
        <p className="mb-4 text-gray-200">We use the information we collect to:</p>
        <ul className="list-disc list-inside mb-4 text-gray-200">
          <li>Provide and maintain our services</li>
          <li>Communicate with you</li>
          <li>Improve our website and services</li>
          <li>Send you promotional materials</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-white">Data Security</h2>
        <p className="mb-4 text-gray-200">
          We implement various security measures to protect your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Changes to This Policy</h2>
        <p className="mb-4 text-gray-200">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Contact Us</h2>
        <p className="text-gray-200">
        If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-blue-300">contact us</Link>.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-30" /> {/* Optional overlay */}
    </div>
  );
};

export default PrivacyPolicy;
