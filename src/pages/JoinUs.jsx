import React, { useState } from "react";

export default function JoinUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email address.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ""))) newErrors.phone = "Enter a valid phone number.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", address: "" });
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-20 pb-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full h-12 mb-6 flex items-center justify-center">{/* Empty logo/space for branding */}</div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Become Part of the Change</h1>
          <p className="text-gray-600 mb-4">Join our team of passionate individuals working towards a better future.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-500 text-center mb-6">Volunteer Application</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Thank you for your interest in volunteering with us! Your time and skills are invaluable. Please fill out the form below, and we'll get in touch with you regarding available opportunities that match your interests and availability.
          </p>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <h3 className="text-xl text-gray-700 font-medium mb-8 pb-4 border-b">Personal Information</h3>
            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-gray-600 mb-2">First Name:</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.firstName ? 'border-red-400' : 'border-gray-300'}`}
                    value={form.firstName}
                    onChange={handleChange}
                    aria-invalid={!!errors.firstName}
                    aria-describedby="firstName-error"
                  />
                  {errors.firstName && <p id="firstName-error" className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-600 mb-2">Last Name:</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.lastName ? 'border-red-400' : 'border-gray-300'}`}
                    value={form.lastName}
                    onChange={handleChange}
                    aria-invalid={!!errors.lastName}
                    aria-describedby="lastName-error"
                  />
                  {errors.lastName && <p id="lastName-error" className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email Address:</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                  />
                  {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-600 mb-2">Phone Number:</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={!!errors.phone}
                    aria-describedby="phone-error"
                  />
                  {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-gray-600 mb-2">Address (City, State):</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.address ? 'border-red-400' : 'border-gray-300'}`}
                    value={form.address}
                    onChange={handleChange}
                    aria-invalid={!!errors.address}
                    aria-describedby="address-error"
                    placeholder="e.g., New Delhi, Delhi"
                  />
                  {errors.address && <p id="address-error" className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
              </div>
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-12 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
              {success && (
                <div className="text-green-600 text-center font-medium mt-6">Thank you for applying! We will contact you soon.</div>
              )}
            </form>
          </div>
          <p className="text-gray-500 text-center mt-8">
            We review applications regularly and will contact you soon. Thank you for your willingness to help!
          </p>
        </div>
      </div>
    </div>
  );
}
