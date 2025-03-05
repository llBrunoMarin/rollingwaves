'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

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

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Catch the <strong>wave</strong>. Speak with <strong>confidence</strong>.
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto">
            Aprender inglés es abrir puertas a tu futuro. El esfuerzo de hoy será tu éxito de mañana.
          </p>
          <p className="text-2xl md:text-4xl font-bold text-white/90">
            ¡Comprométete contigo mismo!
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Calendar 1st Year EMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* March */}
            <div 
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              <h3 className="text-2xl font-bold mb-4">March</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Introductory Module</h4>
                  <p className="text-white/80">Course start and level assessment</p>
                </div>
              </div>
            </div>

            {/* April */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">April</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* May */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">May</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* June */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">June</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* July */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">July</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* August */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">August</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* September */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">September</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* October */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">October</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* November */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">November</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Calendar Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Calendar 2nd Year EMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* March */}
            <div 
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              <h3 className="text-2xl font-bold mb-4">March</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Introductory Module</h4>
                  <p className="text-white/80">Course start and level assessment</p>
                </div>
              </div>
            </div>

            {/* April */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">April</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* May */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">May</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* June */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">June</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* July */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">July</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* August */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">August</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* September */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">September</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* October */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">October</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* November */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">November</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/60 italic">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0077b6] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Módulo Introductorio</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-semibold mb-4">Cómo y cuándo serás evaluado/a</h4>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">1️⃣ 📅 Primer día</p>
                    <p className="text-white/80">Participación en actividades orales (presentación personal, reglas de clase, debate sobre el inglés).</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">2️⃣ 📝 Tareas a entregar</p>
                    <p className="text-white/80">
                      <a 
                        href="https://forms.gle/S32wpYdPYZShtqPz5" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors"
                      >
                        🆕 Google Forms
                      </a>
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">3️⃣ 🔤 Sesión 1</p>
                    <p className="text-white/80">Pronunciación y deletreo del nombre en inglés (evaluación oral individual).</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">4️⃣ 📊 Sesión 2</p>
                    <p className="text-white/80">Trabajo en grupo organizando datos sobre nombres (evaluación en equipo).</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">5️⃣ ❓ Sesión 3</p>
                    <p className="text-white/80">Juego interactivo (Kahoot/Quizlet) sobre la historia de "Guyunusa" (evaluación de comprensión).</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">6️⃣ 🎨 Sesión 4</p>
                    <p className="text-white/80">Creación de la mascota en equipo (evaluación de creatividad y uso del inglés).</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">7️⃣ 🗣 Presentación final</p>
                    <p className="text-white/80">Cada grupo expone su mascota en inglés (evaluación oral y grupal).</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">8️⃣ 👥 Trabajo en equipo</p>
                    <p className="text-white/80">Se evaluará colaboración y participación activa en todas las sesiones.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">9️⃣ ✅ Uso del inglés</p>
                    <p className="text-white/80">Se valorará esfuerzo, pronunciación, gramática y vocabulario en cada actividad.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">🔟 🏆 Reconocimiento</p>
                    <p className="text-white/80">El equipo con la mejor mascota será premiado y su trabajo se exhibirá en clase.</p>
                  </div>
                </div>

                {/* Learning Resources Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-xl font-semibold mb-4">📌 Recursos para Aprender y Practicar</h4>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="font-semibold mb-2">✅ El abecedario en inglés:</p>
                      <div className="space-y-2">
                        <a href="https://www.bbc.co.uk/learningenglish/features/pronunciation" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">
                          🔗 ABC Pronunciation Guide – BBC Learning English
                        </a>
                        <a href="https://www.youtube.com/watch?v=75p-N9YKqNo" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">
                          🔗 Alphabet Song – YouTube
                        </a>
                      </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="font-semibold mb-2">✅ Números hasta el 30:</p>
                      <div className="space-y-2">
                        <a href="https://www.eslgamesplus.com/numbers-1-100-vocabulary-sentences-esl-vocabulary-and-grammar-interactive-crocodile-board-game/" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">
                          🔗 Numbers 1-30 – ESL Games Plus
                        </a>
                      
                      </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="font-semibold mb-2">✅ Presentación personal y origen del nombre:</p>
                      <div className="space-y-2">
                        <a href="https://www.youtube.com/watch?v=WlF05dBhZQs" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">
                          🔗 Cómo presentarse en inglés – British Council
                        </a>
                        <a href="https://www.youtube.com/watch?v=Ywz4ZWQVlX0" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">
                          🔗 Introduce Yourself – YouTube
                        </a>
                      </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="font-semibold mb-2">✅ Deletreo del nombre:</p>
                      <div className="space-y-2">
                        <a href="https://www.spellzone.com/word_lists/games-123.htm" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">
                          🔗 Spelling Practice – Spellzone
                        </a>
                      
                      </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="font-semibold mb-2">✅ Pronombres personales:</p>
                      <div className="space-y-2">
                        <a href="https://dictionary.cambridge.org/grammar/british-grammar/pronouns-personal-i-me-you-him-it-they-etc" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">
                          🔗 Personal Pronouns – Cambridge Dictionary
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-white/80 font-semibold">📚 Consejo: Usa estas páginas para practicar antes de la evaluación. ¡Mientras más practiques, más fácil será! 🚀</p>
                </div>

                {/* Evaluation Summary */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-xl font-semibold mb-4">📌 Resumen de Evaluación del Módulo Introductorio</h4>
                  <p className="text-white/80 mb-4">Al finalizar el módulo, serás evaluado/a en:</p>
                  <div className="space-y-3">
                    <p className="flex items-center text-white/80">
                      <span className="mr-2">✅</span>
                      El abecedario en inglés (pronunciación y reconocimiento).
                    </p>
                    <p className="flex items-center text-white/80">
                      <span className="mr-2">✅</span>
                      Los números hasta el 30 (lectura y escritura).
                    </p>
                    <p className="flex items-center text-white/80">
                      <span className="mr-2">✅</span>
                      Presentación personal (nombre, edad, origen del nombre).
                    </p>
                   

                    <p className="flex items-center text-white/80">
                      <span className="mr-2">✅</span>
                      Deletreo de tu nombre en inglés.
                    </p>
                    <p className="flex items-center text-white/80">
                      <span className="mr-2">✅</span>
                      Uso correcto de los pronombres personales (She/He/It/You/We/They).
                    </p>
                     <p className="flex items-center text-white/80">
                      <span className="mr-2">✅</span>
                      Días de la semana en inglés.
                    </p>
                  </div>
                  <p className="mt-4 text-white/80 font-semibold">¡Prepárate para demostrar lo que has aprendido! 🚀</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0077b6]/90">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rolling Waves - Bruno Marin - Liceo 65 ° Guyunusa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
} 