'use client';

import dynamic from 'next/dynamic';
import Navbar from '../../components/Navbar';

// Importar el componente de evaluación dinámicamente
const Evaluation = dynamic(() => import('../../evaluation/page'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative w-24 h-24">
        {/* Círculos de salpicadura */}
        <div className="absolute inset-0 rounded-full bg-white/20 animate-splash-1"></div>
        <div className="absolute inset-0 rounded-full bg-white/20 animate-splash-2"></div>
        <div className="absolute inset-0 rounded-full bg-white/20 animate-splash-3"></div>
      </div>
    </div>
  )
});

export default function EvaluacionNivel() {
  return (
    <main className="min-h-screen bg-[#0077b6] text-white">
      <Navbar />

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
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 container mx-auto px-4 pt-16 pb-16">
          <Evaluation />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0077b6]/90">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rolling Waves. Todos los derechos reservados.</p>
        </div>
      </footer>

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