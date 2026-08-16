import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import EstimateModal from './components/EstimateModal.jsx';
import { ScrollProgress } from './components/Motion.jsx';
import Cursor from './components/Cursor.jsx';
import Home from './pages/Home.jsx';
import { ServicesIndex } from './pages/Services.jsx';
import { AreasIndex } from './pages/Areas.jsx';
import { ProjectsPage } from './pages/Projects.jsx';
import { About, Contact, Privacy, Terms, NotFound } from './pages/Pages.jsx';

/** Every URL the prerenderer and sitemap need to know about. */
export const allRoutes = [
  '/',
  '/about',
  '/services',
  '/service-areas',
  '/projects',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/404',
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Header />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/service-areas" element={<AreasIndex />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <EstimateModal />
    </>
  );
}
