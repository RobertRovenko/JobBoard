import React from "react";

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-indigo-600 py-10"> {/* Gradient background */}
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay */}
      <div className="container mx-auto px-4 relative z-10"> {/* Main content */}
        <section className="mb-10 text-center"> {/* Centered text */}
          <h2 className="text-3xl font-semibold mb-4 py-10 text-white">Our Mission</h2>
          <p className="text-lg text-white px-4 md:px-16"> {/* Added padding for readability */}
            At JobBoard, we strive to connect job seekers with their dream opportunities while providing employers a seamless platform to find the best talent. Our goal is to empower individuals to find fulfilling careers and to help businesses build strong, diverse teams.
          </p>
        </section>

        <section className="mb-10 text-center"> {/* Centered text */}
          <h2 className="text-3xl font-semibold mb-4 text-white">Meet the Team</h2>
          <div className="flex justify-center mb-4">
            {/* Team member card */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-64">
              <img
                src="/images/man.png"
                alt="Robert"
                className="h-24 w-24 rounded-full mb-2"
              />
              <p className="font-semibold text-gray-800">Robert Falkbäck</p>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-sm text-gray-600 mt-2 text-center">
               Dedicated to transform the job search experience for both job seekers and employers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 text-center"> {/* Centered text */}
          <h2 className="text-3xl font-semibold mb-4 text-white">Why Choose Us?</h2>
          <ul className="ml-5 text-white px-4 md:px-16"> {/* Added padding for readability */}
            <li>🌟 Comprehensive job listings tailored to your skills</li>
            <li>🌟 User-friendly interface designed for ease of use</li>
            <li>🌟 Advanced filtering options to find the right fit</li>
            <li>🌟 Community support and resources for career growth</li>
          </ul>
        </section>

        <section className="mb-10 text-center"> {/* Centered text */}
          <h2 className="text-3xl font-semibold mb-4 text-white">Testimonials</h2>
          <blockquote className="italic text-white mb-4 px-4 md:px-16">
            "This platform helped me find my dream job!" - <strong>Happy User</strong>
          </blockquote>
          <blockquote className="italic text-white mb-4 px-4 md:px-16">
            "An excellent resource for job seekers and employers alike." - <strong>Satisfied Recruiter</strong>
          </blockquote>
        </section>

        <section className="mb-10 text-center"> {/* Centered text */}
          <h2 className="text-3xl font-semibold mb-4 text-white">Become a Publisher</h2>
          <p className="text-white mb-4 px-4 md:px-16">
            You can also apply to become a publisher on our platform! As a publisher, you'll have the opportunity to connect with potential hires directly and showcase your company’s job openings.
          </p>
          <p className="text-white px-4 md:px-16">
            Interested in reaching a wider audience? You can pay to display ads on our site to promote your job listings and attract more candidates!
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;
