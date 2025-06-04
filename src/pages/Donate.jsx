import React, { useState } from "react";
import { Heart, CheckCircle, ArrowRight, CreditCard, Building, Globe } from "lucide-react";

export default function Donate() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  
  const predefinedAmounts = ['500', '1000', '2000', '5000'];

  const handleAmountChange = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (!value || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setAmount('other');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Your generous contribution empowers us to create lasting change and transform rural communities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Donation Impact */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Your Donation Makes a Difference</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Water Access</h3>
              <p className="text-gray-700">₹1000 provides a family with clean water access for a month</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education Support</h3>
              <p className="text-gray-700">₹2000 sponsors educational materials for a rural student</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2a2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1.5M15 11.5V14" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10v2a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1a2 2 0 00-2-2h-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Development</h3>
              <p className="text-gray-700">₹5000 supports community waste management for a village</p>
            </div>
          </div>
        </section>
        
        {/* Donation Form */}
        <section className="max-w-3xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
          
          <div className="mb-8">
            <h3 className="font-medium mb-3">Select Donation Type</h3>
            <div className="flex space-x-4">
              <button 
                onClick={() => setDonationType('one-time')}
                className={`px-4 py-2 rounded-md flex-1 ${donationType === 'one-time' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                One-time
              </button>
              <button 
                onClick={() => setDonationType('monthly')}
                className={`px-4 py-2 rounded-md flex-1 ${donationType === 'monthly' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                Monthly
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-medium mb-3">Select Amount (₹)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              {predefinedAmounts.map((value) => (
                <button 
                  key={value} 
                  onClick={() => handleAmountChange(value)}
                  className={`px-4 py-3 rounded-md text-center ${amount === value 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  ₹{value}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => handleAmountChange('other')}
                className={`px-4 py-3 rounded-md ${amount === 'other' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                Other
              </button>
              {(amount === 'other' || customAmount) && (
                <div className="flex-1">
                  <input 
                    type="text" 
                    value={customAmount} 
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-medium text-lg transition-colors flex items-center justify-center">
            Proceed to Donate <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            You will be redirected to our secure payment gateway
          </div>
        </section>
        
        {/* Bank Transfer Details */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Direct Bank Transfer</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Indian Donations */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Building className="mr-3 text-blue-600 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-800">Donate Within India (INR)</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-700">Account Name:</p>
                  <p className="text-gray-600">PHANSIDEWA SOCIAL & RURAL WELFARE SOCIETY</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Account Number:</p>
                  <p className="text-gray-600">50100168968714</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Account Type:</p>
                  <p className="text-gray-600">Current</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">IFSC Code:</p>
                  <p className="text-gray-600">HDFC0000208</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Bank Name:</p>
                  <p className="text-gray-600">HDFC Bank, Siliguri Branch</p>
                </div>
              </div>
            </div>

            {/* International Donations */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Globe className="mr-3 text-blue-600 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-800">International Donations</h3>
              </div>
              <p className="text-gray-600 mb-4">For donations from outside India (requires FCRA approval - ensure you have it)</p>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-700">Beneficiary Name:</p>
                  <p className="text-gray-600">PHANSIDEWA SOCIAL & RURAL WELFARE SOCIETY</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Beneficiary A/C No:</p>
                  <p className="text-gray-600">50100168968714</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">SWIFT Code:</p>
                  <p className="text-gray-600">HDFCINBB</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Bank Address:</p>
                  <p className="text-gray-600">HDFC Bank Ltd., Siliguri Branch, Hill Cart Road, Siliguri</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Information */}
        <section className="max-w-3xl mx-auto text-center bg-blue-50 p-8 rounded-xl">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Exemption Information</h3>
          <p className="text-gray-700 mb-4">
            Donations made within India are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.
          </p>
          <div className="inline-block bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-700 mb-2">
              <strong>80G Registration No:</strong> AADAP3841QE20241
            </p>
            <p className="text-gray-700">
              <strong>PAN:</strong> AADAP3841Q
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Please provide your PAN number when informing us about your donation to receive the 80G certificate.
          </p>
        </section>
      </div>
    </div>
  );
}
