import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const TermsOfService = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-indigo-600 py-20">
      <div className="absolute inset-0 bg-black opacity-70" /> {/* Overlay */}

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-2xl font-bold mb-4 text-white">Terms of Service</h1>
        <p className="mb-4 text-gray-200">
          Welcome to JobBoard! By using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Acceptance of Terms</h2>
        <p className="mb-4 text-gray-200">
          By accessing or using our services, you agree to these Terms of Service and our Privacy Policy. If you do not agree with these terms, you must not use our services.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">User Accounts</h2>
        <p className="mb-4 text-gray-200">
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Prohibited Activities</h2>
        <p className="mb-4 text-gray-200">You agree not to engage in any of the following prohibited activities:</p>
        <ul className="list-disc list-inside mb-4 text-gray-200">
          <li>Using the service for any unlawful purpose</li>
          <li>Interfering with or disrupting the security of our services</li>
          <li>Attempting to gain unauthorized access to our systems or networks</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-white">Limitation of Liability</h2>
        <p className="mb-4 text-gray-200">
          In no event shall JobBoard be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Changes to These Terms</h2>
        <p className="mb-4 text-gray-200">
          We may update our Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on our website.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Contact Us</h2>
        <p className="text-gray-200">
          If you have any questions about these Terms of Service, please <Link to="/contact" className="text-blue-300">contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
