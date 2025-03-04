'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SobreMi() {
  const [expandedSections, setExpandedSections] = useState({
    sobreBruno: false,
    pasatiempos: false,
    pacto: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <main className="min-h-screen bg-[#0077b6] text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white">
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

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Sobre Bruno Marin Section */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm mb-8">
            <button 
              onClick={() => toggleSection('sobreBruno')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold mb-4">👨‍🏫 Sobre Bruno Marin</h2>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.sobreBruno ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.sobreBruno && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">👨‍🏫 Profesor de Inglés</h2>
                  <p className="text-white/80">
                    Soy un profesor recibido del Instituto de Profesores de Artigas apasionado por la enseñanza del inglés, comprometido con el desarrollo académico y personal de mis estudiantes. Mi enfoque pedagógico se centra en crear un ambiente de aprendizaje dinámico y motivador, donde cada estudiante pueda desarrollar sus habilidades lingüísticas con confianza. Creo firmemente en que no hay que tener vergüenza al hablar inglés - los errores son parte del aprendizaje y cada intento nos acerca más a la fluidez.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">🎓 Formación Académica</h2>
                  <p className="text-white/80">
                    Mi trayectoria académica incluye estudios especializados en la enseñanza del inglés como lengua extranjera, con énfasis en metodologías innovadoras y tecnologías educativas. He tenido la oportunidad de vivir experiencias inmersivas en países de habla inglesa, incluyendo Estados Unidos e Inglaterra, lo que me ha permitido desarrollar una comprensión profunda de la lengua y la cultura. También he tenido el privilegio de viajar a lugares que jamás hubiera imaginado visitar, experiencias que enriquecen mi perspectiva y me permiten compartir historias y contextos culturales diversos con mis estudiantes. Me mantengo en constante actualización para ofrecer la mejor experiencia de aprendizaje a mis estudiantes.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">💡 Metodología de Enseñanza</h2>
                  <p className="text-white/80">
                    Implemento un enfoque comunicativo y práctico, combinando actividades interactivas, recursos digitales y ejercicios prácticos. Mi objetivo es que los estudiantes no solo aprendan inglés, sino que desarrollen la confianza necesaria para comunicarse efectivamente en situaciones reales. Como valor principal, fomento que mis estudiantes cuestionen todo constantemente - no hay preguntas tontas, solo oportunidades de aprendizaje.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">🎯 Objetivos</h2>
                  <p className="text-white/80">
                    Mi principal objetivo es inspirar a los estudiantes a alcanzar su máximo potencial en el aprendizaje del inglés. Creo en la importancia de crear un ambiente de aprendizaje inclusivo y motivador, donde cada estudiante pueda desarrollar sus habilidades a su propio ritmo. Quiero que mis estudiantes se sientan seguros para expresarse, cometer errores y aprender de ellos.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">📚 Evaluación</h2>
                  <p className="text-white/80">
                    Soy muy estricto a la hora de evaluar, ya que creo que mantener altos estándares es fundamental para el aprendizaje efectivo. Sin embargo, esta rigurosidad viene acompañada de transparencia y claridad en los criterios de evaluación. Cada estudiante conoce exactamente qué se espera de ellos y cómo serán evaluados, permitiendo que se preparen adecuadamente y alcancen su máximo potencial.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">🤝 Compromiso</h2>
                  <p className="text-white/80">
                    Estoy comprometido con el éxito de mis estudiantes y con la excelencia en la enseñanza. Mi dedicación se refleja en la preparación cuidadosa de cada clase y en el seguimiento personalizado del progreso de cada estudiante. Como ejemplo de mi compromiso con la innovación educativa, he desarrollado esta plataforma web para facilitar el aprendizaje y la comunicación con mis estudiantes.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Pasatiempos y Pasiones Section */}git commit -m "Remove node_modules from Git tracking"

          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm mb-8">
            <button 
              onClick={() => toggleSection('pasatiempos')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold mb-4">🎮 Pasatiempos y Pasiones</h2>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.pasatiempos ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.pasatiempos && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">🏃‍♂️ Actividades Físicas</h3>
                  <p className="text-white/80">
                    Me encanta mantenerme activo a través de diversas actividades deportivas. Soy un entusiasta de los rollers, el surf (por eso el nombre de la pagina) y todo tipo de deportes. La actividad física no solo me mantiene en forma, sino que también me ayuda a mantener una mente clara y enfocada.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">🎮 Entretenimiento</h3>
                  <p className="text-white/80">
                    Como amante de los videojuegos, disfruto explorando diferentes géneros y mecánicas. También me apasiona la música en todas sus formas y estilos, y me encanta cantar. El café es mi compañero fiel en todas las estaciones del año, y valoro especialmente el tiempo que paso con mis amigos, creando momentos memorables y compartiendo experiencias.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">💻 Tecnología</h3>
                  <p className="text-white/80">
                    Me interesa la programación y el desarrollo web, como demuestra esta página que he creado (con alguna ayuda de la IA). Me gusta explorar nuevas tecnologías y encontrar formas innovadoras de aplicarlas en la educación.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Pacto de Convivencia Section */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <button 
              onClick={() => toggleSection('pacto')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold mb-4">🤝 Pacto de Convivencia</h2>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.pacto ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.pacto && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">🤝 Pacto Libre de Bullying</h3>
                  <p className="text-white/80 mb-4">
                    En nuestra clase, el respeto y la inclusión son valores fundamentales. Nos comprometemos a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Tratar a todos con respeto y dignidad</li>
                    <li>No tolerar ningún tipo de discriminación o acoso</li>
                    <li>Crear un ambiente seguro para expresar ideas y opiniones</li>
                    <li>Apoyar a nuestros compañeros en su proceso de aprendizaje</li>
                    <li>Celebrar las diferencias y aprender de ellas</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">📋 Reglas de Clase</h3>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Puntualidad en la llegada a clase</li>
                    <li>Participación activa y respetuosa</li>
                    <li>Uso del inglés en clase</li>
                    <li>Respeto por el turno de palabra</li>
                    <li>Mantenimiento del orden y limpieza del aula</li>
                    <li>Entrega oportuna de tareas y trabajos</li>
                    <li>Uso responsable de dispositivos electrónicos</li>
                    <li>Comunicación clara y respetuosa</li>
                  </ul>
                  <p className="mt-4 text-red-400 font-bold">
                    ⚠️ Infringir alguna de estas reglas tendrá una repercusión inmediata y seria en la calificación.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0077b6]/90">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rolling Waves - Bruno Marin - Liceo 65 ° Guyunusa. Todos los derechos reservados.</p>
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
    </main>
  );
} 