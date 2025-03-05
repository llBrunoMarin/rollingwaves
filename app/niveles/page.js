'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';

// Importar el componente de evaluación dinámicamente
const Evaluation = dynamic(() => import('../evaluation/page'), {
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

export default function Niveles() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <TodosLosNiveles />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0077b6]/90">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rolling Waves. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

// Componente para mostrar todos los niveles
function TodosLosNiveles() {
  const [selectedNivel, setSelectedNivel] = useState(null);

  const niveles = [
    {
      nivel: "Nivel 1",
      titulo: "Classic Roller (Beginner)",
      descripcion: "Aprende lo básico",
      analogia: "Como un Classic Roller, estás comenzando tu viaje en el mundo del inglés. Al igual que un patinador que está aprendiendo a mantener el equilibrio, estás construyendo las bases fundamentales de tu aprendizaje.",
      color: "from-[#0077b6] to-[#005b8c]",
      tips: [
        "Dedica 5 minutos al día a aprender 3 palabras nuevas.",
        "Cambia el idioma de tu teléfono a inglés.",
        "Escucha una canción en inglés y traduce su letra.",
        "Practica frases básicas frente al espejo.",
        "Usa stickers con palabras en inglés en objetos de tu casa."
      ]
    },
    {
      nivel: "Nivel 2",
      titulo: "Speed Triskate (Elementary)",
      descripcion: "Mejora tu velocidad",
      analogia: "Como un Speed Triskate, ya tienes las bases y estás ganando velocidad. Al igual que un patinador que ya puede moverse con confianza, estás desarrollando fluidez en tu comunicación.",
      color: "from-[#0088cc] to-[#006699]",
      tips: [
        "Lee un artículo corto en inglés durante el desayuno.",
        "Practica 10 minutos de speaking con una app de idiomas.",
        "Escribe 3 oraciones en inglés sobre tu día.",
        "Mira un video de YouTube de 5 minutos en inglés.",
        "Usa frases en inglés en tus mensajes de WhatsApp."
      ]
    },
    {
      nivel: "Nivel 3",
      titulo: "Freestyle Blades (Intermediate)",
      descripcion: "Desarrolla tu estilo",
      analogia: "Como un Freestyle Blades, ya dominas los movimientos básicos y estás desarrollando tu propio estilo. Al igual que un patinador que experimenta con nuevos trucos, estás explorando diferentes formas de expresarte.",
      color: "from-[#0099dd] to-[#0077b6]",
      tips: [
        "Lee un capítulo corto de un libro en inglés antes de dormir.",
        "Escucha un podcast de 10 minutos durante el transporte.",
        "Participa en un chat de Discord en inglés.",
        "Escribe un párrafo sobre tu película favorita.",
        "Practica la pronunciación con videos de TikTok."
      ]
    },
    {
      nivel: "Nivel 4",
      titulo: "One-Wheel Flow (Upper Intermediate)",
      descripcion: "Domina el equilibrio",
      analogia: "Como un One-Wheel Flow, has alcanzado un nivel donde el equilibrio es natural. Al igual que un patinador que domina movimientos complejos, manejas el inglés con confianza y precisión.",
      color: "from-[#00a8e8] to-[#0088cc]",
      tips: [
        "Lee noticias en inglés durante tu café matutino.",
        "Participa en un webinar de 15 minutos en inglés.",
        "Escribe un post en inglés para tus redes sociales.",
        "Practica presentaciones cortas en inglés.",
        "Mantén un grupo de chat en inglés con amigos."
      ]
    },
    {
      nivel: "Nivel 5",
      titulo: "Wave Rider (Advanced)",
      descripcion: "Conquista las olas",
      analogia: "Como un Wave Rider, has alcanzado un dominio avanzado del inglés. Al igual que un patinador que domina movimientos técnicos y complejos, manejas el idioma con naturalidad y elegancia.",
      color: "from-[#00b4f4] to-[#0099dd]",
      tips: [
        "Lee un artículo académico en inglés cada semana.",
        "Participa en debates en línea en inglés.",
        "Escribe un blog o newsletter en inglés.",
        "Mentorea a otros estudiantes de inglés.",
        "Crea contenido en inglés para tus redes sociales."
      ]
    },
    {
      nivel: "Quiz",
      titulo: "¿Cuál es mi nivel?",
      descripcion: "Descubre tu nivel actual",
      analogia: "Realiza nuestro quiz interactivo para determinar tu nivel actual y recibir recomendaciones personalizadas para tu aprendizaje.",
      color: "from-[#00c4ff] to-[#00a8e8]",
      link: "/niveles/evaluacion"
    }
  ];

  return (
    <div className="relative">
      {/* Mensaje informativo */}
      <div className="text-center py-4 bg-white/10 backdrop-blur-sm rounded-lg mb-8">
        <p className="text-white/90 text-lg font-medium">Haz click en los niveles para ver tips</p>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 transition-all duration-500 ${
        selectedNivel ? 'opacity-0' : 'opacity-100'
      }`}>
        {niveles.map((nivel) => (
          <div 
            key={nivel.nivel} 
            onClick={() => !nivel.link && setSelectedNivel(nivel)}
            className={`relative group overflow-hidden rounded-xl bg-gradient-to-br shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            {nivel.link ? (
              <Link href={nivel.link} className="block h-full">
                {/* Fondo con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-br ${nivel.color} opacity-95`}></div>
                
                {/* Contenido */}
                <div className="relative p-6 h-full">
                  {/* Número de nivel */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{nivel.nivel === "Quiz" ? "?" : nivel.nivel.split(' ')[1]}</span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-4 pr-12">{nivel.titulo}</h3>

                  {/* Descripción */}
                  <p className="text-white/90 text-lg mb-4 font-medium">{nivel.descripcion}</p>

                  {/* Analogía */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm leading-relaxed">{nivel.analogia}</p>
                  </div>

                  {/* Efecto hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
                </div>
              </Link>
            ) : (
              <>
                {/* Fondo con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-br ${nivel.color} opacity-95`}></div>
                
                {/* Contenido */}
                <div className="relative p-6 h-full">
                  {/* Número de nivel */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{nivel.nivel === "Quiz" ? "?" : nivel.nivel.split(' ')[1]}</span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-4 pr-12">{nivel.titulo}</h3>

                  {/* Descripción */}
                  <p className="text-white/90 text-lg mb-4 font-medium">{nivel.descripcion}</p>

                  {/* Analogía */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm leading-relaxed">{nivel.analogia}</p>
                  </div>

                  {/* Efecto hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Vista expandida */}
      {selectedNivel && (
        <div className="fixed inset-0 bg-[#0077b6]/95 flex items-center justify-center p-4 z-50">
          <div className="container mx-auto max-w-4xl bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">{selectedNivel.titulo}</h2>
              <button
                onClick={() => setSelectedNivel(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Descripción</h3>
                <p className="text-white/90">{selectedNivel.descripcion}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Analogía</h3>
                <p className="text-white/90">{selectedNivel.analogia}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Tips para este nivel</h3>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  {selectedNivel.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Aclaración */}
      <div className="w-full bg-[#0077b6]/90 py-4 mt-8">
        <div className="container mx-auto px-4">
          <p className="text-white/70 text-xs italic text-center">Los niveles obtenidos en esta página web no están ligados a la calificación de ningun alumno/a y son meramente representativos a las respuestas de un formulario de corrección automática</p>
        </div>
      </div>
    </div>
  );
}

// Componente para mostrar la evaluación
function EvaluacionNivel() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <Evaluation />
      </div>
    </div>
  );
} 