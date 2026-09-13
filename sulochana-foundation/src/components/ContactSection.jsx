import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, Building, Award 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { foundationData } from '../data/foundationData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const phonePattern = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim() || !phonePattern.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Please provide message details (minimum 8 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0d9488', '#f59e0b', '#10b981']
      });
    }, 800);
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-800" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER (Clean, Light & Peaceful) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-peace-50 text-peace-800 text-xs font-bold tracking-wider uppercase mb-3 border border-peace-200">
            <Mail className="w-3.5 h-3.5 text-peace-700" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 mt-1 tracking-tight">
            Reach Out to Sulochana Foundation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peace-600 to-sun-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you seek medical help, wish to organize a community blood drive, volunteer your time, or collaborate on a corporate CSR initiative, our doors are open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT: Office Details & Legal Headquarters (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-peace-900 to-peace-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-peace-800">
              <div className="flex items-center gap-2 text-sun-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4 text-sun-400" />
                <span>Registered Headquarters</span>
              </div>

              <h3 className="text-2xl font-bold font-sans text-white mb-1">
                Sulochana Foundation
              </h3>
              <p className="text-xs text-slate-200 mb-6 font-medium">
                Section 8 Registered Foundation • Govt. of India
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sun-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-sans">Address:</strong>
                    <span>Parel, Mumbai 400012, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sun-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-sans">Email Address:</strong>
                    <span>{foundationData.meta.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sun-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-sans">Helpline & WhatsApp:</strong>
                    <span>{foundationData.meta.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sun-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-sans">Visiting & Operating Hours:</strong>
                    <span>{foundationData.meta.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-peace-800 text-xs text-slate-200 flex items-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 text-sun-400 shrink-0" />
                <span>24x7 emergency voluntary donor coordination for critical hospital needs.</span>
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="bg-surface-50 rounded-3xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-peace-100 text-peace-800 flex items-center justify-center mb-3">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-sans">
                Central Mumbai Location
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Easily accessible via Parel / Prabhadevi railway stations & Eastern Freeway.
              </p>
              <a 
                href="https://maps.google.com/?q=Parel+Mumbai+12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-peace-800 hover:text-peace-900"
              >
                <span>View Location on Google Maps</span>
                <span className="text-sun-600">↗</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-soft-card border border-slate-200">
              
              <h3 className="text-2xl font-bold font-sans text-slate-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-7 font-normal">
                Please fill in the details below. Our field desk coordinator will reply within 24 business hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 text-center bg-peace-50 rounded-2xl border border-peace-200 animate-fadeIn">
                  <div className="w-14 h-14 mx-auto rounded-full bg-peace-700 text-white flex items-center justify-center mb-3 shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold font-sans text-slate-900">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Your message has been received by Sulochana Foundation. A member of our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', category: 'General Inquiry', message: '' });
                    }}
                    className="mt-5 px-5 py-2 text-xs font-bold text-slate-800 bg-white border border-slate-300 rounded-xl hover:bg-slate-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. Ramesh Jadhav"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 text-sm bg-surface-50 border rounded-xl focus:outline-none transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-peace-600 focus:ring-1 focus:ring-peace-600'
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 text-sm bg-surface-50 border rounded-xl focus:outline-none transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-peace-600 focus:ring-1 focus:ring-peace-600'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        placeholder="e.g. +91 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 text-sm bg-surface-50 border rounded-xl focus:outline-none transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-peace-600 focus:ring-1 focus:ring-peace-600'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Category Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-surface-50 border border-slate-200 rounded-xl focus:outline-none focus:border-peace-600"
                    >
                      <option value="General Inquiry">General Community Inquiry</option>
                      <option value="CSR Partnership">Corporate CSR Partnership (Schedule VII)</option>
                      <option value="Volunteer Opportunity">Volunteer / Mentorship Application</option>
                      <option value="Healthcare & Blood Camp">Organize Free Health / Blood Camp</option>
                      <option value="Donation & Transparency">Donation & Account Receipts</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Message or Inquiry Details *
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Please share your inquiry, proposal, or support requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 text-sm bg-surface-50 border rounded-xl focus:outline-none transition-all ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-peace-600 focus:ring-1 focus:ring-peace-600'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-sun-400 via-amber-300 to-yellow-400 hover:from-sun-500 hover:to-amber-400 shadow-md hover:shadow-sun-glow transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Foundation</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* INTERACTIVE FAQ ACCORDION (Light & Clean) */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-sans text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Find instant answers regarding our Section 8 legal status, donations, and volunteer roles.
            </p>
          </div>

          <div className="space-y-3">
            {foundationData.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={faq.question}
                  className="bg-surface-50 border border-slate-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-100"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-peace-700 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
