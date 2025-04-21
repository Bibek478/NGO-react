
import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12 pt-8">
      <div className="pt-24 pb-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-6 flex items-center justify-center">
            {/* Empty logo/space for branding */}
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Get In Touch</h1>
          <p className="text-gray-600 mb-4">We'd love to hear from you! Reach out with questions, feedback, or partnership inquiries.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="font-bold text-xl mb-3">Contact Information</h2>
            <p className="mb-2"><span className="font-semibold">Address:</span> Phansidewa, Darjeeling, West Bengal, India</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+919932238011" className="text-blue-600 underline">+91 99322 38011</a></p>
            <p className="mb-4"><span className="font-semibold">Email:</span> <a href="mailto:psrwsphd@gmail.com" className="text-blue-600 underline">psrwsphd@gmail.com</a></p>
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded">
              {/* Empty map placeholder */}
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h2 className="font-bold text-xl mb-3">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Your Name:</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="Name" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Your Email:</label>
                <input type="email" className="w-full border rounded px-3 py-2" placeholder="Email" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Your Message:</label>
                <textarea className="w-full border rounded px-3 py-2" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
