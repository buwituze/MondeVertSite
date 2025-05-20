"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contactus"
      className="w-full bg-gradient-to-br from-purple-50 to-white py-16 relative overflow-hidden"
    >
      {/* Abstract artistic background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 translate-x-1/4 translate-y-1/4 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-100 rounded-full opacity-40 blur-lg"></div>

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

      <div className="container ml-13 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-3">
            <span className="w-10 h-1 bg-[#e3c31e] absolute -top-6 left-1/2 transform -translate-x-1/2"></span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Get In Touch
            </h2>
            <span className="w-20 h-1 bg-[#e3c31e] absolute -bottom-3 left-1/2 transform -translate-x-1/2"></span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Have questions about our events, workshops, or how to get involved
            with MondeVert? We'd love to hear from you. Reach out and let's
            create a sustainable future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4 hover:shadow-md transition-shadow border-l-4 border-[#e3c31e]">
              <div className="bg-yellow-50 p-3 rounded-full">
                <Mail className="h-6 w-6 text-[#e3c31e]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm mb-2">
                  For general inquiries and information
                </p>
                <a
                  href="mailto:mondevert.solutions@gmail.com"
                  className="text-[#e3c31e] hover:text-yellow-600 font-medium"
                >
                  mondevert.solutions@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4 hover:shadow-md transition-shadow border-l-4 border-red-400">
              <div className="bg-red-50 p-3 rounded-full">
                <Phone className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Mon-Fri from 9am to 5pm
                </p>
                <a
                  href="tel:+250783446127"
                  className="text-red-400 hover:text-red-500 font-medium"
                >
                  +250 783446127
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4 hover:shadow-md transition-shadow border-l-4 border-purple-400">
              <div className="bg-purple-50 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-2">Our headquarters</p>
                <p className="text-gray-700">Kigali, Rwanda</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-t-4 border-[#e3c31e]">
              <h3 className="font-semibold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-yellow-50 p-3 rounded-full hover:bg-yellow-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e3c31e"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-purple-50 p-3 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#9333ea"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-red-50 p-3 rounded-full hover:bg-red-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#f87171"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-yellow-50 p-3 rounded-full hover:bg-yellow-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e3c31e"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 w-195"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-[#e3c31e]" />
                Send Us a Message
              </h3>

              {formStatus.isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-[#e3c31e] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Message sent successfully!
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              ) : formStatus.isError ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800">
                      Something went wrong!
                    </h4>
                    <p className="text-red-600 text-sm">
                      Please try again or contact us directly via email.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
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
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Email
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
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
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
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e3c31e] focus:border-[#e3c31e] outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full bg-gradient-to-r from-[#e3c31e] to-yellow-500 hover:from-yellow-500 hover:to-[#e3c31e] text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center shadow-md hover:shadow-lg"
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
              )}
            </div>
          </motion.div>
        </div>

        {/* Google Maps or Image Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden h-80 border-t-4 border-[#e3c31e]"
        >
          {/* Replace with actual Google Maps embed or use a static image map */}
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-purple-50 flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-16 h-16 rounded-full bg-[#e3c31e] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">
                  Interactive map will appear here. Replace with your Google
                  Maps embed code.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  MondeVert Headquarters, Kigali, Rwanda
                </p>
                <button className="mt-4 px-6 py-2 bg-white text-[#e3c31e] border border-[#e3c31e] rounded-full text-sm font-medium hover:bg-[#e3c31e] hover:text-white transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
