'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: 'Plateforme de gestion RAM avec chatbot',
      description: 'Plateforme web de gestion des vols, billets et avions avec chatbot intégré pour l\'assistance client',
      tech: ['Django', 'Python', 'AI Chatbot'],
      link: '#',
      category: 'Web & Mobile'
    },
    {
      title: 'Hospital Management System',
      description: 'Système complet de gestion hospitalière avec gestion des patients, rendez-vous et dossiers médicaux',
      tech: ['.NET', 'C#', 'SQL Server'],
      link: '#',
      category: 'Web & Mobile'
    },
    {
      title: 'Application Mobile E-Commerce',
      description: 'Application mobile complète de commerce électronique avec panier, paiement et suivi des commandes',
      tech: ['React Native', 'Node.js', 'MySQL'],
      link: '#',
      category: 'Web & Mobile'
    },
    {
      title: 'Portail Étudiants',
      description: 'Plateforme de gestion académique pour étudiants avec notes, emploi du temps et ressources',
      tech: ['Django', 'MySQL'],
      link: '#',
      category: 'Web & Mobile'
    },
    {
      title: 'Gestion Employés & Projets & RH',
      description: 'Système de gestion des ressources humaines avec suivi des projets et des employés',
      tech: ['Django', 'Neo4J'],
      link: '#',
      category: 'Web & Mobile'
    },
    {
      title: 'Gestion Coupe du Monde 2030',
      description: 'Application de gestion des matchs, équipes et statistiques pour la Coupe du Monde',
      tech: ['JavaFX', 'MySQL'],
      link: '#',
      category: 'Desktop & Conception'
    },
    {
      title: 'Plateforme de gestion d\'événements',
      description: 'Système de planification et gestion d\'événements avec réservations et notifications',
      tech: ['JavaScript', 'MySQL'],
      link: '#',
      category: 'Desktop & Conception'
    }
  ];

  const skills = {
    'Langages': ['C', 'C++', 'C#', 'Java', 'PHP', 'JavaScript', 'Python', 'HTML', 'CSS'],
    'Frameworks': ['JavaFX', '.NET', 'React Native', 'React.js', 'Next.js', 'Node.js', 'Symfony', 'Django', 'Spring Boot', 'Scrum(Agile)'],
    'Bases de données': ['MySQL', 'Oracle 12c', 'MongoDB', 'Neo4j', 'SQL Server', 'Cassandra'],
    'Systèmes / DevOps': ['Linux (Ubuntu, Debian, RedHat)', 'Docker', 'ESXi', 'Git', 'Cloud']
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-blue-900/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">ELKHAL Abdessamad</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-white transition">À propos</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition">Compétences</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projets</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            ELKHAL Abdessamad
          </h2>
          <p className="text-2xl text-blue-300 mb-6">
            Hey! I'm ELKHAL Abdessamad
          </p>
          <p className="text-xl text-blue-400 mb-8">
            I Design the Future!
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Étudiant en 4ème année à l'EMSI Casablanca, spécialisé en développement digital des systèmes informatiques. 
            À la recherche d'un stage PFA de 2 mois pour mettre en pratique mes compétences techniques au sein d'une équipe professionnelle.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="/CV_ELKHAL_Abdessamad.pdf" 
              download="CV_ELKHAL_Abdessamad.pdf"
              className="px-6 py-3 border-2 border-blue-400 text-white rounded-lg hover:bg-blue-400/10 transition flex items-center gap-2"
            >
              <Download size={20} />
              Télécharger CV
            </a>
            <span className="text-gray-400 flex items-center gap-2 px-4 py-3">
              ✓ Disponible pour un stage PFA
            </span>
          </div>
          <div className="flex gap-4 mb-6">
            <a href="https://github.com/ELKHALAbdessamad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abdessamad-elkhal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:elkhalabdesamad000@gmail.com" className="text-gray-400 hover:text-white transition">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex flex-col gap-2 text-gray-300 text-sm">
            <a href="mailto:elkhalabdesamad000@gmail.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail size={16} />
              elkhalabdesamad000@gmail.com
            </a>
            <a href="tel:+212623661586" className="flex items-center gap-2 hover:text-white transition">
              <Phone size={16} />
              +212 623 661 586
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Berrechid – Casablanca, Maroc
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
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

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">À propos de moi</h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Développeur Full Stack passionné avec une solide expérience en développement web et mobile. 
            J'ai réalisé plusieurs projets académiques et professionnels utilisant des technologies modernes 
            comme Django, React Native, .NET, et Node.js. Mon parcours inclut des stages chez Royal Air Maroc 
            et Multicérame, où j'ai développé des compétences en gestion de données, développement de chatbots, 
            et gestion de systèmes informatiques.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-950/40 border border-blue-900/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">Expériences</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-blue-300 font-semibold">Stage d'Initiation – Royal Air Maroc</p>
                  <p className="text-gray-400 text-sm">Juillet 2025 | Nouacer, Maroc</p>
                  <ul className="text-gray-300 text-sm mt-2 list-disc list-inside">
                    <li>Suivi des opérations informatisées et gestion des données</li>
                    <li>Conception d'une plateforme web de gestion des vols avec chatbot</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold">Stage d'Observation – Multicérame</p>
                  <p className="text-gray-400 text-sm">Juillet 2023 | Berrechid, Maroc</p>
                  <ul className="text-gray-300 text-sm mt-2 list-disc list-inside">
                    <li>Observation des processus opérationnels</li>
                    <li>Suivi de la gestion des commandes, stocks et produits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-950/40 border border-blue-900/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">Certifications</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-blue-300 font-semibold">Introduction to Front-End Development</p>
                  <p className="text-gray-400 text-sm">Meta - 2026</p>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold">IBM Professional Back-End Certification</p>
                  <p className="text-gray-400 text-sm">IBM - 2026</p>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold">React Native Mobile</p>
                  <p className="text-gray-400 text-sm">Meta - 2025</p>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold">Programming with Python</p>
                  <p className="text-gray-400 text-sm">University of Michigan - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-white mb-12">Mes Compétences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-950/40 border border-blue-900/30 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-white mb-4">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-white mb-12">Projets Académiques</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative bg-gradient-to-br from-blue-950/40 to-slate-950 border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 transition"
            >
              <div className="mb-4">
                <span className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-950/40 to-slate-950 border border-blue-900/30 rounded-xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Travaillons ensemble</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Je suis à la recherche d'un stage PFA de 2 mois. Contactez-moi pour discuter de vos opportunités.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:elkhalabdesamad000@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-semibold"
            >
              <Mail size={20} />
              Envoyer un email
            </a>
            <a
              href="tel:+212623661586"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-400 text-white rounded-lg hover:bg-blue-400/10 transition font-semibold"
            >
              <Phone size={20} />
              Appeler
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://github.com/ELKHALAbdessamad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/abdessamad-elkhal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 border-t border-blue-900/20 text-center text-gray-400">
        <p>&copy; 2026 ELKHAL Abdessamad. Tous droits réservés.</p>
        <p className="text-sm mt-2">Étudiant en Cycle Ingénieur Informatique & Réseaux - EMSI Casablanca</p>
      </footer>
    </div>
  );
}