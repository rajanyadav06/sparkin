import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/Common/ScrollToTop';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import ConsultationModal from './components/UI/ConsultationModal';
import FloatingQuickActions from './components/UI/FloatingQuickActions';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExpertisePage from './pages/ExpertisePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState('');

  const handleOpenConsultation = (category = '') => {
    setModalCategory(category);
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
    setModalCategory('');
  };

  return (
    <BrowserRouter>
      {/* Scroll window to top on every navigation change */}
      <ScrollToTop />

      <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-black flex flex-col justify-between">
        
        {/* Persistent Multi-Page Navigation Header */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/solutions" element={<SolutionsPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/products" element={<ProductsPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/projects" element={<ProjectsPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/expertise" element={<ExpertisePage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenConsultation={() => handleOpenConsultation()} />

        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={modalOpen}
          onClose={handleCloseConsultation}
          preselectedCategory={modalCategory}
        />

        {/* Floating Quick Action Buttons */}
        <FloatingQuickActions onOpenConsultation={() => handleOpenConsultation()} />

      </div>
    </BrowserRouter>
  );
}
