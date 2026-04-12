import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { sendMyEmail } from "./service/mailService";
import { toast } from "react-toastify";
import DarkVeil from "./ui/DarkVeil";

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
      toast.success("Message sent! I'll get back to you soon.", {
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
    background: "rgba(30, 30, 30, 0.4)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "0.75rem",
    color: "#f9fafb",
    outline: "none",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const focusHandlers = {
    onFocus: (e) => {
      e.currentTarget.style.borderColor = isDark
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 0.2)";
      e.currentTarget.style.background = isDark
        ? "rgba(40, 40, 40, 0.6)"
        : "rgba(255, 255, 255, 0.5)";
    },
    onBlur: (e) => {
      e.currentTarget.style.borderColor = isDark
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.05)";
      e.currentTarget.style.background = isDark
        ? "rgba(30, 30, 30, 0.4)"
        : "rgba(255, 255, 255, 0.3)";
    },
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 transition-colors duration-500 overflow-hidden bg-[#111111]">
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
      />
      <div className="max-w-2xl w-full space-y-8 animate-fade-up relative z-10">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight transition-colors duration-500 text-[#f9fafb]">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl font-light transition-colors duration-500 text-[#9ca3af]">
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
            className="w-full px-8 py-4 rounded-xl font-medium text-lg tracking-wide transition-all duration-300 backdrop-blur-md"
            style={{
              background: isDark
                ? "rgba(249, 250, 251, 0.9)"
                : "rgba(17, 24, 39, 0.9)",
              color: isDark ? "#111827" : "#f9fafb",
              opacity: isSending ? 0.7 : 1,
              cursor: isSending ? "not-allowed" : "pointer",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
            }}
            onMouseEnter={(e) => {
              if (!isSending) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 10px 20px rgba(0,0,0,0.4)"
                  : "0 10px 20px rgba(0,0,0,0.1)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
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
