import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, MessageCircle, Linkedin, Github, Twitter, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "06057872-a391-4074-81a9-d4fa832fe719"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-20 bg-gradient-to-br from-white to-emerald-50 min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Let's Connect
            </h2>
            <p className="text-emerald-700 max-w-2xl mx-auto text-lg">
              Have a question or want to work together? I'd love to hear from you.
              Send me a message and I'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Email</h3>
                      <p className="text-emerald-600">prateek.biot@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Location</h3>
                      <p className="text-emerald-600">Bareilly, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Response Time</h3>
                      <p className="text-emerald-600">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/prateek-singh-8956521ba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-100 p-3 rounded-lg hover:bg-emerald-200 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Linkedin className="w-6 h-6 text-emerald-700" />
                    </motion.a>
                    {/* <motion.a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-100 p-3 rounded-lg hover:bg-emerald-200 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-6 h-6 text-emerald-700" />
                    </motion.a> */}
                   <motion.a
  href="mailto:prateek.biot@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-emerald-100 p-3 rounded-lg hover:bg-emerald-200 transition"
  whileHover={{ scale: 1.1 }}
>
  <Mail className="w-6 h-6 text-emerald-700" />
</motion.a>

                    <motion.a
                      href="https://build-lime-six.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-100 p-3 rounded-lg hover:bg-emerald-200 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Globe className="w-6 h-6 text-emerald-700" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-emerald-800 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Let's Collaborate</h3>
                <p className="mb-4">
                  I'm interested in freelance opportunities, especially ambitious projects. However, if you have other requests or questions, don't hesitate to reach out.
                </p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-2"></div>
                  <span>Available for freelance work</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-emerald-200"
                      } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-emerald-200"
                      } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-emerald-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="  "
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? "border-red-500" : "border-emerald-200"
                      } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Hello, I would like to discuss a project..."
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-500" : "border-emerald-200"
                      } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center ${
                    status.includes("success")
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
