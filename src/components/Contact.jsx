import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { sendMyEmail } from "./helper/mail";
import { toast } from "react-toastify";

const Contact = () => {
  const { isDark } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendMyEmail(formData);
      toast.success("✅ Message sent! I'll get back to you soon.", {
        theme: isDark ? "dark" : "light",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("❌ Something went wrong. Please try again.", {
        theme: isDark ? "dark" : "light",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "1rem 1.5rem",
    background: isDark ? "#1a1a1a" : "#ffffff",
    border: `2px solid ${isDark ? "#2d2d2d" : "#e5e7eb"}`,
    borderRadius: "0.375rem",
    color: isDark ? "#f9fafb" : "#111827",
    outline: "none",
    transition: "border-color 0.3s, background 0.5s, color 0.5s",
    fontSize: "1rem",
  };

  const focusHandlers = {
    onFocus: (e) => {
      e.currentTarget.style.borderColor = isDark ? "#f9fafb" : "#111827";
    },
    onBlur: (e) => {
      e.currentTarget.style.borderColor = isDark ? "#2d2d2d" : "#e5e7eb";
    },
  };

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center px-8 transition-colors duration-500"
      style={{ background: isDark ? "#111111" : "#f9fafb" }}
    >
      <div className="max-w-2xl w-full space-y-8 animate-fade-up">
        <div className="text-center space-y-4">
          <h1
            className="text-5xl md:text-7xl font-semibold tracking-tight transition-colors duration-500"
            style={{ color: isDark ? "#f9fafb" : "#111827" }}
          >
            Get In Touch
          </h1>
          <p
            className="text-lg md:text-xl font-light transition-colors duration-500"
            style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
          >
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
              disabled={isSending}
              style={inputStyle}
              {...focusHandlers}
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
              disabled={isSending}
              style={inputStyle}
              {...focusHandlers}
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
              disabled={isSending}
              style={{ ...inputStyle, resize: "none" }}
              {...focusHandlers}
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full px-8 py-4 rounded-md font-medium text-lg tracking-wide transition-all duration-300"
            style={{
              background: isDark ? "#f9fafb" : "#111827",
              color: isDark ? "#111827" : "#f9fafb",
              opacity: isSending ? 0.7 : 1,
              cursor: isSending ? "not-allowed" : "pointer",
            }}
          >
            {isSending ? (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <span className="spinner" /> SENDING…
              </span>
            ) : (
              "SEND MESSAGE"
            )}
          </button>
        </form>

        <div className="flex justify-center gap-8 pt-6">
          {[
            { label: "Email", href: `mailto:${import.meta.env.VITE_EMAIL}` },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "GitHub", href: "https://github.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: isDark ? "#6b7280" : "#4b5563" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark ? "#f9fafb" : "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? "#6b7280" : "#4b5563";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          0%   { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1s ease-out 0.2s both;
        }
        .spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        input::placeholder,
        textarea::placeholder {
          color: ${isDark ? "#4b5563" : "#9ca3af"};
        }
        input:disabled,
        textarea:disabled {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default Contact;
