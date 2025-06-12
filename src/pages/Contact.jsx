import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-12 pt-8">
      <div className="pt-20 pb-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
            <div className="w-full h-12 mb-8 items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Get In Touch</h1>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">We'd love to hear from you! Reach out with questions, feedback, or partnership inquiries.</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Contact Information */}
            <div className="md:col-span-2 bg-blue-600 text-white p-6 md:p-8">
              <h2 className="font-bold text-2xl md:text-3xl mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <p className="text-lg md:text-xl">Phansidewa, Darjeeling, West Bengal, India - 734434</p>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <div className="text-lg md:text-xl">
                    <a href="tel:+919933238911" className="hover:underline block">+91 99332 38911</a>
                    <a href="tel:+919932238011" className="hover:underline">+91 99322 38011</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <a href="mailto:psrwsphd@gmail.com" className="hover:underline text-lg md:text-xl break-all">psrwsphd@gmail.com</a>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <div className="text-lg md:text-xl">
                    <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Map inside Contact Information */}
              <div className="mt-8 rounded-lg overflow-hidden h-48 shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57637.81862908145!2d88.31791027971613!3d26.67462941844522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5f3234890fce3%3A0xd7ceb19a2cce6f2d!2sPhansidewa%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1716988323940!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PSRWS Location Map"
                ></iframe>
              </div>
              
              <div className="mt-8 pt-5 border-t border-blue-500">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-700 hover:bg-blue-800 w-11 h-11 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="bg-blue-700 hover:bg-blue-800 w-11 h-11 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="bg-blue-700 hover:bg-blue-800 w-11 h-11 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2 p-6 md:p-8 pt-20">
              <h2 className="font-bold text-2xl text-gray-800 mb-6">Send Us a Message</h2>
              {isSuccess ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Your message has been sent successfully! We'll be in touch soon.</span>
                </div>
              ) : null}
              
              <form className="space-y-6 max-w-4xl mx-auto" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                      placeholder="John Doe" 
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="How can we help you?" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                    rows="4" 
                    placeholder="Please write your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
