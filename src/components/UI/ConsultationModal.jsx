import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Building, MapPin } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ConsultationModal({ isOpen, onClose, preselectedCategory }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    projectType: preselectedCategory || 'Corporate Office',
    area: '5,000 - 10,000 Square Feet',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (preselectedCategory) {
      setFormData(prev => ({ ...prev, projectType: preselectedCategory }));
    }
  }, [preselectedCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, '').length < 10) errs.mobile = '10-digit mobile number required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      mobile: '',
      projectType: 'Corporate Office',
      area: '5,000 - 10,000 Square Feet',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 font-accent">
              Direct Project Consultation
            </span>
          </div>
          <button 
            onClick={resetForm}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-amber-100 text-amber-700 mb-2">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">Consultation Request Received</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A SPARIN lighting consultant will review your project parameters and contact you within <strong>4 business hours</strong>.
              </p>
              
              <div className="pt-4 border-t border-slate-200 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <div>
                    <div className="text-xs text-slate-500">Direct Hotline</div>
                    <div className="text-xs font-medium text-slate-900">+91 98118 17833</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-600" />
                  <div>
                    <div className="text-xs text-slate-500">Direct Sales</div>
                    <div className="text-xs font-medium text-slate-900">sales@sparkinled.com</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
                  Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Lighting Vision</span>
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Connect with our in-house lighting designers for Dialux simulations, custom luminaire schedules, and project BOQs.
                </p>
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
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.fullName ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Company / Architecture Firm *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Studio Vertex / DLF"
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
                      Luminaire Focus / Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Commercial Complex">Commercial Complex</option>
                      <option value="Hospitality & Dining">Hospitality & Dining</option>
                      <option value="Luxury Residential">Luxury Residential</option>
                      <option value="LED Ring Lights">LED Ring Pendants</option>
                      <option value="Linear Architectural">Linear Lighting Systems</option>
                      <option value="Custom Bespoke Fixtures">Custom Bespoke Fixtures</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Estimated Floor Area
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
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
                    Project Requirements / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe specific luminaire profiles, ceiling height, target lux, or timelines..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-luminaire-gradient hover:bg-luminaire-gradient-hover shadow-glow-gold hover:shadow-glow-amber transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider font-accent"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Request Free Dialux & Lighting Consultation</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  By submitting, you agree to technical follow-up from Sparkin Sunlit Pvt Ltd. No spam guaranteed.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
