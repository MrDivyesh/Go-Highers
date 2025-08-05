import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import Chatbot from './components/Chatbot';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Component to force re-render on route change
function AppRoutes() {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
      {/* <Chatbot /> */}
    </BrowserRouter>
  );
}

export default App;
