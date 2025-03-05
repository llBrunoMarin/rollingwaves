'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Recursos() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const recursos = [
    {
      categoria: "Gramática",
      items: [
        {
          titulo: "Perfect English Grammar",
          descripcion: "Explicaciones detalladas y ejercicios de gramática",
          link: "https://www.perfect-english-grammar.com",
          tipo: "Web"
        },
        {
          titulo: "English Grammar 101",
          descripcion: "Lecciones interactivas de gramática por niveles",
          link: "https://www.englishgrammar101.com",
          tipo: "Web"
        },
        {
          titulo: "Grammarly",
          descripcion: "Herramienta de corrección gramatical y escritura",
          link: "https://www.grammarly.com",
          tipo: "Web"
        },
        {
          titulo: "English Page",
          descripcion: "Ejercicios de gramática con explicaciones claras",
          link: "https://www.englishpage.com",
          tipo: "Web"
        }
      ]
    },
    {
      categoria: "Vocabulario",
      items: [
        {
          titulo: "Vocabulary.com",
          descripcion: "Aprende vocabulario de forma interactiva",
          link: "https://www.vocabulary.com",
          tipo: "Web"
        },
        {
          titulo: "Memrise",
          descripcion: "Aprende vocabulario con técnicas de memorización",
          link: "https://www.memrise.com",
          tipo: "Web"
        },
        {
          titulo: "Word of the Day",
          descripcion: "Aprende una palabra nueva cada día",
          link: "https://www.merriam-webster.com/word-of-the-day",
          tipo: "Web"
        },
        {
          titulo: "Visual Thesaurus",
          descripcion: "Explora palabras y sus relaciones visualmente",
          link: "https://www.visualthesaurus.com",
          tipo: "Web"
        }
      ]
    },
    {
      categoria: "Práctica Oral",
      items: [
        {
          titulo: "ELSA Speak",
          descripcion: "Aplicación para mejorar la pronunciación con IA",
          link: "https://elsaspeak.com",
          tipo: "Web"
        },
        {
          titulo: "Speaky",
          descripcion: "Plataforma para practicar speaking con nativos",
          link: "https://www.speaky.com",
          tipo: "Web"
        },
        {
          titulo: "BBC Pronunciation Tips",
          descripcion: "Videos y ejercicios de pronunciación",
          link: "https://www.bbc.co.uk/learningenglish/features/pronunciation",
          tipo: "Web"
        },
        {
          titulo: "Conversation Exchange",
          descripcion: "Encuentra compañeros de conversación",
          link: "https://www.conversationexchange.com",
          tipo: "Web"
        }
      ]
    },
    {
      categoria: "Diccionarios",
      items: [
        {
          titulo: "Cambridge Dictionary",
          descripcion: "Diccionario completo con pronunciación británica y americana",
          link: "https://dictionary.cambridge.org",
          tipo: "Web"
        },
        {
          titulo: "Oxford Learner's Dictionary",
          descripcion: "Diccionario especializado para estudiantes de inglés",
          link: "https://www.oxfordlearnersdictionaries.com",
          tipo: "Web"
        },
        {
          titulo: "WordReference",
          descripcion: "Diccionario bilingüe con foros de discusión",
          link: "https://www.wordreference.com",
          tipo: "Web"
        },
        {
          titulo: "YouGlish",
          descripcion: "Escucha cómo se pronuncian las palabras en contextos reales",
          link: "https://youglish.com",
          tipo: "Web"
        }
      ]
    },
    {
      categoria: "Varios",
      items: [
        {
          titulo: "BBC Learning English",
          descripcion: "Recursos gratuitos de la BBC",
          link: "https://www.bbc.co.uk/learningenglish",
          tipo: "Web"
        },
        {
          titulo: "British Council",
          descripcion: "Material oficial del British Council",
          link: "https://learnenglish.britishcouncil.org",
          tipo: "Web"
        },
        {
          titulo: "Duolingo",
          descripcion: "Aplicación gamificada para aprender inglés",
          link: "https://www.duolingo.com",
          tipo: "Web"
        },
        {
          titulo: "TED Talks",
          descripcion: "Charlas inspiradoras con subtítulos en inglés",
          link: "https://www.ted.com/talks",
          tipo: "Web"
        },
        {
          titulo: "ESL Pod",
          descripcion: "Podcasts para mejorar el inglés",
          link: "https://www.eslpod.com",
          tipo: "Web"
        },
        {
          titulo: "Quizlet",
          descripcion: "Herramienta para crear y estudiar flashcards",
          link: "https://quizlet.com",
          tipo: "Web"
        }
      ]
    }
  ];

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

      {/* Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Recursos de Aprendizaje</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {recursos.map((categoria) => (
              <div key={categoria.categoria} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">{categoria.categoria}</h2>
                <div className="space-y-4">
                  {categoria.items.map((item) => (
                    <a
                      key={item.titulo}
                      href={item.link}
                      target={item.tipo === "Web" ? "_blank" : "_self"}
                      rel={item.tipo === "Web" ? "noopener noreferrer" : ""}
                      className="block bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                          <p className="text-white/80">{item.descripcion}</p>
                        </div>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-6 w-6 text-white transform transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0077b6]/90">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rolling Waves. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
} 