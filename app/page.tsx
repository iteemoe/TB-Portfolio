'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skillsData = [
    { name: 'Netzwerkinfrastruktur', level: 90 },
    { name: 'Server Administration', level: 85 },
    { name: 'Virtualisierung', level: 80 },
    { name: 'Cloud Lösungen', level: 75 },
    { name: 'IT-Sicherheit', level: 85 },
    { name: 'Datenbanken', level: 70 },
  ];

  const projectsData = [
    {
      title: 'Unternehmensnetzwerk Modernisierung',
      description: 'Planung und Implementierung einer komplett neuen Netzwerkinfrastruktur für ein mittelständisches Unternehmen.',
      technologies: ['Cisco', 'VLAN', 'Firewall', 'WiFi 6']
    },
    {
      title: 'Server Migration zu Azure',
      description: 'Migration von On-Premise Servern in die Microsoft Azure Cloud mit minimaler Downtime.',
      technologies: ['Azure', 'PowerShell', 'Active Directory']
    },
    {
      title: 'Virtualisierungslösung mit VMware',
      description: 'Implementierung einer Virtualisierungsumgebung zur Konsolidierung der Serverlandschaft.',
      technologies: ['VMware', 'vSphere', 'SAN Storage']
    }
  ];

  const experienceData = [
    {
      role: 'Senior IT-Systemintegrator',
      company: 'TechSolutions GmbH',
      period: '2020 - Heute',
      description: 'Verantwortlich für die Planung und Implementierung von IT-Infrastrukturlösungen für Unternehmenskunden.'
    },
    {
      role: 'IT-Systemadministrator',
      company: 'DataNet AG',
      period: '2016 - 2020',
      description: 'Administration von Serverumgebungen und Unterstützung bei IT-Projekten.'
    },
    {
      role: 'IT-Auszubildender',
      company: 'Systemhaus Müller',
      period: '2013 - 2016',
      description: 'Ausbildung zum Fachinformatiker für Systemintegration.'
    }
  ];

  const sectionClass = "animate-fadeInUp";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Partikel-Hintergrund */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Netzwerk-Linien Hintergrund */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="orange" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hauptcontainer */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-6 mb-12 border-b border-orange-500/30">
          <div className="text-2xl font-bold select-none">
            <span className="text-orange-400">Timo</span>
            <span className="text-yellow-400"> Bösch</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 bg-gray-800/50 p-1 rounded-lg backdrop-blur-sm">
            {['home', 'skills', 'projects', 'experience', 'contact', 'impressum'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white shadow-lg animate-gradient-x'
                    : 'text-orange-300 hover:text-yellow-300 hover:bg-gray-700/50'
                }`}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-orange-400 p-2 rounded-md hover:bg-gray-700/40"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Öffne Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mb-8 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {['home', 'skills', 'projects', 'experience', 'contact', 'impressum'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white shadow-lg animate-gradient-x'
                      : 'text-orange-300 hover:text-yellow-300 hover:bg-gray-700/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sections */}
        {activeTab === 'home' && (
          <section className={`mb-20 text-center ${sectionClass}`}>
            <div className="inline-block p-2 mb-6 rounded-full bg-orange-900/20 border border-orange-500/30">
              <div className="flex items-center text-orange-400 text-sm">
                <span className="h-2 w-2 rounded-full bg-orange-400 mr-2 animate-pulse"></span>
                IT-Systemintegrator
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
              Timo <span className="text-yellow-300">Bösch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Ich integriere, konfiguriere und optimiere IT-Systeme für maximale Leistung und Effizienz.
            </p>
          </section>
        )}

        {activeTab === 'skills' && (
          <section className={`mb-20 ${sectionClass}`}>
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">Meine Fähigkeiten</h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Umfassende Expertise in der Integration und Administration von IT-Systemen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skillsData.map((skill, index) => (
                <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-orange-500/20 backdrop-blur-sm animate-fadeInUp">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-orange-300">{skill.name}</span>
                    <span className="text-yellow-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-orange-600 to-yellow-500 h-2.5 rounded-full transition-all duration-700 ease-out animate-gradient-x" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className={`mb-20 ${sectionClass}`}>
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">Projekte</h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Eine Auswahl meiner erfolgreichsten IT-Integrationsprojekte
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-orange-300 mb-3 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-orange-900/40 text-orange-300 rounded-full text-sm animate-gradient-x">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'experience' && (
          <section className={`mb-20 ${sectionClass}`}>
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">Berufserfahrung</h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Meine berufliche Entwicklung im Bereich IT-Systemintegration
            </p>
            <div className="max-w-3xl mx-auto">
              {experienceData.map((exp, index) => (
                <div key={index} className="mb-10 relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-orange-500 before:z-10 after:content-[''] after:absolute after:left-2 after:top-2 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-orange-500 after:to-orange-900 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-orange-300 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden md:block mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className={`mb-20 ${sectionClass}`}>
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
              Kontakt
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Treten Sie mit mir in Kontakt für Ihr nächstes IT-Projekt
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Kontaktinformationen */}
              <div className="bg-gray-800/30 p-8 rounded-xl border border-orange-500/20 backdrop-blur-sm animate-fadeInUp">
                <h3 className="text-xl font-bold text-orange-300 mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                  Kontaktinformationen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-900/30 p-2 rounded-lg mr-4 animate-gradient-x">
                      <span className="text-orange-400">📧</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-200">E-Mail</h4>
                      <p className="text-gray-400">timo.boesch@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-900/30 p-2 rounded-lg mr-4 animate-gradient-x">
                      <span className="text-orange-400">📱</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-200">Telefon</h4>
                      <p className="text-gray-400">+49 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-900/30 p-2 rounded-lg mr-4 animate-gradient-x">
                      <span className="text-orange-400">📍</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-200">Standort</h4>
                      <p className="text-gray-400">München, Deutschland</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-orange-500/20">
                  <h4 className="font-medium text-gray-200 mb-4">Soziale Netzwerke</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-orange-900/30 p-3 rounded-lg text-orange-400 hover:bg-orange-900/50 transition-colors animate-gradient-x">LinkedIn</a>
                    <a href="#" className="bg-orange-900/30 p-3 rounded-lg text-orange-400 hover:bg-orange-900/50 transition-colors animate-gradient-x">Xing</a>
                    <a href="#" className="bg-orange-900/30 p-3 rounded-lg text-orange-400 hover:bg-orange-900/50 transition-colors animate-gradient-x">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Nachricht senden */}
              <div className="bg-gray-800/30 p-8 rounded-xl border border-orange-500/20 backdrop-blur-sm animate-fadeInUp">
                <h3 className="text-xl font-bold text-orange-300 mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">Nachricht senden</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input type="text" id="name" className="w-full bg-gray-700/50 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">E-Mail</label>
                    <input type="email" id="email" className="w-full bg-gray-700/50 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Nachricht</label>
                    <textarea id="message" rows={4} className="w-full bg-gray-700/50 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg font-medium text-white hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-orange-500/20 animate-gradient-x">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'impressum' && (
          <section className={`mb-20 max-w-4xl mx-auto text-gray-300 ${sectionClass}`}>
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">Impressum</h2>
            <p className="mb-4"><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>Timo Bösch<br/>Musterstraße 12<br/>80333 München<br/>Deutschland</p>
            <p className="mt-4"><strong>Kontakt:</strong><br/>Telefon: +49 123 456 789<br/>E-Mail: timo.boesch@example.com</p>
            <p className="mt-4"><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br/>Timo Bösch, Musterstraße 12, 80333 München</p>
            <p className="mt-4"><strong>Haftungsausschluss:</strong><br/>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.</p>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-orange-500/30 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Timo Bösch. Alle Rechte vorbehalten.</p>
        </footer>
      </div>

      {/* Keyframes für Tailwind Erweiterung */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </div>
  );
}
