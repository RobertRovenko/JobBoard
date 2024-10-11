import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail"; // Import JobDetail component
import Jobs from "./pages/Jobs"; // Import Jobs component
import About from "./pages/About"; // Import About component
import Footer from "./components/Footer";
import jobs from "./jobData";
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
            <Route path="/jobs" element={<Jobs />} /> {/* Route for Jobs */}
            <Route path="/jobs/:jobId" element={<JobDetail jobs={jobs} />} />
            {/* Pass jobs to JobDetail */}
            <Route path="/about" element={<About />} /> {/* Route for About */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
