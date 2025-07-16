"use client";
import { useState, useEffect } from "react";
import { Check, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

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

export default function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: "",
    skills: "",
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, interests, skills } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !interests.trim() ||
      !skills.trim()
    ) {
      return { isValid: false, error: "All fields are required" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Please enter a valid email address" };
    }

    if (firstName.trim().length < 2) {
      return {
        isValid: false,
        error: "First name must be at least 2 characters long",
      };
    }

    if (lastName.trim().length < 2) {
      return {
        isValid: false,
        error: "Last name must be at least 2 characters long",
      };
    }

    if (skills.trim().length < 10) {
      return {
        isValid: false,
        error:
          "Please provide more details about your skills and interests (at least 10 characters)",
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
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_VOLUNTEER_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration missing");
      }

      const templateParams = {
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        from_email: formData.email.trim(),
        phone: formData.phone.trim(),
        interests: formData.interests.trim(),
        skills: formData.skills.trim(),
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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interests: "",
          skills: "",
        });

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

  return (
    <section id="volunteer" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="ml-20">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Volunteer With Us
            </h2>
            <p className="mb-4  font-sans text-muted-foreground">
              Our volunteers are the creative force behind MondeVert. Join our
              team and contribute your unique artistic skills and environmental
              passion to our cause.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Current Opportunities</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">Workshop Facilitator</span>
                    <p className="font-sans text-sm text-muted-foreground">
                      Help lead our creative workshops on storytelling,
                      painting, or photography with an environmental focus.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">Environmental Artist</span>
                    <p className="font-sans text-sm text-muted-foreground">
                      Create murals, paintings, or other visual art that
                      communicates environmental messages.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">Digital Content Creator</span>
                    <p className="font-sans text-sm text-muted-foreground">
                      Help develop AR/VR experiences or other digital content
                      that educates about environmental issues.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">
                      Environmental Safari Guide
                    </span>
                    <p className="font-sans text-sm text-muted-foreground">
                      Lead immersive experiences in Rwanda's natural
                      environments, combining education with visual
                      storytelling.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Volunteer Application</h3>

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
                      Application sent successfully!
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Thank you for your interest in volunteering. We'll review
                      your application and get back to you soon.
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    type="tel"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="interests"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Volunteer Interests *
                  </label>
                  <select
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="Workshop Facilitator">
                      Workshop Facilitator
                    </option>
                    <option value="Environmental Artist">
                      Environmental Artist
                    </option>
                    <option value="Digital Content Creator">
                      Digital Content Creator
                    </option>
                    <option value="Environmental Safari Guide">
                      Environmental Safari Guide
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="skills"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Artistic Skills & Environmental Interests *
                  </label>
                  <Textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Tell us about your artistic skills and environmental interests"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={formStatus.isSubmitting || !emailJSReady}
                  className="w-full bg-[#e3c31e] hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4 mr-2" />
                      Sending Application...
                    </>
                  ) : (
                    "Join The Team"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
