import React, { useState } from 'react';

// ============================================
// COMPONENT: Order Modal
// ============================================
interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    governorate: '',
    address: ''
  });

  const tunisianGovernorates = [
    'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Nabeul', 'Zaghouan', 
    'Bizerte', 'Béja', 'Jendouba', 'Kef', 'Siliana', 'Sousse', 
    'Monastir', 'Mahdia', 'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid',
    'Gabès', 'Medenine', 'Tataouine', 'Gafsa', 'Tozeur', 'Kebili'
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    console.log('Form submitted with data:', formData);

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    // Log FormData contents
    console.log('FormData contents:');
    for (let pair of formDataObj.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      console.log('Sending request to Formspree...');
      
      const response = await fetch('https://formspree.io/f/xovkzrek', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        console.log('Success!');
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          governorate: '',
          address: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        console.error('Formspree error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Modal Content */}
        <div className="relative bg-white rounded-3xl shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="p-8 pb-6">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Order El Namousa</h2>
            <p className="text-gray-500">Fill in your details to place your order</p>
          </div>

          {/* Product Info Banner */}
          <div className="mx-8 mb-6 p-5 bg-gradient-to-r from-[#E26537] to-[#FF9966] rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">El Namousa Complete Edition</h3>
                <p className="text-sm text-white/90 mt-1">Free shipping across Tunisia</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-white">75 TND</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form 
            onSubmit={(e) => {
              console.log('FORM SUBMIT EVENT TRIGGERED!');
              handleSubmit(e);
            }}
            action="https://formspree.io/f/xovkzrek"
            method="POST"
            className="px-8 pb-8 space-y-5"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_subject" value="New Order from El Namousa" />
            <input type="hidden" name="product" value="El Namousa Complete Edition" />
            <input type="hidden" name="price" value="75 TND" />

            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Full Name <span className="text-[#E26537]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#E26537] focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Phone Number <span className="text-[#E26537]">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#E26537] focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Governorate */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Governorate <span className="text-[#E26537]">*</span>
              </label>
              <div className="relative">
                <select
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 appearance-none cursor-pointer focus:outline-none focus:border-[#E26537] focus:bg-white transition-all duration-200 pr-10"
                >
                  <option value="">Select your governorate</option>
                  {tunisianGovernorates.map((gov) => (
                    <option key={gov} value={gov}>
                      {gov}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Address <span className="text-[#E26537]">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                required
                rows={3}
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#E26537] focus:bg-white transition-all duration-200 resize-none"
              />
            </div>

            {/* Success/Error Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-800 font-semibold">Order placed successfully! We'll contact you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-800 font-semibold">Something went wrong. Please try again.</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-[#E26537] to-[#FF9966] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#E26537]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Placing Order...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export const OrderButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('Modal open state:', isModalOpen);

  return (
    <>
      <button 
        onClick={() => {
          console.log('Button clicked!');
          setIsModalOpen(true);
        }}
        className="px-5 py-2 md:px-6 md:py-2 bg-gradient-to-r from-[#32ACCA] to-[#E26537] text-white font-bold rounded-full text-sm md:text-base hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
      >
        Order Now
      </button>

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => {
          console.log('Closing modal');
          setIsModalOpen(false);
        }} 
      />
    </>
  );
};
