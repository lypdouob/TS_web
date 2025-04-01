import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ScrollToTop  from './component/ScrollToTop';

import LandingPage from './component/pages/LandingPage'
import AboutPage from './component/pages/AboutPage'
import ProductsPage from './component/pages/ProductsPage'
import ContactPage from './component/pages/ContactPage'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <>
    <div className="page_container">

      <Routes location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

export default App
