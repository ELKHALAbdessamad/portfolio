'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description de votre projet',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/ELKHALAbdessamad/projet1',
      image: '/project1.jpg'
    },
    {
      title: 'Projet 2',
      description: 'Description de votre projet',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/ELKHALAbdessamad/projet2',
      image: '/project2.jpg'
    },
    // Ajoutez plus de projets
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-blue-900/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">ELKHALA</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Hey! I'm Abdessamad ELKHALA
          </h2>
          <p className="text-2xl text-blue-300 mb-6">
            I Design & Build the Future!
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Je suis un développeur passionné et dédié avec une expertise en Software Engineering et IA. 
            J'aime transformer des idées en solutions impactantes et innovantes.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="px-6 py-3 border-2 border-blue-400 text-white rounded-lg hover:bg-blue-400/10 transition flex items-center gap-2">
              <Download size={20} />
              Télécharger CV
            </button>
            <span className="text-gray-400 flex items-center gap-2 px-4 py-3">
              ✓ Available for Work
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-blue-900/30 bg-blue-950/20">
            {/* Remplacez par votre photo professionnelle */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-900/20 flex items-center justify-center">
              <Image
                src="/profile.jpg" // Ajoutez votre photo
                alt="Abdessamad ELKHALA"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
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
            Avec une passion pour la technologie et l'innovation, je me spécialise dans le développement 
            d'applications modernes et performantes. Mon parcours combine expertise technique et créativité 
            pour délivrer des solutions qui font la différence.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Web3', 'DevOps', 'Cloud'].map((skill) => (
              <div key={skill} className="bg-blue-950/40 border border-blue-900/30 rounded-lg p-4 text-center">
                <p className="text-white font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-white mb-12">Mes Projets</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative bg-gradient-to-br from-blue-950/40 to-slate-950 border border-blue-900/30 rounded-xl overflow-hidden hover:border-blue-500/50 transition"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-blue-900/10 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  Voir le projet <ExternalLink size={16} />
                </a>
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
            Avez-vous un projet en tête? Contactez-moi et discutons de comment je peux vous aider.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-semibold"
          >
            <Mail size={20} />
            Envoyer un email
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 border-t border-blue-900/20 text-center text-gray-400">
        <p>&copy; 2026 Abdessamad ELKHALA. Tous droits réservés.</p>
      </footer>
    </div>
  );
}