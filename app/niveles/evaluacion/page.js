'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Evaluation = dynamic(() => import('../../evaluation/page'), {
  ssr: false
});

export default function EvaluacionPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0077b6] text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
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
              <div className="relative group">
                <Link href="/niveles" className="relative px-6 py-2 text-[#0077b6] font-bold">
                  <span className="relative z-10">Niveles</span>
                  <span className="absolute inset-0 bg-[#0077b6]/10 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <svg className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path d="M0,0.5 Q25,0 50,0.5 T100,0.5" stroke="#0077b6" strokeWidth="0.5" fill="none"/>
                  </svg>
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/niveles" className="block px-4 py-2 text-[#0077b6] hover:bg-[#0077b6]/10">
                    Todos los niveles
                  </Link>
                  <Link href="/niveles/evaluacion" className="block px-4 py-2 text-[#0077b6] hover:bg-[#0077b6]/10">
                    ¿Cuál es mi nivel?
                  </Link>
                </div>
              </div>
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
            <button className="md:hidden p-2 rounded-lg text-[#0077b6] hover:bg-[#0077b6]/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Wave Divider */}
      <div className="relative w-full h-48 overflow-hidden bg-white">
        <svg
          className="absolute bottom-0 w-full h-48"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,224C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#00a8e8"
          />
          <path
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,197.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#0077b6"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pt-16 pb-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="relative w-24 h-24">
              {/* Círculos de salpicadura */}
              <div className="absolute inset-0 rounded-full bg-white/20 animate-splash-1"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 animate-splash-2"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 animate-splash-3"></div>
            </div>
          </div>
        ) : (
          <Evaluation />
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0077b6]/90">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rolling Waves. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Mobile Menu */}
      <div className="md:hidden fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="text-3xl font-bold text-[#0077b6]">
              Rolling Waves
            </Link>
            <button className="p-2 rounded-lg text-[#0077b6] hover:bg-[#0077b6]/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-4">
              <Link href="/" className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg">
                Inicio
              </Link>
              <Link href="/niveles" className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg">
                Niveles
              </Link>
              <Link href="/recursos" className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg">
                Recursos
              </Link>
              <Link href="/sobre-mi" className="block px-4 py-2 text-[#0077b6] font-bold hover:bg-[#0077b6]/10 rounded-lg">
                Sobre mi
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes splash {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-splash-1 {
          animation: splash 1.5s ease-out infinite;
        }

        .animate-splash-2 {
          animation: splash 1.5s ease-out infinite;
          animation-delay: 0.5s;
        }

        .animate-splash-3 {
          animation: splash 1.5s ease-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
} 