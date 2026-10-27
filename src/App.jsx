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
import { ServiceDetail } from './pages/ServiceDetail.jsx';
import { LocationDetail } from './pages/LocationDetail.jsx';
import { About, Contact, Privacy, Terms, NotFound } from './pages/Pages.jsx';

/** Every URL the prerenderer and sitemap need to know about. */
export const allRoutes = [
  '/',
  '/about',
  '/services',
  '/services/emergency-services',
  '/services/garage-door-cable-repair',
  '/services/service-and-maintenance',
  '/services/opener-repair',
  '/services/garage-door-replacement',
  '/services/springs-replacement',
  '/services/opener-installation',
  '/services/off-track-repair',
  '/services/rollers-replacement',
  '/services/hinges-replacement',
  '/services/tracks-replacement',
  '/services/weather-strip-replacement',
  '/services/panels-repair',
  '/services/panels-replacement',
  '/service-areas',
  '/service-areas/daniel-island-sc',
  '/service-areas/folly-beach-sc',
  '/service-areas/goose-creek-sc',
  '/service-areas/hanahan-sc',
  '/service-areas/isle-of-palms-sc',
  '/service-areas/james-island-sc',
  '/service-areas/johns-island-sc',
  '/service-areas/ladson-sc',
  '/service-areas/mount-pleasant-sc',
  '/service-areas/north-charleston-sc',
  '/service-areas/sullivans-island-sc',
  '/service-areas/summerville-sc',
  '/service-areas/west-ashley-sc',
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
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/service-areas" element={<AreasIndex />} />
          <Route path="/service-areas/:slug" element={<LocationDetail />} />
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
