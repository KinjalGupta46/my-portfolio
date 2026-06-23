import React, { useState } from "react";
import { Send, MapPin, Mail, Linkedin, Github } from "lucide-react";

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
    form.append("access_key", "a5760dcf-9dd6-4985-98dc-0840fced59a1"); // Replace with your Web3Forms access key
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
        setStatus("Thanks for reaching out! I'll get back to you soon.");
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
      setStatus("Oops! Something went wrong. Please try again later.");
      console.error("Error:", error);
    }
  };

return (
  <main className="min-h-screen bg-[#04081A] text-white py-20 px-6">
    <div className="max-w-4xl mx-auto">

      {/* Top Line */}
      <div className="flex items-center gap-4 mb-6 text-sm">
        <h3 className="text-cyan-400 font-semibold whitespace-nowrap">
          Let's Connect 🚀
        </h3>

        <div className="w-px h-5 bg-gray-600"></div>

        <p className="text-gray-400">
          Open to internships, collaborations and exciting opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-[0.7fr_1.3fr] overflow-hidden rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl">

        {/* LEFT SIDE */}
        <div className="p-7 border-r border-cyan-500/20">

          <h2 className="text-2xl font-bold text-cyan-400 mb-8">
            Contact Info
          </h2>

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-purple-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400 text-sm">
                  kinjalgupta038@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-pink-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400 text-sm">
                  Etah, Uttar Pradesh
                </p>
              </div>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mt-12 mb-8">
            Social Handles
          </h2>

          <div className="space-y-6">

            <a
              href="https://linkedin.com/in/kinjalgupta06k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-cyan-400 transition"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="text-sm">kinjalgupta06k</span>
            </a>

            <a
              href="https://github.com/KinjalGupta46"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-cyan-400 transition"
            >
              <Github className="w-5 h-5 text-gray-300" />
              <span className="text-sm">KinjalGupta46</span>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-7">

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border border-cyan-500/30 rounded-full px-6 py-3 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border border-cyan-500/30 rounded-full px-6 py-3 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full bg-transparent border border-cyan-500/30 rounded-full px-6 py-3 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border border-cyan-500/30 rounded-3xl px-6 py-4 resize-none outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-40 mx-auto flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 font-semibold hover:scale-105 transition"
            >
              Send
              <Send className="w-4 h-4" />
            </button>

            {status && (
              <p
                className={`text-center ${
                  status.includes("Thanks")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  </main>
);
}
