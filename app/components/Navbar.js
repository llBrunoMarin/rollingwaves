'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-[#0077b6]">
                Rolling Waves
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="relative px-6 py-2 text-[#0077b6] font-bold group">
                <span className="relative z-10">Inicio</span>
                <span className="absolute inset-0 bg-[#0077b6]/10 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <svg className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" viewBox="0 0 100 1" preserveAspectRatio="none">
                  <path d="M0,0.5 Q25,0 50,0.5 T100,0.5" stroke="#0077b6" strokeWidth="0.5" fill="none"/>
                </svg>
              </Link>
              <Link href="/niveles" className="relative px-6 py-2 text-[#0077b6] font-bold group">
                <span className="relative z-10">Niveles</span>
                <span className="absolute inset-0 bg-[#0077b6]/10 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <svg className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" viewBox="0 0 100 1" preserveAspectRatio="none">
                  <path d="M0,0.5 Q25,0 50,0.5 T100,0.5" stroke="#0077b6" strokeWidth="0.5" fill="none"/>
                </svg>
              </Link>
              <Link href="/recursos" className="relative px-6 py-2 text-[#0077b6] font-bold group">
                <span className="relative z-10">Recursos</span>
                <span className="absolute inset-0 bg-[#0077b6]/10 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <svg className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" viewBox="0 0 100 1" preserveAspectRatio="none">
                  <path d="M0,0.5 Q25,0 50,0.5 T100,0.5" stroke="#0077b6" strokeWidth="0.5" fill="none"/>
                </svg>
              </Link>
              <Link href="/sobre-mi" className="relative px-6 py-2 text-[#0077b6] font-bold group">
                <span className="relative z-10">Sobre mi</span>
                <span className="absolute inset-0 bg-[#0077b6]/10 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <svg className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" viewBox="0 0 100 1" preserveAspectRatio="none">
                  <path d="M0,0.5 Q25,0 50,0.5 T100,0.5" stroke="#0077b6" strokeWidth="0.5" fill="none"/>
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-[#0077b6] hover:bg-[#0077b6]/10 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="text-3xl font-bold text-[#0077b6]">
              Rolling Waves
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#0077b6] hover:bg-[#0077b6]/10 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-4">
              <Link 
                href="/" 
                className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg"
                onClick={toggleMobileMenu}
              >
                Inicio
              </Link>
              <Link 
                href="/niveles" 
                className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg"
                onClick={toggleMobileMenu}
              >
                Niveles
              </Link>
              <Link 
                href="/recursos" 
                className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg"
                onClick={toggleMobileMenu}
              >
                Recursos
              </Link>
              <Link 
                href="/sobre-mi" 
                className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg"
                onClick={toggleMobileMenu}
              >
                Sobre mi
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
} 