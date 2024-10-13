import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail"; // Import JobDetail component
import Jobs from "./pages/Jobs"; // Import Jobs component
import About from "./pages/About"; // Import About component
import Contact from "./pages/Contact"; // Import Contact component
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import PrivacyPolicy component
import TermsOfService from "./pages/TermsOfService"; // Import TermsOfService component
import Footer from "./components/Footer";
import jobs from "./jobData";
import Profile from "./pages/Profile";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Home jobs={jobs} />} />{" "}
            {/* Pass jobs to Home */}
            <Route path="/jobs" element={<Jobs />} />
            <Route
              path="/jobs/:jobId"
              element={<JobDetail jobs={jobs} />}
            />{" "}
            {/* Pass jobs to JobDetail */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Route for Contact */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* Route for Privacy Policy */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/profile" element={<Profile />} />
            {/* Route for Terms of Service */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
