import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    projectCategory: 'Continuous Linear & Pendants',
    projectArea: '5,000 - 10,000 Square Feet',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid Email is required';
    if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, '').length < 10) errs.mobile = '10-digit mobile number required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/70">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brand Statement & Verified Business Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Project Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
                Let's Bring Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Lighting Vision to Life</span>
              </h2>

              <p className="text-base text-slate-600 font-light leading-relaxed">
                Connect directly with our lighting engineers. Whether you need complete Dialux photometric schedules, custom aluminum profiles, or energy-optimized corporate luminaire packages.
              </p>
            </div>

            {/* Response SLA badge */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">4-Hour Response SLA</div>
                <div className="text-xs text-slate-600">Our engineering desk reviews inquiries on business days within 4 hours.</div>
              </div>
            </div>

            {/* Verified Business Details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Factory & Operations</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                    {companyData.contact.address.factory}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    GST: {companyData.gstNumber}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Direct Phone Lines</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700 mt-0.5">
                    {companyData.contact.phones.map((p, idx) => (
                      <a key={idx} href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-amber-600 transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {companyData.contact.businessHours.weekdays}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Sales & Project Enquiry</h4>
                  <a href={`mailto:${companyData.contact.email}`} className="text-xs text-slate-700 hover:text-amber-600 transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Conversion Form (Inspired by Morpho Dimensions Form) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-light">
                    Your lighting project consultation request has been logged with Sparkin Sunlit Pvt Ltd. A senior lighting engineer will reach out to <span className="text-slate-900 font-medium">{formData.email}</span> and <span className="text-slate-900 font-medium">{formData.mobile}</span> with preliminary photometrics and schedule.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-amber-700 border border-amber-300 hover:bg-amber-50 transition-colors"
                    >
                      Submit Another Project Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold font-accent">
                      Free Dialux & BOQ Assistance
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-display">
                      Get a Free Lighting Consultation
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Name"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.fullName ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Company / Firm Name *
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Studio Morpho / DLF"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.companyName ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.email ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Mobile Number (+91) *
                        </label>
                        <input
                          type="tel"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.mobile ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
                        />
                        {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Primary Lighting Category
                        </label>
                        <select
                          value={formData.projectCategory}
                          onChange={(e) => setFormData({ ...formData, projectCategory: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="Hanging & Decorative Lights">Hanging & Decorative Lights</option>
                          <option value="LED Ring Pendants">LED Ring Pendants</option>
                          <option value="Continuous Linear & Pendants">Continuous Linear Systems</option>
                          <option value="Architectural Chandeliers">Architectural Chandeliers</option>
                          <option value="Panel & Recessed Downlights">Panel & Recessed Downlights</option>
                          <option value="Custom Bespoke Extrusions">Custom Bespoke Extrusions</option>
                          <option value="Turnkey Whole Office Lighting">Turnkey Whole Office Lighting</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Approximate Project Floor Area
                        </label>
                        <select
                          value={formData.projectArea}
                          onChange={(e) => setFormData({ ...formData, projectArea: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="Under 5,000 Square Feet">Under 5,000 sq.ft.</option>
                          <option value="5,000 - 10,000 Square Feet">5,000 - 10,000 sq.ft.</option>
                          <option value="10,000 - 25,000 Square Feet">10,000 - 25,000 sq.ft.</option>
                          <option value="25,000 - 50,000 Square Feet">25,000 - 50,000 sq.ft.</option>
                          <option value="Over 50,000 Square Feet">Over 50,000 sq.ft.</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Project Description or Special Specifications
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention required lux levels, false ceiling dimensions, delivery deadlines..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-6 rounded-xl font-bold text-white bg-luminaire-gradient hover:bg-luminaire-gradient-hover shadow-glow-gold hover:shadow-glow-amber transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Validating & Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2 text-sm uppercase tracking-wider font-accent">
                            <span>Request Free Consultation & BOQ</span>
                            <Send className="w-4 h-4" />
                          </span>
                        )}
                      </button>
                    </div>

                    <div className="text-center pt-1">
                      <p className="text-[11px] text-slate-500">
                        I agree to the privacy policy and engineering follow-up from Sparkin Sunlit Private Limited.
                      </p>
                    </div>

                  </form>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
