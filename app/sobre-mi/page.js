'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

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

      {/* About Section */}
      <section className="py-16">
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

          {/* Pasatiempos y Pasiones Section */}
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