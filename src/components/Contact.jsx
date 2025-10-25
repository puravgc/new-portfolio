import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 bg-gray-50">
      <div className="max-w-2xl w-full space-y-8 animate-fade-up">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            Let's work together on your next project
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white rounded-md font-medium text-lg hover:bg-gray-800 transition-all duration-300 tracking-wide"
          >
            SEND MESSAGE
          </button>
        </form>

        <div className="flex justify-center gap-8 pt-6">
          <a
            href="mailto:your.email@example.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 1s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Contact;
