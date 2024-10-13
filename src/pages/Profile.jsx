import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Profile = () => {
  // Authentication and User State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // "hiring" or "looking"
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'looking for work', // Default role
  });

  // Example job applications or listings
  const jobApplications = [
    { id: 1, title: 'Software Engineer' },
    { id: 2, title: 'Product Manager' },
  ];

  const jobListings = [
    { id: 1, title: 'Data Scientist' },
    { id: 2, title: 'UX Designer' },
  ];

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submit (Signup/Login)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Simulate Signup
      if (!formData.name || !formData.email || !formData.password) {
        alert('Please fill in all fields.');
        return;
      }
      const newUser = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
      };
      setUser(newUser);
      setRole(newUser.role);
      setIsLoggedIn(true);
      // Reset form
      setFormData({ name: '', email: '', password: '', role: 'looking for work' });
    } else { 
      // Simulate Login
      if (!formData.email || !formData.password) {
        alert('Please enter your email and password.');
        return;
      }
      // For simulation, any email/password combination is accepted
      const existingUser = {
        name: 'John Doe',
        email: formData.email,
        role: 'looking for work', // Change as needed for testing
      };
      setUser(existingUser);
      setRole(existingUser.role);
      setIsLoggedIn(true);
      // Reset form
      setFormData({ name: '', email: '', password: '', role: 'looking for work' });
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setRole(null);
  };

  // Handle Delete Account
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Account deleted');
      handleLogout();
    }
  };

  // Toggle Edit Mode
  // Toggle Edit Mode
const handleEditDetails = () => {
    // Populate formData with current user data when entering edit mode
    if (!isEditing) {
      setFormData({
        name: user.name,
        email: user.email,
        role: role,
      });
    }
    setIsEditing(!isEditing);
  };
  
  // Save Changes and Exit Edit Mode
  const handleSaveDetails = () => {
    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
      role: formData.role,
    });
    setIsEditing(false);
  };
  



  // Handle Forgot Password
  const handleForgotPassword = () => {
    const email = prompt('Please enter your email address for password recovery:');
    if (email) {
      alert(`Password recovery instructions sent to ${email}.`);
    }
  };

  // Animation Variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Get jobs based on user role
  const jobsList = role === 'hiring' ? jobListings : jobApplications;

  return (
    <section className="relative bg-gradient-to-r from-purple-800 to-indigo-600 py-40 pt-20 overflow-hidden z-0 min-h-screen">
         <div className="absolute top-0 left-0 w-full h-full">
        {/* Circle */}
        <motion.div 
          className="hidden lg:block absolute w-64 h-64 bg-yellow-300 rounded-full opacity-70"
          initial={{ scale: 0.5, rotate: 45 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ top: '20%', left: '10%' }}
        />
        {/* Square */}
        <motion.div 
          className="hidden lg:block absolute w-48 h-48 bg-red-400 opacity-70"
          initial={{ scale: 0.5, rotate: -45 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ bottom: '20%', right: '10%' }}
        />
        {/* Triangle */}
        <motion.div 
          className="hidden lg:block absolute w-0 h-0 border-l-32 border-l-transparent border-r-32 border-r-transparent border-b-64 border-b-blue-400 opacity-70"
          initial={{ scale: 0.5, y: -30 }} 
          animate={{ scale: 1, y: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
        {/* Additional Circle */}
        <motion.div 
          className="hidden lg:block absolute w-32 h-32 bg-green-300 rounded-full opacity-60"
          initial={{ scale: 0.5, rotate: 30 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ top: '40%', right: '20%' }}
        />
        {/* Additional Square */}
        <motion.div 
          className="hidden lg:block absolute w-56 h-56 bg-pink-400 opacity-70"
          initial={{ scale: 0.5, rotate: 20 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ bottom: '30%', left: '20%' }}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay */}

      <div className="container mx-auto px-4 text-center relative z-10">
        {!isLoggedIn ? (
          <motion.div
            className="max-w-lg mx-auto bg-white p-10 shadow-lg rounded-lg"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome to JobBoard</h1>
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setIsSignup(false)}
                className={`px-4 py-2 mr-2 rounded-t-lg ${!isSignup ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Login
              </button>
              <button
                onClick={() => setIsSignup(true)}
                className={`px-4 py-2 rounded-t-lg ${isSignup ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Sign Up
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && (
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                    placeholder="Enter your name"
                    required={isSignup}
                  />
                </div>
              )}
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {isSignup && (
                <div>
                  <label className="block text-gray-700">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                  >
                    <option value="looking">Looking for a job</option>
                    <option value="hiring">Hiring</option>
                  </select>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                {isSignup ? 'Sign Up' : 'Login'}
              </button>
            </form>
            <button onClick={handleForgotPassword} className="text-indigo-600 hover:underline mt-4">
              Forgot Password?
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-lg mx-auto bg-white p-10 shadow-lg rounded-lg"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h1>

            <div className="text-gray-700 mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                name="name"
                value={isEditing ? formData.name : user.name}
                onChange={isEditing ? handleChange : null}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                readOnly={!isEditing}
              />
            </div>

            <div className="text-gray-700 mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                name="email"
                value={isEditing ? formData.email : user.email}
                onChange={isEditing ? handleChange : null}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                readOnly={!isEditing}
              />
            </div>

            <div className="text-gray-700 mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                name="role"
                value={isEditing ? formData.role : role}
                onChange={isEditing ? handleChange : null}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                disabled={!isEditing}
              >
                <option value="looking">Looking for a job</option>
                <option value="hiring">Hiring</option>
              </select>
            </div>

            {isEditing ? (
              <button
                onClick={handleSaveDetails}
                className="text-blue-600 hover:underline"
              >
                Save Details
              </button>
            ) : (
              <button
                onClick={handleEditDetails}
                className="text-blue-600 hover:underline"
              >
                Edit Details
              </button>
            )}

            <div className="mt-10">
              <h2 className="text-xl font-bold">Your {role === 'hiring' ? 'Job Listings' : 'Job Applications'}</h2>
              <ul className="mt-4 space-y-2">
                {jobsList.map((job) => (
                  <li key={job.id} className="bg-gray-100 p-2 rounded shadow">
                    {job.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700 transition duration-200 ease-in-out"
              >
                Delete Account
              </button>

              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200 ease-in-out"
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Profile;
