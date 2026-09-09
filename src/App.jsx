import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Code,
  Database, 
  Globe, 
  Terminal, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Share2,
  ChevronRight, 
  Menu, 
  X, 
  Layers,
  Sparkles,
  CheckCircle2,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('all');
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Copy to Clipboard Feedback State
  const [copiedText, setCopiedText] = useState('');

  // Handle active navigation state on window scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  // Data Arrays
  const statsData = [
    { number: '1.4+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Delivered' },
    { number: '6+', label: 'Certifications' },
    { number: '99.9%', label: 'Database Uptime' },
  ];

  const experienceData = [
    {
      role: 'Application Developer ',
      company: 'Hallmark Gobal  Technology Ltd.',
      period: '2025- Present',
      location: 'Hyderabad, India',
      highlights: [
          'Developed business applications using KodeFast low-code/no-code platform leveraging drag-and drop development capabilities.',
          'Configured forms, entities, workflows, and business rules for rapid application development.',
          'Built automation-driven solutions to streamline workflows and improve business process efficiency.',
          'Developed scalable applications using reusable templates, visual configuration tools and platform modules',
  
      ],
      tags: ['Python', 'MySQL', 'HTML5', 'CSS3', 'SQL Server', 'React.js',]
    },
    {
      role: 'Software Engineer',
      company: 'Spiffy 9',
      period: '2024- 2025',
      location: 'Hyderabad, India',
      highlights: [
        'Developed Python automation scripts for extracting and processing data from PDF documents.',
        'Implemented Regex-based automation for pattern recognition, parsing, and structured data extractionn.',
        'Automated repetitive document-processing tasks to improve efficiency and reduce manual intervention.',
        'Worked on data validation, cleansing, and transformation as part of automation workflows.',
        'Contributed to building reliable and scalable Python automation solutions for data processing.'

      ],
      tags: ['Python', 'HTML5', 'CSS3', 'Node.js', 'MongoDB', 'React.js', 'SQL Server']
    },
  ];

  const skillsData = [
    {
      category: 'Application Development',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'REST APIs & Microservices', level: 92 }
      ]
    },
    {
      category: 'Web Development',
      icon: <Globe size={24} />,
      skills: [
        { name: 'JavaScript ', level: 95 },
        { name: 'React.js & Vite', level: 92 },
        { name: 'HTML5 / CSS3 / Grid / Flexbox', level: 98 },
        { name: 'Responsive Web Design', level: 95 }
      ]
    },
    {
      category: 'Database Development',
      icon: <Database size={24} />,
      skills: [
        { name: 'PostgreSQL & MySQL', level: 95 },
        { name: 'Microsoft SQL Server', level: 90 },
        { name: 'Query Optimization & Indexing', level: 92 },
        { name: 'MongoDB (NoSQL)', level: 84 }
      ]
    },
   
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Kodefast Web Applications',
      category: 'web',
      image: '/kodefast_analytics.jpg',
      description: 'Real-time corporate analytics dashboard for monitoring operational KPIs, team throughput, and server load with live chart visualizations.',
      fullDescription: 'Comprehensive web application engineered for executive overview of enterprise operational metrics, database throughput, and real-time telemetry.',
      highlights: [
        'Interactive real-time charts driven by WebSocket data streams.',
        'Optimized query performance for millions of historical log records.',
        'Exportable PDF & Excel reports generated server-side.'
      ],
      tags: ['React', 'Vite', 'PostgreSQL', 'Node.js', 'Chart.js'],
      dbTech: 'PostgreSQL 15, Redis Caching, Express REST API',
      githubUrl: 'https://github.com/jagadeesh-vurata/analytics-dashboard',
      liveUrl: 'https://www.kodefast.com/schedule-a-demo.php'
    },
    {
      id: 2,
      title: 'Database Query Optimizer & Visualizer',
      category: 'database',
      image: '/project_analytics.jpg',
      description: 'Developer suite that analyzes SQL execution plans, diagnoses missing indexes, and automatically generates ER diagrams.',
      fullDescription: 'An essential tool designed for database administrators and developers to inspect execution trees, pinpoint slow queries, and automate schema migrations.',
      highlights: [
        'Execution plan visualizer with cost analysis alerts.',
        'Automatic SQL index recommendation engine.',
        'Export ER diagrams in SVG and PNG formats.'
      ],
      tags: ['Python', 'SQL Server', 'React', 'Electron'],
      dbTech: 'Microsoft SQL Server, PostgreSQL, SQLite',
      githubUrl: 'https://github.com/jagadeesh-vurata/sql-query-optimizer',
      liveUrl: 'https://demo-sql-optimizer.example.com'
    },
    {
      id: 3,
      title: 'Smart Inventory & Order System',
      category: 'app',
      image: '/project_analytics.jpg',
      description: 'Multi-warehouse inventory platform featuring automated reorder triggers, supplier management, and barcode scanning support.',
      fullDescription: 'End-to-end full-stack web application used to synchronize inventory stock across multiple warehouses in real time.',
      highlights: [
        'Multi-tenant architecture with role-based access control.',
        'Automated email notifications when stock drops below threshold.',
        'REST API integration with third-party logistics services.'
      ],
      tags: ['C#', '.NET Core', 'MySQL', 'React', 'Docker'],
      dbTech: 'MySQL 8.0 with InnoDB Cluster, Redis',
      githubUrl: 'https://github.com/jagadeesh-vurata/inventory-management',
      liveUrl: 'https://demo-inventory.example.com'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Health Portal',
      category: 'web',
      image: '/project_analytics.jpg',
      description: 'Centralized management dashboard for tracking microservices health, database cluster replication lag, and server CPU/RAM usage.',
      fullDescription: 'Monitoring web application providing immediate alerts and historical trend analysis for distributed cloud microservices.',
      highlights: [
        'Automated health check pings every 10 seconds across global nodes.',
        'Sleek dark mode glassmorphism UI built with pure CSS and React.',
        'Custom alert webhooks for Slack and Microsoft Teams.'
      ],
      tags: ['JavaScript', 'React', 'MongoDB', 'Docker', 'CSS3'],
      dbTech: 'MongoDB Replica Set, Node.js Microservices',
      githubUrl: 'https://github.com/jagadeesh-vurata/cloud-health-portal',
      liveUrl: 'https://demo-cloudhealth.example.com'
    }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === projectFilter);

  const certificationsData = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Issued Jan 2024 • Expired Jan 2027',
      credId: 'AWS-ASA-994821',
      icon: <Award size={28} />
    },
    {
      title: 'Microsoft Certified: Azure Database Administrator',
      issuer: 'Microsoft',
      date: 'Issued Nov 2023',
      credId: 'MSFT-DBA-549102',
      icon: <Database size={28} />
    },
    {
      title: 'Oracle Certified Professional: MySQL 8.0 Developer',
      issuer: 'Oracle Corporation',
      date: 'Issued Aug 2023',
      credId: 'ORCL-OCP-882103',
      icon: <Award size={28} />
    },
    {
      title: 'Meta Certified Front-End Developer',
      issuer: 'Meta / Coursera',
      date: 'Issued Mar 2023',
      credId: 'META-FED-332910',
      icon: <Globe size={28} />
    },
    {
      title: 'PostgreSQL Enterprise Database Specialist',
      issuer: 'PostgreSQL Global Development Group',
      date: 'Issued Dec 2022',
      credId: 'PG-SPEC-773120',
      icon: <Database size={28} />
    }
  ];

  return (
    <div className="portfolio-app">
      {/* 1. Header Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Jagadeesh
          </a>

          {/* Desktop Nav Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#certifications" 
                className={`nav-link ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}
              >
                Certifications
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* 2. Hero / Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-backdrop-glow"></div>
        
        <div className="status-badge">
          <span className="status-dot"></span> Available for Full-Time & High-Impact Projects
        </div>

        <div className="hero-avatar-container">
          <div className="avatar-pulse-ring"></div>
          <div className="avatar-pulse-ring-outer"></div>
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-inner">
              <img src="/avatar.jpg" alt="Vurata Jagadeesh" className="hero-avatar" />
            </div>
          </div>
          <div className="avatar-floating-badge">
            <Sparkles size={14} className="text-blue" /> Software Developer
          </div>
        </div>

        <h1 className="hero-title">Vurata Jagadeesh</h1>
        
        <div className="hero-role">
          Application Developer | Web Developer | Database Developer
        </div>

        <p className="hero-desc">
          Developing robust applications, responsive websites, and efficient database solutions to deliver seamless digital experiences.
        </p>

        <div className="hero-actions">
          <button className="btn-primary flex-center gap-2" onClick={() => setIsResumeOpen(true)}>
            <Download size={18} /> Download Resume
          </button>
          <button className="btn-secondary flex-center gap-2" onClick={() => scrollToSection('projects')}>
            View Projects
          </button>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Experience Section */}
      <section id="experience" className="section">
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Proven track record building enterprise applications and optimizing databases</p>
        </div>

        <div className="timeline">
          {experienceData.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <span className="timeline-company">{item.company} • {item.location}</span>
                  </div>
                  <span className="timeline-date">{item.period}</span>
                </div>
                <div className="timeline-body">
                  <ul>
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                  <div className="tech-tags">
                    {item.tags.map((t, tIdx) => (
                      <span className="tech-tag" key={tIdx}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-tag">Technical Proficiency</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Core technologies, frameworks, databases, and development tools</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-icon">
                {cat.icon}
              </div>
              <h3 className="skill-card-title">{cat.category}</h3>
              <div className="skill-list">
                {cat.skills.map((s, sIdx) => (
                  <div className="skill-item" key={sIdx}>
                    <div className="skill-info">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-percent">{s.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects Portfolio</h2>
          <p className="section-subtitle">Explore recent application, web, and database developments</p>
        </div>

        <div className="project-filters">
          <button 
            className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setProjectFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${projectFilter === 'web' ? 'active' : ''}`}
            onClick={() => setProjectFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${projectFilter === 'database' ? 'active' : ''}`}
            onClick={() => setProjectFilter('database')}
          >
            Database Systems
          </button>
          <button 
            className={`filter-btn ${projectFilter === 'app' ? 'active' : ''}`}
            onClick={() => setProjectFilter('app')}
          >
            Applications
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                  onError={(e) => { e.target.onerror = null; e.target.src = '/project_analytics.jpg'; }}
                />
                <span className="project-category-badge">{project.category}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((t, idx) => (
                    <span className="tech-tag" key={idx}>{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button 
                    className="project-btn btn-secondary"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details & Architecture
                  </button>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn btn-primary"
                  >
                    Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Certifications Section */}
      <section id="certifications" className="section">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">Industry verified certifications in cloud, database administration, and web technologies</p>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-icon-wrapper">
                {cert.icon}
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-meta">{cert.date}</p>
                <p className="cert-meta" style={{ marginTop: '0.2rem' }}>Credential ID: {cert.credId}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact Us Section */}
      <section id="contact" className="section">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Have a project in mind or want to connect? Send a message!</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-col">
            <h3>Let's talk about your next project</h3>
            <p>
              Whether you need a high-performance web application, database query optimization, or enterprise software development, I am ready to collaborate.
            </p>

            <div className="contact-methods">
              <div className="contact-method-card">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Email Address</span>
                  <p className="contact-method-val">jagadeeshvurata@example.com</p>
                </div>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard('jagadeeshvurata@example.com', 'email')}
                  title="Copy email"
                >
                  {copiedText === 'email' ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                </button>
              </div>

              <div className="contact-method-card">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Phone Number</span>
                  <p className="contact-method-val">+91 9014177672</p>
                </div>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard('+91 9014177672', 'phone')}
                  title="Copy phone"
                >
                  {copiedText === 'phone' ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                </button>
              </div>

              <div className="contact-method-card">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Location</span>
                  <p className="contact-method-val">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            {formSubmitted ? (
              <div className="form-success-msg">
                <CheckCircle2 size={24} />
                <div>
                  <strong>Thank you for reaching out!</strong>
                  <p style={{ fontSize: '0.85rem', fontWeight: 'normal', marginTop: '0.2rem' }}>
                    Your message has been received. Vurata Jagadeesh will reply shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    className="form-input"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@example.com"
                    className="form-input"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Project Inquiry / Database Optimization"
                    className="form-input"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    placeholder="Tell me about your project or inquiry..."
                    className="form-textarea"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary flex-center gap-2" style={{ marginTop: '0.5rem' }}>
                  Send Message <ChevronRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Vurata Jagadeesh
          </a>
          <p className="hero-desc" style={{ marginBottom: 0 }}>
            Application Developer • Web Developer • Database Developer
          </p>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub" title="GitHub">
              <Code size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn" title="LinkedIn">
              <Globe size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter" title="Twitter">
              <Share2 size={18} />
            </a>
            <a href="mailto:jagadeesh.vurata@example.com" className="social-icon-btn" aria-label="Email" title="Email">
              <Mail size={18} />
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Vurata Jagadeesh. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
