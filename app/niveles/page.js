'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Importar el componente de evaluación dinámicamente
const Evaluation = dynamic(() => import('../evaluation/page'), {
  ssr: false
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
          {pathname === '/niveles' && <TodosLosNiveles />}
          {pathname === '/niveles/evaluacion' && <EvaluacionNivel />}
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
            onClick={() => nivel.link ? window.location.href = nivel.link : setSelectedNivel(nivel)}
            className={`relative group overflow-hidden rounded-xl bg-gradient-to-br shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
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
          </div>
        ))}
      </div>

      {/* Aclaración */}
      <div className="w-full bg-[#0077b6]/90 py-4 mt-8">
        <div className="container mx-auto px-4">
          <p className="text-white/70 text-xs italic text-center">Los niveles obtenidos en esta página web no están ligados a la calificación de ningun alumno/a y son meramente representativos a las respuestas de un formulario de corrección automática</p>
        </div>
      </div>

      {/* Vista expandida */}
      {selectedNivel && (
        <div className="fixed inset-0 bg-[#0077b6]/95 flex items-center justify-center p-4 z-50">
          <div className="container mx-auto flex flex-col lg:flex-row gap-8">
            {/* Tarjeta expandida */}
            <div className={`lg:w-1/2 transform transition-all duration-500 ${
              selectedNivel ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br shadow-xl ${selectedNivel.color}`}>
                <div className="absolute inset-0 bg-gradient-to-br opacity-95"></div>
                <div className="relative p-8">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{selectedNivel.nivel.split(' ')[1]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 pr-16">{selectedNivel.titulo}</h3>
                  <p className="text-white/90 text-xl mb-6 font-medium">{selectedNivel.descripcion}</p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-base leading-relaxed">{selectedNivel.analogia}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className={`lg:w-1/2 transform transition-all duration-500 delay-200 ${
              selectedNivel ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Tips para mejorar</h3>
                <ul className="space-y-4">
                  {selectedNivel.tips.map((tip, index) => (
                    <li 
                      key={index}
                      className="flex items-start space-x-3 text-white/90"
                    >
                      <span className="text-[#00a8e8] text-xl">•</span>
                      <span className="text-lg">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botón de cerrar */}
            <button
              onClick={() => setSelectedNivel(null)}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente para la evaluación de nivel
function EvaluacionNivel() {
  return <Evaluation />;
} 