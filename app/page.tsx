'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Phone, MapPin, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: 'Système de Prédiction MASI - Full Stack',
      description: 'Collecte de données financières historiques, entraînement d\'un modèle ML de prédiction du MASI et MASI 20, API REST et interface web avec graphiques interactifs',
      tech: ['Python', 'TensorFlow', 'Spring Boot', 'React', 'Chart.js', 'MySQL'],
      category: 'Data & IA',
      highlight: true
    },
    {
      title: 'Plateforme de gestion RAM avec chatbot',
      description: 'Plateforme web de gestion des vols, billets et avions avec chatbot intégré pour l\'assistance client',
      tech: ['Django', 'Python', 'React', 'Chatbot'],
      category: 'Web & Mobile'
    },
    {
      title: 'Hospital Management System',
      description: 'Système complet de gestion hospitalière avec gestion des patients, rendez-vous et dossiers médicaux',
      tech: ['.NET', 'C#', 'SQL Server'],
      category: 'Web & Mobile'
    },
    {
      title: 'Application Mobile E-Commerce',
      description: 'Application mobile complète de commerce électronique avec panier, paiement et suivi des commandes',
      tech: ['React Native', 'Node.js', 'MySQL'],
      category: 'Web & Mobile'
    },
    {
      title: 'Gestion Cabinet Dentaire',
      description: 'Système de gestion des patients et rendez-vous avec intégration OCR pour traitement de documents',
      tech: ['Spring Boot', 'MySQL', 'Thymeleaf', 'OCR'],
      category: 'Web & Mobile'
    },
    {
      title: 'Portail Étudiants',
      description: 'Plateforme de gestion académique pour étudiants avec notes, emploi du temps et ressources',
      tech: ['Django', 'MySQL'],
      category: 'Web & Mobile'
    },
    {
      title: 'Gestion Employés & Projets & RH',
      description: 'Système de gestion des ressources humaines avec suivi des projets et des employés',
      tech: ['Django', 'Neo4J'],
      category: 'Web & Mobile'
    },
    {
      title: 'Gestion Coupe du Monde 2030',
      description: 'Application de gestion des matchs, équipes et statistiques pour la Coupe du Monde',
      tech: ['JavaFX', 'MySQL'],
      category: 'Desktop & Conception'
    },
    {
      title: 'Plateforme de gestion d\'événements',
      description: 'Système de planification et gestion d\'événements avec réservations et notifications',
      tech: ['JavaScript', 'MySQL'],
      category: 'Desktop & Conception'
    }
  ];

  const skills = {
    'Langages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'C', 'C++', 'PHP', 'HTML', 'CSS'],
    'Frameworks': ['.NET', 'React', 'React Native', 'Next.js', 'Vite.js', 'Node.js', 'Spring Boot', 'Django', 'JavaFX', 'Chart.js'],
    'Data & IA': ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Analyse & prétraitement de données'],
    'Bases de données': ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Firebase', 'Neo4j'],
    'Systèmes / DevOps': ['Linux (Ubuntu, RedHat)', 'Docker', 'Git'],
    'Sécurité / Méthodes': ['Keycloak (authentification, gestion des accès)', 'Scrum (Agile)']
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 transition-colors duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200 dark:border-blue-900/20 bg-white/80 dark:bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-slate-900 dark:text-white font-bold text-lg sm:text-xl"
          >
            ELKHAL Abdessamad
          </motion.h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
            <div className="hidden sm:flex gap-4 md:gap-6">
              <a href="#about" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition text-sm md:text-base">À propos</a>
              <a href="#skills" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition text-sm md:text-base">Compétences</a>
              <a href="#projects" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition text-sm md:text-base">Projets</a>
              <a href="#contact" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition text-sm md:text-base">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4"
          >
            ELKHAL Abdessamad
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl text-blue-600 dark:text-blue-300 mb-4 sm:mb-6"
          >
            Hey! I'm ELKHAL Abdessamad
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-blue-700 dark:text-blue-400 mb-6 sm:mb-8"
          >
            I Design the Future!
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-slate-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed"
          >
            Étudiant en 5ème année à l'EMSI Casablanca, spécialisé en développement digital des systèmes informatiques, avec une double compétence en développement Full Stack et en Data & IA. 
            Passionné par la création de solutions innovantes et l'apprentissage de nouvelles technologies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-6 sm:mb-8"
          >
            <a 
              href="/CV_ELKHAL_Abdessamad.pdf" 
              download="CV_ELKHAL_Abdessamad.pdf"
              className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-white rounded-lg hover:bg-blue-600/10 dark:hover:bg-blue-400/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Télécharger CV
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center lg:justify-start gap-4 mb-6"
          >
            <a href="https://github.com/ELKHALAbdessamad" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abdessamad-elkhal/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:Abdessamad.elkhal2@gmail.com" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-2 text-slate-600 dark:text-gray-300 text-sm items-center lg:items-start"
          >
            <a href="mailto:Abdessamad.elkhal2@gmail.com" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition">
              <Mail size={16} />
              Abdessamad.elkhal2@gmail.com
            </a>
            <a href="tel:+212623661586" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition">
              <Phone size={16} />
              +212 623 661 586
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Berrechid – Casablanca, Maroc
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
            <Image
              src="/profile.png"
              alt="ELKHAL Abdessamad"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* About Section - White Background */}
      <section id="about" className="bg-slate-50 dark:bg-slate-900 py-12 sm:py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">À propos de moi</h3>
            <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Développeur Full Stack et Data Scientist passionné avec une expérience pratique en développement web, mobile et machine learning. 
              J'ai réalisé plusieurs projets académiques et professionnels utilisant des technologies modernes comme Django, React, .NET, Node.js, TensorFlow et Spring Boot. 
              Mon stage PFA récent chez BMCE Capital m'a permis de développer des compétences avancées en prétraitement de données, modélisation ML et déploiement d'API REST. 
              Je suis spécialisé dans la création de solutions end-to-end combinant backend robuste, frontend moderne et algorithmes de machine learning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 sm:p-6 transition-colors duration-300">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Expériences</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">Stage PFA – Full Stack – BMCE Capital</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">Juillet – Septembre 2026 | Casablanca, Maroc</p>
                    <ul className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm mt-2 list-disc list-inside space-y-1">
                      <li>Collecte et prétraitement de données financières (MASI, MASI 20)</li>
                      <li>Entraînement d'un modèle ML de prédiction avec TensorFlow</li>
                      <li>Conception d'une API REST avec Spring Boot & MySQL</li>
                      <li>Développement d'interface web avec React & Chart.js</li>
                      <li>Implémentation de sécurité avec Keycloak</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">Stage d'Initiation – Royal Air Maroc</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">Juillet 2025 | Nouacer, Maroc</p>
                    <ul className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm mt-2 list-disc list-inside">
                      <li>Suivi des opérations informatisées et gestion des données</li>
                      <li>Conception d'une plateforme web de gestion des vols avec chatbot</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">Stage d'Observation – Multicérame</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">Juillet 2023 | Berrechid, Maroc</p>
                    <ul className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm mt-2 list-disc list-inside">
                      <li>Observation des processus opérationnels</li>
                      <li>Suivi de la gestion des commandes, stocks et produits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 sm:p-6 transition-colors duration-300">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Certifications</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">Become a Java SE 17 Developer</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">Oracle - 2026</p>
                  </div>
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">IBM Professional Back-End Certification</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">IBM - 2026</p>
                  </div>
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">React Native Mobile</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">Meta - 2025</p>
                  </div>
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">Programming with Python</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">University of Michigan - 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-12 sm:py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12">Mes Compétences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-50 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-900/30 rounded-lg p-4 sm:p-6 transition-all duration-300"
              >
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50 dark:bg-slate-900 py-12 sm:py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12">Projets Académiques</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`group relative bg-white dark:bg-slate-800 border rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 ${
                  project.highlight
                    ? 'border-2 border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20'
                    : 'border-slate-200 dark:border-slate-700 hover:border-blue-500/50'
                }`}
              >
                <div className="mb-3 sm:mb-4 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 sm:px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.highlight && (
                    <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-2 sm:px-3 py-1 rounded-full font-semibold">
                      ⭐ Stage PFA
                    </span>
                  )}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href="https://github.com/ELKHALAbdessamad?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-lg transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105"
            >
              <Github size={20} />
              Voir tous mes projets sur GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-12 sm:py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-950/40 dark:to-slate-950 border border-slate-200 dark:border-blue-900/30 rounded-xl p-6 sm:p-12 text-center transition-colors duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Travaillons ensemble</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="mailto:Abdessamad.elkhal2@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105"
              >
                <Mail size={20} />
                Envoyer un email
              </a>
              <a
                href="tel:+212623661586"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-white rounded-lg hover:bg-blue-600/10 dark:hover:bg-blue-400/10 transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105"
              >
                <Phone size={20} />
                Appeler
              </a>
            </div>
            <div className="mt-6 sm:mt-8 flex justify-center gap-6">
              <a href="https://github.com/ELKHALAbdessamad" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition hover:scale-110">
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a href="https://www.linkedin.com/in/abdessamad-elkhal/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition hover:scale-110">
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-blue-900/20 py-8 sm:py-12 text-center text-slate-600 dark:text-gray-400 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm sm:text-base">&copy; 2026 ELKHAL Abdessamad. Tous droits réservés.</p>
          <p className="text-xs sm:text-sm mt-2">Étudiant en Cycle Ingénieur Informatique & Réseaux - EMSI Casablanca</p>
        </div>
      </footer>
    </div>
  );
}
