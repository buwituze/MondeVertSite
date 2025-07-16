"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Handshake,
  Heart,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

// Type declaration for EmailJS
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: any
      ) => Promise<{ status: number }>;
    };
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
  });

  const [emailJSReady, setEmailJSReady] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    const initEmailJS = () => {
      if (typeof window !== "undefined" && window.emailjs) {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
          window.emailjs.init(publicKey);
          setEmailJSReady(true);
        } else {
          console.error(
            "EmailJS public key not found in environment variables"
          );
        }
      }
    };

    if (typeof window !== "undefined" && window.emailjs) {
      initEmailJS();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.async = true;
      script.onload = initEmailJS;
      script.onerror = () => {
        console.error("Failed to load EmailJS");
        setFormStatus((prev) => ({ ...prev, isError: true }));
      };
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return { isValid: false, error: "All fields are required" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Please enter a valid email address" };
    }

    if (name.trim().length < 2) {
      return {
        isValid: false,
        error: "Name must be at least 2 characters long",
      };
    }

    if (message.trim().length < 10) {
      return {
        isValid: false,
        error: "Message must be at least 10 characters long",
      };
    }

    return { isValid: true };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    if (!emailJSReady) {
      console.error("EmailJS not initialized");
      setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration missing");
      }

      const templateParams = {
        name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        time: new Date().toLocaleString(),
        to_name: "MondeVert Team",
      };

      const response = await window.emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setFormStatus((prev) => ({ ...prev, isSubmitted: false }));
        }, 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, isError: false }));
      }, 5000);
    }
  };

  const talkAboutCards = [
    {
      title: "Our Solutions",
      icon: <Lightbulb className="h-12 w-12 stroke-1 text-[#00bf63]" />,
      color: "bg-[#ffd700]/35",
      hoverColor: "hover:bg-gradient-to-r from-[#e3c31e] to-yellow-200",
    },
    {
      title: "Partnerships",
      icon: <Handshake className="h-12 w-12 stroke-1 text-[#00bf63]" />,
      color: "bg-[#ffd700]/35 ",
      hoverColor: "hover:bg-gradient-to-r from-[#e3c31e] to-yellow-200",
    },
    {
      title: "Volunteer",
      icon: <Heart className="h-12 w-12 stroke-1 text-[#00bf63]" />,
      color: "bg-[#ffd700]/35",
      hoverColor: "hover:bg-gradient-to-r from-[#e3c31e] to-yellow-200",
    },
    {
      title: "Enquiry",
      icon: <Mail className="h-12 w-12 stroke-1 text-[#00bf63]" />,
      color: "bg-[#ffd700]/35",
      hoverColor: "hover:bg-gradient-to-r from-[#e3c31e] to-yellow-200",
    },
  ];

  return (
    <section
      id="contactus"
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 xl:w-[100%] bg-white py-16 relative overflow-hidden"
    >
      {/* Abstract artistic background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-red-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-purple-100 rounded-full opacity-30 translate-x-1/4 translate-y-1/4 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-yellow-100 rounded-full opacity-40 blur-lg"></div>

      {/* Gold accent lines */}
      <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
      <div className="absolute right-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>

      {/* Gold dot pattern */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contactDotPattern"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#e3c31e" />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#contactDotPattern)"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="container relative z-10 w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Title, Description, Cards, Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Title and Description */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg">Let's talk about...</p>
            </div>

            {/* Talk About Cards */}
            <div className="grid grid-cols-2 gap-6">
              {talkAboutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${card.color} ${card.hoverColor} text-white p-8 rounded-lg  transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer flex flex-col items-center justify-center text-center space-y-4`}
                >
                  <h3 className="font-bold text-xl text-gray-900">
                    {card.title}
                  </h3>
                  {card.icon}
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-yellow-50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#e3c31e]" />
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Email</p>
                  <a
                    href="mailto:mondevert.solutions@gmail.com"
                    className="text-[#e3c31e] hover:text-yellow-600 font-medium text-sm break-all"
                  >
                    mondevert.solutions@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-green-50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#00bf63]" />
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Phone</p>
                  <a
                    href="tel:+250783446127"
                    className="text-[#00bf63] hover:text-green-600 font-medium text-sm"
                  >
                    +250 783446127
                  </a>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-purple-50 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Location</p>
                  <p className="text-purple-400 font-medium text-sm">
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white rounded-xl border-5 border-gray-100 p-8 relative overflow-hidden h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              {/* Alert Messages */}
              {formStatus.isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start mb-6"
                >
                  <CheckCircle className="h-5 w-5 text-[#00bf63] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Message sent successfully!
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              {formStatus.isError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start mb-6"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-red-800">
                      Something went wrong!
                    </h4>
                    <p className="text-red-600 text-sm">
                      Please try again or contact us directly via email.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e3c31e] focus:border-[#e3c31e] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e3c31e] focus:border-[#e3c31e] outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e3c31e] focus:border-[#e3c31e] outline-none transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e3c31e] focus:border-[#e3c31e] outline-none transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting || !emailJSReady}
                  className="w-full bg-gradient-to-r from-[#e3c31e] to-yellow-500 hover:from-yellow-500 hover:to-[#e3c31e] text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
