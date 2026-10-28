import React from 'react';
import PageHeader from '../components/Common/PageHeader';
import ConsultationForm from '../components/Consultation/ConsultationForm';
import { Phone, Mail, MapPin, Clock, Building, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to our lighting design desk and manufacturing facilities in Uttar Pradesh. We're here to assist with project tenders, BOQs, and custom luminaires."
        breadcrumb="Contact Us"
        tag="Direct Engineering Hotline"
      />

      {/* Main High-Conversion Consultation Form Component */}
      <ConsultationForm />

      {/* Corporate Offices & Factory Locations Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
              Operational Locations
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Visit or Contact Our Facilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Manufacturing Plant */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                Manufacturing Plant & Warehouse
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                F-611, M G Road, Dhaulana, Metro Power Tech Pvt Ltd, Mussoorie Gulawathi Road Industrial Area, Hapur, Uttar Pradesh — 201015
              </p>
              <div className="pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                <div>GSTIN: <span className="font-mono text-slate-900 font-semibold">{companyData.gstNumber}</span></div>
                <div>Hours: Monday – Saturday (9:00 AM – 6:00 PM)</div>
              </div>
            </div>

            {/* Corporate Desk */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                NCR Corporate Office
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Noida, Gautam Buddha Nagar, Uttar Pradesh, India (Serving Delhi NCR, Gurugram, and pan-India project consultations).
              </p>
              <div className="pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                <div>Hotline: <a href="tel:+919811817833" className="text-slate-900 font-medium hover:text-amber-600">+91 98118 17833</a></div>
                <div>Direct Email: <a href="mailto:sales@sparkinled.com" className="text-slate-900 font-medium hover:text-amber-600">sales@sparkinled.com</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
