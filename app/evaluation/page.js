'use client';

import { useState, useRef, useEffect } from 'react';
import './styles.css';

const sections = [
  {
    id: 'grammar',
    title: 'Grammar and Vocabulary',
    description: '',
    type: 'quiz',
    tasks: [
      {
        id: 'grammar-1',
        question: 'What is the correct form of the verb in this sentence?\n\n"I ________ to the store yesterday."',
        options: [
          { text: 'goes', value: 'A' },
          { text: 'going', value: 'B' },
          { text: 'went', value: 'C' },
          { text: 'gone', value: 'D' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 'grammar-2',
        question: 'Choose the correct word to complete the sentence:\n\n"The ________ of the meeting was to discuss the new project."',
        options: [
          { text: 'reason', value: 'A' },
          { text: 'purpose', value: 'B' },
          { text: 'goal', value: 'C' },
          { text: 'aim', value: 'D' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 'grammar-3',
        question: 'What is the opposite of "complicated"?',
        options: [
          { text: 'easy', value: 'A' },
          { text: 'difficult', value: 'B' },
          { text: 'hard', value: 'C' },
          { text: 'simple', value: 'D' }
        ],
        correctAnswer: 'D'
      },
      {
        id: 'grammar-4',
        question: 'Choose the correct sentence:',
        options: [
          { text: 'I can to speak three languages.', value: 'A' },
          { text: 'I can speaking three languages.', value: 'B' },
          { text: 'I can speak three languages.', value: 'C' },
          { text: 'I can speaks three languages.', value: 'D' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 'grammar-5',
        question: 'Choose the correct word to fill in the blank:\n\n"______ you like coffee or tea?"',
        options: [
          { text: 'Do', value: 'A' },
          { text: 'Are', value: 'B' },
          { text: 'Does', value: 'C' },
          { text: 'Is', value: 'D' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'grammar-6',
        question: 'Select the correct question form:\n\n"You have finished your homework, ________?"',
        options: [
          { text: "didn't you", value: 'A' },
          { text: 'do you', value: 'B' },
          { text: "haven't you", value: 'C' },
          { text: "aren't you", value: 'D' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 'grammar-7',
        question: 'What is the correct word to complete the sentence?\n\n"She is the ________ person I know."',
        options: [
          { text: 'more kind', value: 'A' },
          { text: 'most kind', value: 'B' },
          { text: 'kinder', value: 'C' },
          { text: 'kindest', value: 'D' }
        ],
        correctAnswer: 'D'
      },
      {
        id: 'grammar-8',
        question: 'Choose the right verb tense:\n\n"I ________ to the cinema last night."',
        options: [
          { text: 'go', value: 'A' },
          { text: 'am going', value: 'B' },
          { text: 'was going', value: 'C' },
          { text: 'went', value: 'D' }
        ],
        correctAnswer: 'D'
      },
      {
        id: 'grammar-9',
        question: 'Select the correct sentence:',
        options: [
          { text: "She don't like pizza.", value: 'A' },
          { text: "She doesn't like pizza.", value: 'B' },
          { text: 'She not like pizza.', value: 'C' },
          { text: 'She like not pizza.', value: 'D' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 'grammar-10',
        question: 'What is the past form of "run"?',
        options: [
          { text: 'running', value: 'A' },
          { text: 'ran', value: 'B' },
          { text: 'runned', value: 'C' },
          { text: 'runs', value: 'D' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 'grammar-11',
        question: 'Choose the right question form:\n\n"What time ________ the train leave?"',
        options: [
          { text: 'does', value: 'A' },
          { text: 'do', value: 'B' },
          { text: 'is', value: 'C' },
          { text: 'will', value: 'D' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'grammar-12',
        question: 'Which sentence is correct?',
        options: [
          { text: 'I have never been to New York.', value: 'A' },
          { text: 'I never been to New York.', value: 'B' },
          { text: 'I have never gone to New York.', value: 'C' },
          { text: 'Never I have been to New York.', value: 'D' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'grammar-13',
        question: 'What is the opposite of "quiet"?',
        options: [
          { text: 'loud', value: 'A' },
          { text: 'silent', value: 'B' },
          { text: 'peaceful', value: 'C' },
          { text: 'calm', value: 'D' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'grammar-14',
        question: 'Which word is a noun?',
        options: [
          { text: 'quickly', value: 'A' },
          { text: 'ran', value: 'B' },
          { text: 'happiness', value: 'C' },
          { text: 'beautiful', value: 'D' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 'grammar-15',
        question: 'Choose the correct word to complete the sentence:\n\n"Could you ________ me the salt, please?"',
        options: [
          { text: 'bring', value: 'A' },
          { text: 'brings', value: 'B' },
          { text: 'bringing', value: 'C' },
          { text: 'brought', value: 'D' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'grammar-16',
        question: 'What does "overwhelmed" mean?',
        options: [
          { text: 'excited', value: 'A' },
          { text: 'tired', value: 'B' },
          { text: 'confused', value: 'C' },
          { text: 'stressed', value: 'D' }
        ],
        correctAnswer: 'D'
      },
      {
        id: 'grammar-18',
        question: 'Choose the correct form:\n\n"If I ________ rich, I would travel the world."',
        options: [
          { text: 'am', value: 'A' },
          { text: 'was', value: 'B' },
          { text: 'were', value: 'C' },
          { text: 'will', value: 'D' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 'grammar-19',
        question: 'Which of the following is a question word?',
        options: [
          { text: 'softly', value: 'A' },
          { text: 'when', value: 'B' },
          { text: 'here', value: 'C' },
          { text: 'very', value: 'D' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 'grammar-20',
        question: 'Choose the correct sentence:',
        options: [
          { text: "They didn't understood the question.", value: 'A' },
          { text: "They didn't understand the question.", value: 'B' },
          { text: "They didn't understanded the question.", value: 'C' },
          { text: "They doesn't understand the question.", value: 'D' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 'grammar-21',
        question: 'What is the correct way to say the following in the past?\n\n"I ________ to the park yesterday."',
        options: [
          { text: 'going', value: 'A' },
          { text: 'gone', value: 'B' },
          { text: 'was going', value: 'C' },
          { text: 'went', value: 'D' }
        ],
        correctAnswer: 'D'
      },
      {
        id: 'grammar-22',
        question: 'Choose the correct sentence:',
        options: [
          { text: 'He speaks English very good.', value: 'A' },
          { text: 'He speaks English very well.', value: 'B' },
          { text: 'He speak English very good.', value: 'C' },
          { text: 'He speak English very well.', value: 'D' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 'grammar-23',
        question: 'What is the opposite of "weak"?',
        options: [
          { text: 'strong', value: 'A' },
          { text: 'soft', value: 'B' },
          { text: 'hard', value: 'C' },
          { text: 'heavy', value: 'D' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'grammar-24',
        question: 'Select the correct sentence:',
        options: [
          { text: "I'm very interesting in learning English.", value: 'A' },
          { text: "I'm very interested in learning English.", value: 'B' },
          { text: "I'm very interested to learning English.", value: 'C' },
          { text: "I'm very interesting to learning English.", value: 'D' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 'grammar-25',
        question: 'What does the word "fortunate" mean?',
        options: [
          { text: 'lucky', value: 'A' },
          { text: 'sad', value: 'B' },
          { text: 'rich', value: 'C' },
          { text: 'unlucky', value: 'D' }
        ],
        correctAnswer: 'A'
      }
    ]
  },
  {
    id: 'uruguay',
    title: 'Uruguay Places',
    description: '',
    type: 'image',
    tasks: [
      {
        id: 'uruguay-1',
        question: "What's the name of this place?",
        imageUrl: '/images/describe.jpg',
        options: [
          { text: "That's Parque Rodo", value: 'A' },
          { text: "That's Parque Batlle", value: 'B' },
          { text: "That's Parque Rivera", value: 'C' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'uruguay-2',
        question: 'How many cars are there?',
        imageUrl: '/images/describe.jpg',
        options: [
          { text: 'There are 6 cars', value: 'A' },
          { text: 'There is 6 car', value: 'B' },
          { text: 'There are 5 cars', value: 'C' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 'uruguay-3',
        question: 'What time of the day is it?',
        imageUrl: '/images/describe.jpg',
        options: [
          { text: 'Morning', value: 'A' },
          { text: 'Evening', value: 'B' },
          { text: 'Night', value: 'C' }
        ],
        correctAnswer: 'B'
      }
    ]
  },
  {
    id: 'listening',
    title: 'Listening',
    description: '',
    type: 'audio',
    tasks: [
      {
        id: 'listening-1',
        question: "Where's the boy with the blue jacket going?",
        audioUrl: '/audio/listening-1.mp3',
        options: [
          { text: 'To the library', value: 'A' },
          { text: 'To the park', value: 'B' },
          { text: 'To the store', value: 'C' },
          { text: "I don't know", value: 'D' }
        ],
        correctAnswer: 'D'
      },
      {
        id: 'listening-2',
        question: 'What does the woman want to buy?',
        audioUrl: '/audio/listening-2.mp3',
        options: [
          { text: 'A pair of shoes', value: 'A' },
          { text: 'A jacket', value: 'B' },
          { text: 'A backpack', value: 'C' }
        ],
        correctAnswer: 'B'
      }
    ]
  },
  {
    id: 'reading',
    title: 'Reading',
    description: '',
    type: 'reading',
    tasks: [
      {
        id: 'reading-1',
        question: 'Match each phrase to its correct response.',
        matches: [
          {
            phrase: "Excuse me, where is the train station?",
            options: [
              { text: "It's next to the bank.", value: 'A' },
              { text: "I don't like trains.", value: 'B' },
              { text: "Yes, I have a ticket.", value: 'C' }
            ],
            correctAnswer: 'A'
          },
          {
            phrase: "What time does the store open?",
            options: [
              { text: "It's very expensive.", value: 'A' },
              { text: "At 9 AM.", value: 'B' },
              { text: "I love shopping.", value: 'C' }
            ],
            correctAnswer: 'B'
          },
          {
            phrase: "Would you like a cup of coffee?",
            options: [
              { text: "I prefer tea.", value: 'A' },
              { text: "The weather is nice.", value: 'B' },
              { text: "I'm going home.", value: 'C' }
            ],
            correctAnswer: 'A'
          },
          {
            phrase: "How was your weekend?",
            options: [
              { text: "I'm fine, thank you.", value: 'A' },
              { text: "It was great, thanks!", value: 'B' },
              { text: "I don't have time.", value: 'C' }
            ],
            correctAnswer: 'B'
          }
        ]
      },
      {
        id: 'reading-2',
        question: 'Choose the best response for each situation.',
        matches: [
          {
            phrase: "I'm sorry, I'm late for the meeting.",
            options: [
              { text: "That's okay, we just started.", value: 'A' },
              { text: "I like meetings.", value: 'B' },
              { text: "The weather is nice.", value: 'C' }
            ],
            correctAnswer: 'A'
          },
          {
            phrase: "Can you help me with my homework?",
            options: [
              { text: "I'm busy right now.", value: 'A' },
              { text: "Of course, what do you need help with?", value: 'B' },
              { text: "I don't like homework.", value: 'C' }
            ],
            correctAnswer: 'B'
          },
          {
            phrase: "What's your favorite color?",
            options: [
              { text: "I like pizza.", value: 'A' },
              { text: "Blue is my favorite.", value: 'B' },
              { text: "I'm going shopping.", value: 'C' }
            ],
            correctAnswer: 'B'
          }
        ]
      }
    ]
  },
  {
    id: 'writing',
    title: 'Writing',
    description: '',
    type: 'writing',
    tasks: [
      {
        id: 'writing-1',
        question: 'Complete the following sentences with the correct word.',
        sentences: [
          {
            text: 'Yesterday, I _____ to the park.',
            options: [
              { text: 'go', value: 'A' },
              { text: 'went', value: 'B' },
              { text: 'going', value: 'C' }
            ],
            correctAnswer: 'B'
          },
          {
            text: 'She _____ reading a book now.',
            options: [
              { text: 'is', value: 'A' },
              { text: 'are', value: 'B' },
              { text: 'am', value: 'C' }
            ],
            correctAnswer: 'A'
          },
          {
            text: 'They _____ to the cinema last weekend.',
            options: [
              { text: 'go', value: 'A' },
              { text: 'goes', value: 'B' },
              { text: 'went', value: 'C' }
            ],
            correctAnswer: 'C'
          },
          {
            text: 'The sun _____ in the east.',
            options: [
              { text: 'rise', value: 'A' },
              { text: 'rises', value: 'B' },
              { text: 'rising', value: 'C' }
            ],
            correctAnswer: 'B'
          }
        ]
      },
      {
        id: 'writing-2',
        question: 'Choose the correct form of the verb.',
        sentences: [
          {
            text: 'If it _____ tomorrow, I will stay at home.',
            options: [
              { text: 'rain', value: 'A' },
              { text: 'rains', value: 'B' },
              { text: 'will rain', value: 'C' }
            ],
            correctAnswer: 'B'
          },
          {
            text: 'By next year, I _____ English for five years.',
            options: [
              { text: 'study', value: 'A' },
              { text: 'will study', value: 'B' },
              { text: 'will have studied', value: 'C' }
            ],
            correctAnswer: 'C'
          },
          {
            text: 'The movie _____ when we arrived.',
            options: [
              { text: 'start', value: 'A' },
              { text: 'had started', value: 'B' },
              { text: 'starts', value: 'C' }
            ],
            correctAnswer: 'B'
          }
        ]
      }
    ]
  }
];

const levelDescriptions = {
  1: "Classic Roller (Beginner)",
  2: "Speed Triskate (Elementary)",
  3: "Freestyle Blades (Intermediate)",
  4: "One-Wheel Flow (Upper Intermediate)",
  5: "Wave Rider (Advanced)"
};

const levelRequirements = {
  1: { 
    min: 0, 
    max: 20, 
    description: "Classic Roller (Beginner)",
    thumbnail: "/images/levels/beginner.jpg",
    details: "Aprende lo básico."
  },
  2: { 
    min: 21, 
    max: 40, 
    description: "Speed Triskate (Elementary)",
    thumbnail: "/images/levels/elementary.jpg",
    details: "Mejora tu velocidad."
  },
  3: { 
    min: 41, 
    max: 60, 
    description: "Freestyle Blades (Intermediate)",
    thumbnail: "/images/levels/intermediate.jpg",
    details: "Desarrolla tu estilo."
  },
  4: { 
    min: 61, 
    max: 80, 
    description: "One-Wheel Flow (Upper Intermediate)",
    thumbnail: "/images/levels/upper-intermediate.jpg",
    details: "Domina el equilibrio."
  },
  5: { 
    min: 81, 
    max: 100, 
    description: "Wave Rider (Advanced)",
    thumbnail: "/images/levels/advanced.jpg",
    details: "Conquista las olas."
  }
};

const levelTips = {
  1: {
    analogy: "Como un Classic Roller, estás comenzando tu viaje en el mundo del inglés. Al igual que un patinador que está aprendiendo a mantener el equilibrio, estás construyendo las bases fundamentales de tu aprendizaje.",
    tips: [
      "Dedica 5 minutos al día a aprender 3 palabras nuevas.",
      "Cambia el idioma de tu teléfono a inglés.",
      "Escucha una canción en inglés y traduce su letra.",
      "Practica frases básicas frente al espejo.",
      "Usa stickers con palabras en inglés en objetos de tu casa."
    ],
    motivation: "¡Cada palabra nueva que aprendes es un paso adelante! Estás en el inicio de un emocionante viaje de aprendizaje."
  },
  2: {
    analogy: "Como un Speed Triskate, ya tienes las bases y estás ganando velocidad. Al igual que un patinador que ya puede moverse con confianza, estás desarrollando fluidez en tu comunicación.",
    tips: [
      "Lee un artículo corto en inglés durante el desayuno.",
      "Practica 10 minutos de speaking con una app de idiomas.",
      "Escribe 3 oraciones en inglés sobre tu día.",
      "Mira un video de YouTube de 5 minutos en inglés.",
      "Usa frases en inglés en tus mensajes de WhatsApp."
    ],
    motivation: "¡Estás construyendo tu confianza! Cada conversación exitosa te acerca más a tu meta."
  },
  3: {
    analogy: "Como un Freestyle Blades, ya dominas los movimientos básicos y estás desarrollando tu propio estilo. Al igual que un patinador que experimenta con nuevos trucos, estás explorando diferentes formas de expresarte.",
    tips: [
      "Lee un capítulo corto de un libro en inglés antes de dormir.",
      "Escucha un podcast de 10 minutos durante el transporte.",
      "Participa en un chat de Discord en inglés.",
      "Escribe un párrafo sobre tu película favorita.",
      "Practica la pronunciación con videos de TikTok."
    ],
    motivation: "¡Estás encontrando tu voz en inglés! Tu progreso es notable y cada día te acercas más a la fluidez."
  },
  4: {
    analogy: "Como un One-Wheel Flow, has alcanzado un nivel donde el equilibrio es natural. Al igual que un patinador que domina movimientos complejos, manejas el inglés con confianza y precisión.",
    tips: [
      "Lee noticias en inglés durante tu café matutino.",
      "Participa en un webinar de 15 minutos en inglés.",
      "Escribe un post en inglés para tus redes sociales.",
      "Practica presentaciones cortas en inglés.",
      "Mantén un grupo de chat en inglés con amigos."
    ],
    motivation: "¡Estás en un excelente nivel! Tu dominio del inglés te permite expresar ideas complejas y participar en discusiones significativas."
  },
  5: {
    analogy: "Como un Wave Rider, has alcanzado un dominio avanzado del inglés. Al igual que un patinador que domina movimientos técnicos y complejos, manejas el idioma con naturalidad y elegancia.",
    tips: [
      "Lee un artículo académico en inglés cada semana.",
      "Participa en debates en línea en inglés.",
      "Escribe un blog o newsletter en inglés.",
      "Mentorea a otros estudiantes de inglés.",
      "Crea contenido en inglés para tus redes sociales."
    ],
    motivation: "¡Eres un ejemplo de excelencia! Tu dominio del inglés te permite navegar cualquier situación con confianza y profesionalismo."
  }
};

export default function Evaluation() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [level, setLevel] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userName, setUserName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleStart = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setHasStarted(true);
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleAnswer = (answer, matchIndex) => {
    const currentSectionData = sections[currentSection];
    const currentTaskData = currentSectionData.tasks[currentTask];
    
    if (currentSectionData.type === 'reading' || (currentSectionData.type === 'writing' && currentTaskData.sentences)) {
      setAnswers({ ...answers, [`${sections[currentSection].id}-${currentTask}-${matchIndex}`]: answer });
    } else {
      setAnswers({ ...answers, [`${sections[currentSection].id}-${currentTask}`]: answer });
    }
  };

  const handleTextAnswer = (text) => {
    setAnswers({ ...answers, [`${sections[currentSection].id}-${currentTask}`]: text });
  };

  const goNext = () => {
    if (currentTask < sections[currentSection].tasks.length - 1) {
      setCurrentTask(currentTask + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentTask(0);
    } else {
      calculateLevel();
      setShowResults(true);
    }
  };

  const isAnswerSelected = (value, matchIndex) => {
    const currentSectionData = sections[currentSection];
    const currentTaskData = currentSectionData.tasks[currentTask];
    
    if (currentSectionData.type === 'reading' || (currentSectionData.type === 'writing' && currentTaskData.sentences)) {
      return answers[`${sections[currentSection].id}-${currentTask}-${matchIndex}`] === value;
    }
    return answers[`${sections[currentSection].id}-${currentTask}`] === value;
  };

  const isPreviousAnswer = (sectionIndex, taskIndex) => {
    return sectionIndex < currentSection || (sectionIndex === currentSection && taskIndex < currentTask);
  };

  const isCurrentTask = (sectionIndex, taskIndex) => {
    return sectionIndex === currentSection && taskIndex === currentTask;
  };

  const getAnswerForTask = (sectionIndex, taskIndex) => {
    const section = sections[sectionIndex];
    const task = section.tasks[taskIndex];
    
    if (section.type === 'reading' || (section.type === 'writing' && task.sentences)) {
      // Check if all sentences have been answered
      const allAnswers = task.sentences ? task.sentences.length : task.matches.length;
      for (let i = 0; i < allAnswers; i++) {
        if (!answers[`${section.id}-${taskIndex}-${i}`]) {
          return null;
        }
      }
      return true;
    }
    return answers[`${section.id}-${taskIndex}`];
  };

  const goBack = () => {
    if (currentTask > 0) {
      setCurrentTask(currentTask - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentTask(sections[currentSection - 1].tasks.length - 1);
    }
  };

  const calculateLevel = () => {
    let totalScore = 0;
    let maxScore = 0;

    sections.forEach(section => {
      section.tasks.forEach((task, taskIndex) => {
        if (section.type === 'reading' || (section.type === 'writing' && task.sentences)) {
          // For reading and writing with sentences
          const allAnswers = task.sentences ? task.sentences.length : task.matches.length;
          maxScore += allAnswers * 5;
          for (let i = 0; i < allAnswers; i++) {
            const answer = answers[`${section.id}-${taskIndex}-${i}`];
            if (answer) {
              const correctAnswer = task.sentences ? task.sentences[i].correctAnswer : task.matches[i].correctAnswer;
              if (answer === correctAnswer) {
                totalScore += 5;
              }
            }
          }
        } else {
          // For other types (image, audio, etc.)
          const answer = answers[`${section.id}-${taskIndex}`];
          if (answer) {
            maxScore += 5;
            if (task.correctAnswer && answer === task.correctAnswer) {
              totalScore += 5;
            }
          }
        }
      });
    });

    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
    let calculatedLevel;
    
    if (percentage <= 20) calculatedLevel = 1;
    else if (percentage <= 40) calculatedLevel = 2;
    else if (percentage <= 60) calculatedLevel = 3;
    else if (percentage <= 80) calculatedLevel = 4;
    else calculatedLevel = 5;
    
    setLevel(calculatedLevel);
  };

  const restartEvaluation = () => {
    setCurrentSection(0);
    setCurrentTask(0);
    setAnswers({});
    setShowResults(false);
    setLevel(null);
  };

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-[#0077b6] text-white py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-8 text-center">Welcome!</h1>
            <p className="text-xl mb-8 text-center">
              Before we begin, could you tell me your name?
            </p>
            <form onSubmit={handleStart} className="space-y-6">
              <div className="flex justify-center">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name"
                  className="bg-white/10 border border-white/20 rounded-lg px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8e8] w-full max-w-md"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#00a8e8] hover:bg-[#00a8e8]/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Start
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    // Calculate total score and percentage
    let totalScore = 0;
    let maxScore = 0;
    let answersSummary = [];

    sections.forEach(section => {
      if (!section || !section.tasks) return;
      
      section.tasks.forEach((task, taskIndex) => {
        if (!task) return;
        
        if (section.type === 'reading' || (section.type === 'writing' && task.sentences)) {
          // For reading and writing with sentences
          const allAnswers = task.sentences ? task.sentences.length : task.matches.length;
          maxScore += allAnswers * 5;
          for (let i = 0; i < allAnswers; i++) {
            const answer = answers[`${section.id}-${taskIndex}-${i}`];
            if (answer) {
              const correctAnswer = task.sentences ? task.sentences[i].correctAnswer : task.matches[i].correctAnswer;
              if (answer === correctAnswer) {
                totalScore += 5;
              }
            }
          }
        } else {
          // For other types (image, audio, etc.)
          const answer = answers[`${section.id}-${taskIndex}`];
          if (answer) {
            maxScore += 5;
            if (task.correctAnswer && answer === task.correctAnswer) {
              totalScore += 5;
            }
          }
        }

        // Add to answers summary
        if (section.type === 'image' && task.options) {
          const answer = answers[`${section.id}-${taskIndex}`];
          const selectedOption = task.options.find(opt => opt.value === answer);
          answersSummary.push({
            section: section.title,
            question: task.question || 'No question',
            answer: selectedOption ? selectedOption.text : 'No answer',
            correct: answer === task.correctAnswer
          });
        } else if ((section.type === 'reading' || (section.type === 'writing' && task.sentences)) && task.matches) {
          task.matches.forEach((match, matchIndex) => {
            if (!match) return;
            
            const matchAnswer = answers[`${section.id}-${taskIndex}-${matchIndex}`];
            const selectedOption = match.options ? match.options.find(opt => opt.value === matchAnswer) : null;
            answersSummary.push({
              section: section.title,
              question: match.phrase || 'No phrase',
              answer: selectedOption ? selectedOption.text : 'No answer',
              correct: matchAnswer === match.correctAnswer
            });
          });
        } else if (task.options) {
          const answer = answers[`${section.id}-${taskIndex}`];
          const selectedOption = task.options.find(opt => opt.value === answer);
          answersSummary.push({
            section: section.title,
            question: task.question || 'No question',
            answer: selectedOption ? selectedOption.text : 'No answer',
            correct: answer === task.correctAnswer
          });
        }
      });
    });

    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
    let calculatedLevel;
    
    if (percentage <= 20) calculatedLevel = 1;
    else if (percentage <= 40) calculatedLevel = 2;
    else if (percentage <= 60) calculatedLevel = 3;
    else if (percentage <= 80) calculatedLevel = 4;
    else calculatedLevel = 5;

    return (
      <div className="min-h-screen bg-[#0077b6] text-white py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm mb-8">
            <h1 className="text-4xl font-bold mb-8 text-center">¡{userName}, tu nivel es {levelDescriptions[calculatedLevel]}!</h1>
            <p className="text-xl mb-8 text-center">
              {levelTips[calculatedLevel].analogy}
            </p>
            <p className="text-lg mb-4 text-center text-white/90">
              {levelTips[calculatedLevel].motivation.replace('¡', `¡${userName}, `)}
            </p>

            <div className="bg-white/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Tips para mejorar:</h3>
              <ul className="space-y-3">
                {levelTips[calculatedLevel].tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00a8e8] mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Progress Bar with Levels */}
            <div className="mb-8">
              <div className="relative h-8 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00a8e8] via-[#00b4f4] to-[#00a8e8] animate-water-flow"></div>
                  <div className="absolute inset-0 animate-wave">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] translate-x-1/2"></div>
                  </div>
                </div>
                <div 
                  className="absolute h-full w-1 bg-white shadow-lg z-10"
                  style={{ left: `${percentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/70">
                <span>Beginner</span>
                <span>Elementary</span>
                <span>Intermediate</span>
                <span>Upper Int.</span>
                <span>Advanced</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={restartEvaluation}
                className="bg-[#00a8e8] hover:bg-[#00a8e8]/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Volver a evaluar
              </button>
            </div>
          </div>
        </div>

        {/* Level Details Modal */}
        {selectedLevel && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0077b6] rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{levelDescriptions[selectedLevel]}</h2>
                <button 
                  onClick={() => setSelectedLevel(null)}
                  className="text-white/70 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analogía</h3>
                  <p className="text-white/90">{levelTips[selectedLevel].analogy}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tips para mejorar</h3>
                  <ul className="space-y-3">
                    {levelTips[selectedLevel].tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#00a8e8] mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Motivación</h3>
                  <p className="text-white/90">{levelTips[selectedLevel].motivation}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0077b6] text-white py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-8 text-center">¿Qué tipo de roller eres?</h1>
          <p className="text-xl mb-8 text-center">
            Completa cada sección para determinar tu nivel actual
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-[#00a8e8] transition-all duration-1000"
                style={{ 
                  width: `${((currentSection * sections[0].tasks.length + currentTask) / 
                  (sections.length * sections[0].tasks.length)) * 100}%` 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a8e8] via-[#00b4f4] to-[#00a8e8] animate-water-flow"></div>
                <div className="absolute inset-0 animate-wave">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">{sections[currentSection].title}</h2>
            <p className="text-lg mb-6">{sections[currentSection].description}</p>

            {/* Section Content */}
            {sections[currentSection].type === 'quiz' && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-lg mb-4 whitespace-pre-line">
                    {sections[currentSection].tasks[currentTask].question}
                  </p>
                  <div className="space-y-3">
                    {sections[currentSection].tasks[currentTask].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          isAnswerSelected(option.value)
                            ? 'bg-[#00a8e8] text-white'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{option.value}.</span>
                          <span>{option.text}</span>
                          {isAnswerSelected(option.value) && (
                            <svg
                              className="ml-auto h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {sections[currentSection].type === 'image' && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    {sections[currentSection].tasks[currentTask].question}
                  </p>
                  <div className="mb-6">
                    <img 
                      src={sections[currentSection].tasks[currentTask].imageUrl} 
                      alt="Question image"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    {sections[currentSection].tasks[currentTask].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          isAnswerSelected(option.value)
                            ? 'bg-[#00a8e8] text-white'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{option.value}.</span>
                          <span>{option.text}</span>
                          {isAnswerSelected(option.value) && (
                            <svg
                              className="ml-auto h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {sections[currentSection].type === 'audio' && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    {sections[currentSection].tasks[currentTask].question}
                  </p>
                  <div className="mb-6 flex justify-center">
                    <audio
                      ref={audioRef}
                      src={sections[currentSection].tasks[currentTask].audioUrl}
                      className="w-full max-w-md"
                    />
                    <button
                      onClick={isPlaying ? pauseAudio : playAudio}
                      className="ml-4 bg-[#00a8e8] hover:bg-[#00a8e8]/90 text-white p-3 rounded-full transition-all duration-300"
                    >
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="space-y-3">
                    {sections[currentSection].tasks[currentTask].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          isAnswerSelected(option.value)
                            ? 'bg-[#00a8e8] text-white'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{option.value}.</span>
                          <span>{option.text}</span>
                          {isAnswerSelected(option.value) && (
                            <svg
                              className="ml-auto h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {sections[currentSection].type === 'reading' && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    {sections[currentSection].tasks[currentTask].question}
                  </p>
                  <div className="space-y-4">
                    {sections[currentSection].tasks[currentTask].matches.map((match, matchIndex) => (
                      <div key={matchIndex} className="bg-white/5 p-4 rounded-lg">
                        <p className="text-lg mb-3">{match.phrase}</p>
                        <div className="space-y-2">
                          {match.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              onClick={() => handleAnswer(option.value, matchIndex)}
                              className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                                isAnswerSelected(option.value, matchIndex)
                                  ? 'bg-[#00a8e8] text-white'
                                  : 'bg-white/5 hover:bg-white/10'
                              }`}
                            >
                              <div className="flex items-center">
                                <span className="mr-3">{option.value}.</span>
                                <span>{option.text}</span>
                                {isAnswerSelected(option.value, matchIndex) && (
                                  <svg
                                    className="ml-auto h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {sections[currentSection].type === 'writing' && (
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    {sections[currentSection].tasks[currentTask].question}
                  </p>
                  <div className="space-y-4">
                    {sections[currentSection].tasks[currentTask].sentences.map((sentence, sentenceIndex) => (
                      <div key={sentenceIndex} className="bg-white/5 p-4 rounded-lg">
                        <p className="text-lg mb-3">{sentence.text}</p>
                        <div className="space-y-2">
                          {sentence.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              onClick={() => handleAnswer(option.value, sentenceIndex)}
                              className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                                isAnswerSelected(option.value, sentenceIndex)
                                  ? 'bg-[#00a8e8] text-white'
                                  : 'bg-white/5 hover:bg-white/10'
                              }`}
                            >
                              <div className="flex items-center">
                                <span className="mr-3">{option.value}.</span>
                                <span>{option.text}</span>
                                {isAnswerSelected(option.value, sentenceIndex) && (
                                  <svg
                                    className="ml-auto h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={goBack}
                disabled={currentSection === 0 && currentTask === 0}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  currentSection === 0 && currentTask === 0
                    ? 'bg-white/10 text-white/50 cursor-not-allowed'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                Anterior
              </button>
              <button
                onClick={goNext}
                disabled={!getAnswerForTask(currentSection, currentTask)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  !getAnswerForTask(currentSection, currentTask)
                    ? 'bg-white/10 text-white/50 cursor-not-allowed'
                    : 'bg-[#00a8e8] hover:bg-[#00a8e8]/90'
                }`}
              >
                {currentSection === sections.length - 1 && currentTask === sections[currentSection].tasks.length - 1
                  ? 'Finalizar'
                  : 'Siguiente'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 