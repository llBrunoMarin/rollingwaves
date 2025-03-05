'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [expandedCards, setExpandedCards] = useState({
    'personal-presentation': false,
    'class-rules': false,
    'english-debate': false
  });

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const openModal = (modalType) => {
    setActiveModal(modalType);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveModal(null);
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
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">March</h3>
              <div className="space-y-4">
                <div 
                  className="bg-white/5 p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300"
                  onClick={() => openModal('introductory')}
                >
                  <h4 className="text-lg font-semibold mb-2">Introductory Module</h4>
                  <p className="text-white/80">Course start and level assessment</p>
                </div>
                <div 
                  className="bg-white/5 p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300"
                  onClick={() => openModal('rubrics')}
                >
                  <h4 className="text-lg font-semibold mb-2">Rúbricas de evaluación diagnóstica</h4>
                  <p className="text-white/80">Evaluación detallada de habilidades</p>
                </div>
              </div>
            </div>

            {/* April */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">April</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Inicio del proceso de acreditación de UC correlativas</li>
                <li>• 1era reunión de profesores - segunda quincena</li>
              </ul>
            </div>

            {/* May */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">May</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• 1er Informe de actuación - Primera Quincena</li>
              </ul>
            </div>

            {/* June */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">June</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• 2ndo Informe de actuación - Segunda Quincena</li>
              </ul>
            </div>

            {/* July */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">July</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Receso del 30/06 al 11/07</li>
                <li>• Evaluación semestral</li>
                <li>• Prueba de acreditación</li>
              </ul>
            </div>

            {/* August */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">August</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• 3r Informe de actuación - Primera Quincena</li>
                <li>• 2nda reunión de profesores</li>
              </ul>
            </div>

            {/* September */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">September</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Receso 22 al 24/09</li>
                <li>• Prueba de acreditación</li>
              </ul>
            </div>

            {/* October */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">October</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• 4to Informe de actuación - Primera Quincena</li>
              </ul>
            </div>

            {/* November */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">November</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Finalización 28/11</li>
              </ul>
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
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">March</h3>
              <div className="space-y-4">
                <div 
                  className="bg-white/5 p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300"
                  onClick={() => openModal('introductory')}
                >
                  <h4 className="text-lg font-semibold mb-2">Introductory Module</h4>
                  <p className="text-white/80">Course start and level assessment</p>
                </div>
                <div 
                  className="bg-white/5 p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300"
                  onClick={() => openModal('rubrics')}
                >
                  <h4 className="text-lg font-semibold mb-2">Rúbricas de evaluación diagnóstica</h4>
                  <p className="text-white/80">Evaluación detallada de habilidades</p>
                </div>
              </div>
            </div>

            {/* April */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">April</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>

            {/* May */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">May</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>

            {/* June */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">June</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>

            {/* July */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">July</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>

            {/* August */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">August</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>

            {/* September */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">September</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>

            {/* October */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">October</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>

            {/* November */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">November</h3>
              <p className="text-white/60 italic">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="bg-gradient-to-br from-[#0077b6] to-[#005b8c] rounded-2xl w-full max-w-5xl my-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#0077b6] to-[#005b8c] p-6 border-b border-white/10 flex justify-between items-center z-10 rounded-t-2xl">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{activeModal === 'introductory' ? '🎓' : '📊'}</span>
                <h3 className="text-2xl font-bold">
                  {activeModal === 'introductory' ? 'Introductory Module' : 'Rúbricas de Evaluación Diagnóstica'}
                </h3>
              </div>
              <button 
                onClick={closeModal}
                className="text-white hover:text-white/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              {activeModal === 'introductory' ? (
                <>
                  {/* Welcome Section */}
                  <div className="text-center mb-12">
                    <h4 className="text-3xl font-bold mb-4">Welcome to Your English Journey! 🌊</h4>
                    <p className="text-xl text-white/90">Get ready to start an exciting adventure in learning English</p>
                  </div>

                  {/* Main Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* First Day Activities */}
                      <div className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="p-6 bg-white/10">
                          <h4 className="text-xl font-semibold flex items-center">
                            <span className="mr-3">📅</span>
                            First Day Activities
                          </h4>
                        </div>
                        <div className="p-6 space-y-4">
                          {/* Personal Presentation Card */}
                          <div className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
                            <button 
                              onClick={() => toggleCard('personal-presentation')}
                              className="w-full p-4 flex justify-between items-center"
                            >
                              <div className="flex items-center">
                                <span className="mr-3 text-xl">👤</span>
                                <span className="font-semibold text-lg">Personal Presentation</span>
                              </div>
                              <svg 
                                className={`w-6 h-6 transform transition-transform ${expandedCards['personal-presentation'] ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {expandedCards['personal-presentation'] && (
                              <div className="p-4 border-t border-white/10">
                                <p className="text-white/90 mb-3">Prepare a short presentation about yourself including:</p>
                                <ul className="list-disc list-inside space-y-2 text-white/90">
                                  <li>Your name and its origin</li>
                                  <li>Your age</li>
                                  <li>Your favorite activities</li>
                                  <li>Your goals for learning English</li>
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Class Rules Card */}
                          <div className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
                            <button 
                              onClick={() => toggleCard('class-rules')}
                              className="w-full p-4 flex justify-between items-center"
                            >
                              <div className="flex items-center">
                                <span className="mr-3 text-xl">📋</span>
                                <span className="font-semibold text-lg">Class Rules</span>
                              </div>
                              <svg 
                                className={`w-6 h-6 transform transition-transform ${expandedCards['class-rules'] ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {expandedCards['class-rules'] && (
                              <div className="p-4 border-t border-white/10">
                                <p className="text-white/90 mb-3">Important rules for our English class:</p>
                                <ul className="list-disc list-inside space-y-2 text-white/90">
                                  <li>Always arrive on time</li>
                                  <li>Bring your materials to class</li>
                                  <li>Participate actively in activities</li>
                                  <li>Respect your classmates</li>
                                  <li>Use English as much as possible</li>
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* English Debate Card */}
                          <div className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
                            <button 
                              onClick={() => toggleCard('english-debate')}
                              className="w-full p-4 flex justify-between items-center"
                            >
                              <div className="flex items-center">
                                <span className="mr-3 text-xl">💬</span>
                                <span className="font-semibold text-lg">English Debate</span>
                              </div>
                              <svg 
                                className={`w-6 h-6 transform transition-transform ${expandedCards['english-debate'] ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {expandedCards['english-debate'] && (
                              <div className="p-4 border-t border-white/10">
                                <p className="text-white/90 mb-3">Topics for our first English debate:</p>
                                <ul className="list-disc list-inside space-y-2 text-white/90">
                                  <li>Why learning English is important</li>
                                  <li>Your favorite way to learn English</li>
                                  <li>Challenges in learning a new language</li>
                                  <li>Future opportunities with English</li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Module Content */}
                      <div className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="p-6 bg-white/10">
                          <h4 className="text-xl font-semibold flex items-center">
                            <span className="mr-3">📚</span>
                            Module Content
                          </h4>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white/5 p-6 rounded-lg">
                              <h5 className="text-lg font-semibold mb-4">Basic Skills</h5>
                              <ul className="space-y-3">
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">📖</span>
                                  English Alphabet
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">🔢</span>
                                  Numbers up to 30
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">👤</span>
                                  Personal Presentation
                                </li>
                              </ul>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg">
                              <h5 className="text-lg font-semibold mb-4">Language Elements</h5>
                              <ul className="space-y-3">
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">✍️</span>
                                  Name Spelling
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">👥</span>
                                  Personal Pronouns
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">📅</span>
                                  Days of the Week
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Evaluation Process */}
                      <div className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="p-6 bg-white/10">
                          <h4 className="text-xl font-semibold flex items-center">
                            <span className="mr-3">📝</span>
                            Evaluation Process
                          </h4>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white/5 p-6 rounded-lg">
                              <h5 className="text-lg font-semibold mb-4">Initial Assessment</h5>
                              <ul className="space-y-3">
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">1️⃣</span>
                                  Oral participation
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">2️⃣</span>
                                  <a href="https://forms.gle/b9aAEiYxCWUijEJy9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Google Forms assessment
                                  </a>
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">3️⃣</span>
                                  Name pronunciation
                                </li>
                              </ul>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg">
                              <h5 className="text-lg font-semibold mb-4">Final Evaluation</h5>
                              <ul className="space-y-3">
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">4️⃣</span>
                                  Group work
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">5️⃣</span>
                                  Interactive games
                                </li>
                                <li className="flex items-center text-white/90">
                                  <span className="mr-3 text-xl">6️⃣</span>
                                  Final presentation
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Learning Resources */}
                      <div className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="p-6 bg-white/10">
                          <h4 className="text-xl font-semibold flex items-center">
                            <span className="mr-3">📌</span>
                            Learning Resources
                          </h4>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white/5 p-6 rounded-lg">
                              <h5 className="text-lg font-semibold mb-4">Online Resources</h5>
                              <ul className="space-y-3">
                                <li>
                                  <a href="https://www.bbc.co.uk/learningenglish/features/pronunciation" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/90 hover:text-white transition-colors">
                                    <span className="mr-3 text-xl">🔗</span>
                                    BBC Pronunciation Guide
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.youtube.com/watch?v=75p-N9YKqNo" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/90 hover:text-white transition-colors">
                                    <span className="mr-3 text-xl">🔗</span>
                                    Alphabet Song
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.eslgamesplus.com/numbers-1-100-vocabulary-sentences-esl-vocabulary-and-grammar-interactive-crocodile-board-game/" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/90 hover:text-white transition-colors">
                                    <span className="mr-3 text-xl">🔗</span>
                                    Numbers Practice
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.spellzone.com/word_lists/games-123.htm" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/90 hover:text-white transition-colors">
                                    <span className="mr-3 text-xl">🔗</span>
                                    Spelling Practice
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-8">
                  {/* Evaluation Rubrics Section */}
                  <div className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                    <div className="p-6 bg-white/10">
                      <h4 className="text-xl font-semibold flex items-center">
                        <span className="mr-3">📊</span>
                        Rúbricas de Evaluación Diagnóstica
                      </h4>
                    </div>
                    <div className="p-6 space-y-8">
                      {/* English Usage Rubric */}
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h5 className="text-lg font-semibold mb-4">1. Uso del Inglés en Expresión Oral y Escrita</h5>
                        <div className="space-y-3">
                          {[
                            { level: 6, desc: "Expresión clara, fluida y precisa en inglés. Usa una variedad de vocabulario y estructuras con muy pocos o ningún error." },
                            { level: 5, desc: "Buena expresión en inglés con algunos errores menores que no afectan la comprensión. Uso adecuado de vocabulario y gramática." },
                            { level: 4, desc: "Expresión comprensible pero con errores frecuentes en gramática o vocabulario. Se necesita algo de corrección para la claridad." },
                            { level: 3, desc: "Expresión limitada con errores que afectan la comprensión. Necesita apoyo para mejorar la claridad y precisión." },
                            { level: 2, desc: "Dificultades significativas en la expresión. Uso muy limitado del inglés, con errores graves en gramática y vocabulario." },
                            { level: 1, desc: "No logra expresarse en inglés de manera comprensible. Usa frases muy básicas o en otro idioma." }
                          ].map((item) => (
                            <div key={item.level} className="flex items-start space-x-4">
                              <span className="font-bold text-lg">{item.level}</span>
                              <p className="text-white/90">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Alphabet Knowledge Rubric */}
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h5 className="text-lg font-semibold mb-4">2. Conocimiento y Uso del Alfabeto en Inglés</h5>
                        <div className="space-y-3">
                          {[
                            { level: 6, desc: "Pronuncia y deletrea correctamente todas las letras del alfabeto en inglés sin errores." },
                            { level: 5, desc: "Pronuncia y deletrea casi todas las letras correctamente, con solo algunos errores menores." },
                            { level: 4, desc: "Comete varios errores en la pronunciación o deletreo, pero logra ser comprensible." },
                            { level: 3, desc: "Tiene dificultades notables para pronunciar y deletrear correctamente más de la mitad de las letras." },
                            { level: 2, desc: "Presenta un conocimiento muy limitado del alfabeto en inglés y apenas logra deletrear palabras." },
                            { level: 1, desc: "No conoce ni pronuncia correctamente las letras del alfabeto en inglés." }
                          ].map((item) => (
                            <div key={item.level} className="flex items-start space-x-4">
                              <span className="font-bold text-lg">{item.level}</span>
                              <p className="text-white/90">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Numbers Recognition Rubric */}
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h5 className="text-lg font-semibold mb-4">3. Reconocimiento y Uso de los Números del 1 al 30</h5>
                        <div className="space-y-3">
                          {[
                            { level: 6, desc: "Puede contar, identificar y escribir correctamente los números del 1 al 30 sin errores." },
                            { level: 5, desc: "Puede contar y escribir la mayoría de los números del 1 al 30 con pequeños errores ocasionales." },
                            { level: 4, desc: "Reconoce y usa la mayoría de los números del 1 al 30, pero comete errores frecuentes." },
                            { level: 3, desc: "Dificultades para contar o escribir correctamente más de la mitad de los números." },
                            { level: 2, desc: "Solo reconoce y usa algunos números correctamente, con errores constantes." },
                            { level: 1, desc: "No logra reconocer ni escribir correctamente los números del 1 al 30." }
                          ].map((item) => (
                            <div key={item.level} className="flex items-start space-x-4">
                              <span className="font-bold text-lg">{item.level}</span>
                              <p className="text-white/90">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Days of the Week Rubric */}
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h5 className="text-lg font-semibold mb-4">4. Identificación y Uso de los Días de la Semana</h5>
                        <div className="space-y-3">
                          {[
                            { level: 6, desc: "Nombra, escribe y usa correctamente los 7 días de la semana en inglés sin errores." },
                            { level: 5, desc: "Puede nombrar y escribir casi todos los días de la semana con pocos errores menores." },
                            { level: 4, desc: "Reconoce y usa los días de la semana, pero con varios errores en escritura o pronunciación." },
                            { level: 3, desc: "Dificultades para recordar o escribir correctamente más de la mitad de los días de la semana." },
                            { level: 2, desc: "Solo reconoce algunos días de la semana, con errores constantes en pronunciación y escritura." },
                            { level: 1, desc: "No logra identificar ni escribir correctamente los días de la semana." }
                          ].map((item) => (
                            <div key={item.level} className="flex items-start space-x-4">
                              <span className="font-bold text-lg">{item.level}</span>
                              <p className="text-white/90">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Final Product Evaluation */}
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h5 className="text-lg font-semibold mb-4">5. Evaluación del Producto Final</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            { title: "Creatividad y Presentación", levels: [
                              "Información bien estructurada, innovadora y visualmente atractiva.",
                              "Presentación clara con elementos creativos, pero podría mejorar en estructura.",
                              "Presentación básica con algo de organización pero poco impacto visual.",
                              "Presentación desordenada y con poco esfuerzo visual.",
                              "Producto incompleto o con poca dedicación.",
                              "No hay producto final o está inentendible."
                            ]},
                            { title: "Precisión en Datos", levels: [
                              "Todos los datos son correctos y bien organizados.",
                              "Pequeños errores en los datos sin afectar la comprensión.",
                              "Varios errores en los datos, pero comprensible.",
                              "Errores significativos en la información.",
                              "Datos incorrectos o faltantes.",
                              "Información inexistente o errónea."
                            ]},
                            { title: "Trabajo en Equipo", levels: [
                              "Todos los miembros contribuyeron activamente.",
                              "La mayoría participó activamente.",
                              "Algunos miembros contribuyeron, otros participaron poco.",
                              "Solo algunos miembros trabajaron activamente.",
                              "Poca o nula participación del equipo.",
                              "No hubo trabajo en equipo."
                            ]},
                            { title: "Uso del Inglés", levels: [
                              "Uso correcto del vocabulario y gramática con mínima o ninguna corrección.",
                              "Uso adecuado del inglés con algunos errores menores.",
                              "Errores frecuentes en vocabulario y gramática.",
                              "Errores que afectan la comprensión del mensaje.",
                              "Uso muy limitado del inglés, difícil de comprender.",
                              "No se logró usar inglés de forma comprensible."
                            ]}
                          ].map((category) => (
                            <div key={category.title} className="bg-white/5 p-4 rounded-lg">
                              <h6 className="font-semibold mb-3">{category.title}</h6>
                              <div className="space-y-2">
                                {category.levels.map((level, index) => (
                                  <div key={index} className="flex items-start space-x-2">
                                    <span className="font-bold">{6 - index}</span>
                                    <p className="text-sm text-white/90">{level}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Final Average */}
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h5 className="text-lg font-semibold mb-4">6. Promedio Final Diagnóstico</h5>
                        <p className="text-white/90">
                          Cada categoría tiene un peso igual en la evaluación final. Se obtiene el promedio de las cinco áreas evaluadas para asignar una calificación final en la escala del 1 al 6.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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