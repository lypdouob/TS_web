import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop';

import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div className="page_container">
      <Routes location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
