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

  // 3D Parallax & Scroll States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle active navigation state, scroll progress, and parallax
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = ['home', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = currentScrollY + 200;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-3d-in');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal-3d');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [projectFilter]);

  // 3D Mouse Movement Tracking for Hero
  const handleHeroMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY
    });
  };

  const handleHeroMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Interactive 3D Card Hover Physics
  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardReset = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`;
  };

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
    { number: '2.5+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Delivered' },
    { number: '4+', label: 'Certifications' },
    { number: '99.9%', label: 'Operational Quality' },
  ];

  const experienceData = [
    {
      role: 'Application Developer',
      company: 'Hallmark Global Technologies Ltd',
      period: 'July 2025 - June 2026',
      location: 'Hyderabad, India',
      highlights: [
        'Developed business applications using the KodeFast low-code/no-code platform.',
        'Configured application forms, entities, workflows, and business rules.',
        'Designed and customized application modules using drag-and-drop functionality.',
        'Implemented workflow automation to streamline business processes.',
        'Created reusable templates and application components.',
        'Configured data entities and managed application data.',
        'Developed business logic to automate operational activities.',
        'Customized application features based on business requirements.',
        'Performed application testing, debugging, and issue resolution.',
        'Collaborated with team members to deliver scalable business application solutions.'
      ],
      tags: ['KodeFast', 'Low-Code / No-Code', 'Workflow Automation', 'Business Rules', 'Forms & Entities']
    },
    {
      role: 'Customer Data Management Executive',
      company: 'HDB Financial Services',
      period: 'March 2025 - May 2025',
      location: 'Hyderabad, India',
      highlights: [
        'Collected customer information for financial product-related activities.',
        'Gathered and organized customer data from available sources.',
        'Verified customer details to maintain data accuracy.',
        'Prepared customer databases for telecalling operations.',
        'Shared customer leads with telecalling executives for follow-up.',
        'Categorized customer information based on business requirements.',
        'Maintained and updated customer records in Excel and internal systems.',
        'Coordinated with telecalling teams regarding customer data requirements.',
        'Supported daily data collection, processing, and lead management activities.',
        'Ensured timely sharing of accurate customer information to support customer outreach operations.'
      ],
      tags: ['Customer Data Management', 'Database Preparation', 'Data Verification', 'Lead Management', 'Excel']
    },
    {
      role: 'Application Developer',
      company: 'Truefy Technologies',
      period: 'Feb 2024 - Feb 2025',
      location: 'Hyderabad, India',
      highlights: [
        'Developed and maintained responsive web application components using HTML5, CSS3, JavaScript, and React.js.',
        'Designed and implemented user-friendly interfaces for online shopping functionalities.',
        'Developed product management features, including product listing, search, filtering, and categorization.',
        'Implemented shopping cart functionality to manage product selection and quantity updates.',
        'Worked on customer registration, login, and profile management modules.',
        'Integrated frontend components with Python-based backend services and APIs.',
        'Managed application data using MySQL, including customer, product, order, and inventory records.',
        'Collaborated with team members in Agile methodology to understand requirements and deliver application enhancements.'
      ],
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'MySQL', 'Agile']
    }
  ];

  const skillsData = [
    {
      category: 'Application & Python Development',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Python', level: 92 },
        { name: 'Low-Code / No-Code (KodeFast)', level: 92 },
        { name: 'REST APIs & Backend Integration', level: 88 },
        { name: 'Workflow & Process Automation', level: 90 }
      ]
    },
    {
      category: 'Frontend & Web Development',
      icon: <Globe size={24} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Responsive Web Design', level: 92 }
      ]
    },
    {
      category: 'Database & RDBMS',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 92 },
        { name: 'SQL Queries', level: 90 },
        { name: 'RDBS (Relational Databases)', level: 88 },
        { name: 'Customer Data Management & Excel', level: 90 }
      ]
    }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Enterprise Business Applications',
      category: 'web',
      image: '/kodefast_analytics.jpg',
      description: 'Enterprise applications developed using KodeFast low-code/no-code platform with workflow automation.',
      fullDescription: 'Business applications developed using KodeFast by configuring forms, entities, workflows, business rules, approvals, and reusable platform modules.',
      highlights: [
        'Application Development: Built business applications using drag-and-drop development.',
        'Form & Entity Management: Configured forms, entities, and data structures.',
        'Workflow Automation: Designed automated workflows and process logic.',
        'Business Rules: Implemented business rules and approval processes.',
        'Reusable Components: Used templates and platform modules for scalable development.',
        'Process Optimization: Automated business processes to improve efficiency.'
      ],
      tags: ['KodeFast Low-Code / No-Code'],
      dbTech: 'Forms, Entities, Workflows, Business Rules, Approvals',
      githubUrl: 'https://github.com/jagadeesh-vurata/analytics-dashboard',
      liveUrl: 'https://www.kodefast.com/schedule-a-demo.php'
    },
    {
      id: 2,
      title: 'Hackathon Management System ',
      category: ['web', 'app'],
      image: '/project_hackathon.png',
      description: 'Full-stack platform for managing hackathon registration, team formation, project submission, judging, and results.',
      fullDescription: 'End-to-end full-stack web application designed to streamline the complete hackathon lifecycle for participants, organizers, judges, and sponsors.',
      highlights: [
        'Participant registration and secure login system.',
         'Team creation, member management, and team formation.',
          'Hackathon creation and event management for organizers.',
          'Project submission and tracking system.',
          'Judge assignment and project evaluation with scoring.',
          'Role-based dashboards for participants organizers, and judges.',
          'Sponsor management and communication.',
          'Automated notifications and hackathon status tracking.'
      ],
      tags: ['Python, HTML5, CSS3, JavaScript, React.js'],
      dbTech: 'Python, Django, Django REST Framework, REST APIs',
      githubUrl: 'https://github.com/jagadeesh-vurata/sql-query-optimizer',
      liveUrl: 'https://demo-sql-optimizer.example.com'
    },
    {
      id: 3,
      title: 'PDF Automation & Data Processing',
      category: 'database',
      image: '/project_automation.jpg',
      description: 'Python automation solution for PDF data extraction, Regex-based parsing, validation, and transformation.',
      fullDescription: 'Python-based automation application developed to extract and process structured data from PDF documents while reducing repetitive manual processing tasks.',      highlights: [
        'Automated PDF data extraction and document processing.',
        'Regex-based pattern recognition and structured data parsing.',
        'Data validation, cleansing, and transformation through automation workflows.'
      ],
      tags: ['Python', 'Regex', 'PDF Processing', 'Automation', 'Data Processing'],
      dbTech: 'Structured data processing and validation',
      githubUrl: 'https://github.com/jagadeesh-vurata/inventory-management',
      liveUrl: 'https://demo-inventory.example.com'
    },
    {
      id: 4,
      title: 'Rice Crop Disease Detection',
      category: ['app', 'ml'],
      image: '/project_rice_crop.jpg',
      description: 'Deep learning system for detecting rice crop diseases from annotated leaf images using CNN and transfer learning.',
      fullDescription: 'Machine learning application trained on large datasets of rice crop images to accurately identify disease patterns using CNN models, transfer learning, and data augmentation techniques.',
      highlights: [
        'Trained CNN models on annotated rice crop disease images.',
        'Applied transfer learning and data augmentation to improve model performance.',
        'Developed reliable disease detection across different crop conditions and disease patterns.'
      ],
      tags:  ['Python', 'CNN', 'Deep Learning', 'TensorFlow', 'Transfer Learning'],
      dbTech: 'Image dataset with annotated crop disease classifications',
      githubUrl: 'https://github.com/jagadeesh014/Advance_Online_survey_Project',
      liveUrl: 'https://demo-cloudhealth.example.com'
    }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => {
        if (Array.isArray(p.category)) {
          return p.category.some(c => c.toLowerCase() === projectFilter.toLowerCase());
        }
        return p.category.toLowerCase() === projectFilter.toLowerCase();
      });

  const certificationsData = [
    {
      title: 'Python Automation Intern',
      issuer: 'Spiffy9',
      date: 'Certified Certification',
      credId: 'Spiffy9-Auto-Cert',
      icon: <Award size={28} />
    },
    {
      title: 'Python Full Stack Developer Intern',
      issuer: 'Codegnan',
      date: 'Certified Certification',
      credId: 'Codegnan-FullStack',
      icon: <Database size={28} />
    },
    {
      title: 'Machine Learning Intern',
      issuer: 'Indian Servers',
      date: 'Certified Certification',
      credId: 'IndianServers-ML',
      icon: <Award size={28} />
    },
    {
      title: 'Internet of Things',
      issuer: 'NPTEL',
      date: 'Certified Certification',
      credId: 'NPTEL-IOT',
      icon: <Globe size={28} />
    }
  ];

  return (
    <div className="portfolio-app">
      {/* 3D Ambient Glowing Orbs with Parallax Scroll Offset */}
      <div className="parallax-orb-container">
        <div 
          className="parallax-orb parallax-orb-1" 
          style={{ transform: `translate3d(0, ${scrollY * 0.14}px, 0)` }}
        ></div>
        <div 
          className="parallax-orb parallax-orb-2" 
          style={{ transform: `translate3d(0, ${scrollY * -0.1}px, 0)` }}
        ></div>
        <div 
          className="parallax-orb parallax-orb-3" 
          style={{ transform: `translate3d(0, ${scrollY * 0.06}px, 0)` }}
        ></div>
      </div>

      {/* 1. Header Navigation Bar */}
      <nav className="navbar">
        {/* Top Scroll Progress Bar */}
        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>

        <div className="navbar-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Vurata Jagadeesh
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

      {/* 2. Hero / Home Section with 3D Parallax */}
      <section 
        id="home" 
        className="hero-section"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div 
          className="hero-backdrop-glow"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x * 28}px), calc(-50% + ${mousePos.y * 28}px))`
          }}
        ></div>

        {/* 3D Floating Parallax Badges */}
        <div className="hero-floating-badges">
          <div 
            className="hero-parallax-badge badge-pos-1"
            style={{
              transform: `translate3d(${mousePos.x * -24}px, ${mousePos.y * -18}px, 20px)`
            }}
          >
            <span>⚡</span> Python Automation
          </div>
          <div 
            className="hero-parallax-badge badge-pos-2"
            style={{
              transform: `translate3d(${mousePos.x * 26}px, ${mousePos.y * -20}px, 25px)`
            }}
          >
            <span>⚛️</span> React.js & Frontend
          </div>
          <div 
            className="hero-parallax-badge badge-pos-3"
            style={{
              transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * 22}px, 15px)`
            }}
          >
            <span>🐬</span> MySQL & RDBS
          </div>
          <div 
            className="hero-parallax-badge badge-pos-4"
            style={{
              transform: `translate3d(${mousePos.x * 22}px, ${mousePos.y * 18}px, 20px)`
            }}
          >
            <span>🚀</span> KodeFast Low-Code
          </div>
        </div>
        
        <div className="status-badge reveal-3d">
          <span className="status-dot"></span> Available For Full-Time & High-Impact Projects
        </div>

        <div 
          className="hero-avatar-container"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)`
          }}
        >
          <div className="avatar-pulse-ring"></div>
          <div className="avatar-pulse-ring-outer"></div>
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-inner">
              <img src="/avatar.jpg" alt="Vurata Jagadeesh" className="hero-avatar" />
            </div>
          </div>
          <div 
            className="avatar-floating-badge"
            style={{
              transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 15px)`
            }}
          >
            <Sparkles size={14} className="text-blue" /> Application & Python Developer
          </div>
        </div>

        <h1 
          className="hero-title-3d reveal-3d"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 6}deg)`
          }}
        >
          Vurata Jagadeesh
        </h1>
        
        <div 
          className="hero-role-3d text-shimmer reveal-3d"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`
          }}
        >
          Application Developer | Python Automation | Web Developer
        </div>

        <p className="hero-desc reveal-3d">
          Results-driven professional with 2.5 years of experience in application development, Python automation, and customer data management. Skilled in developing web applications, implementing business workflows, and streamlining operational processes.
        </p>

        <div className="hero-actions reveal-3d">
          <button className="btn-primary flex-center gap-2" onClick={() => setIsResumeOpen(true)}>
            <Download size={18} /> Download Resume
          </button>
          <button className="btn-secondary flex-center gap-2" onClick={() => scrollToSection('projects')}>
            View Projects
          </button>
        </div>
      </section>

      {/* Stats Counter Bar with 3D Hover Tilt */}
      <div className="stats-container reveal-3d">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div 
              className="stat-item card-3d-tilt" 
              key={idx}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Experience Section with 3D Parallax Text & Cards */}
      <section id="experience" className="section">
        <div className="section-header reveal-3d">
          <span 
            className="section-watermark" 
            style={{ transform: `translate(-50%, calc(-50% + ${(scrollY - 850) * 0.12}px))` }}
          >
            CAREER
          </span>
          <span className="section-tag">Career History</span>
          <h2 className="section-title text-shimmer">Work Experience</h2>
          <p className="section-subtitle">Proven track record building enterprise applications and optimizing databases</p>
        </div>

        <div className="timeline">
          {experienceData.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div 
                className="timeline-card card-3d-tilt reveal-3d"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
              >
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

      {/* 4. Skills Section with 3D Parallax */}
      <section id="skills" className="section">
        <div className="section-header reveal-3d">
          <span 
            className="section-watermark" 
            style={{ transform: `translate(-50%, calc(-50% + ${(scrollY - 1450) * 0.12}px))` }}
          >
            EXPERTISE
          </span>
          <span className="section-tag">Technical Proficiency</span>
          <h2 className="section-title text-shimmer">Skills & Expertise</h2>
          <p className="section-subtitle">Core technologies, frameworks, databases, and development tools</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div 
              className="skill-card card-3d-tilt reveal-3d" 
              key={idx}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
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

      {/* 5. Projects Section with 3D Parallax */}
      <section id="projects" className="section">
        <div className="section-header reveal-3d">
          <span 
            className="section-watermark" 
            style={{ transform: `translate(-50%, calc(-50% + ${(scrollY - 2150) * 0.12}px))` }}
          >
            PORTFOLIO
          </span>
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title text-shimmer">Projects Portfolio</h2>
          <p className="section-subtitle">Explore recent application, web, and database developments</p>
        </div>

        <div className="project-filters reveal-3d">
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
            <div 
              className="project-card card-3d-tilt reveal-3d" 
              key={project.id}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                  onError={(e) => { e.target.onerror = null; e.target.src = '/project_analytics.jpg'; }}
                />
                <span className="project-category-badge">
                  {Array.isArray(project.category) ? project.category.join(' / ') : project.category}
                </span>
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

      {/* 6. Certifications Section with 3D Parallax */}
      <section id="certifications" className="section">
        <div className="section-header reveal-3d">
          <span 
            className="section-watermark" 
            style={{ transform: `translate(-50%, calc(-50% + ${(scrollY - 2850) * 0.12}px))` }}
          >
            CREDENTIALS
          </span>
          <span className="section-tag">Credentials</span>
          <h2 className="section-title text-shimmer">Certifications & Achievements</h2>
          <p className="section-subtitle">Industry verified certifications in cloud, database administration, and web technologies</p>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert, idx) => (
            <div 
              className="cert-card card-3d-tilt reveal-3d" 
              key={idx}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
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

      {/* 7. Contact Us Section with 3D Parallax */}
      <section id="contact" className="section">
        <div className="section-header reveal-3d">
          <span 
            className="section-watermark" 
            style={{ transform: `translate(-50%, calc(-50% + ${(scrollY - 3400) * 0.12}px))` }}
          >
            CONNECT
          </span>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title text-shimmer">Contact Us</h2>
          <p className="section-subtitle">Have a project in mind or want to connect? Send a message!</p>
        </div>

        <div className="contact-container reveal-3d">
          <div className="contact-info-col">
            <h3>Let's talk about your next project</h3>
            <p>
              Whether you need a high-performance web application, database query optimization, or enterprise software development, I am ready to collaborate.
            </p>

            <div className="contact-methods">
              <div 
                className="contact-method-card card-3d-tilt"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
              >
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Email Address</span>
                  <p className="contact-method-val">jagadeeshv514@gmail.com</p>
                </div>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard('jagadeeshv514@gmail.com', 'email')}
                  title="Copy email"
                >
                  {copiedText === 'email' ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                </button>
              </div>

              <div 
                className="contact-method-card card-3d-tilt"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
              >
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

              <div 
                className="contact-method-card card-3d-tilt"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
              >
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
            Application Developer • Python Developer • Web Developer
          </p>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub" title="GitHub">
              <Code size={18} />
            </a>
            <a href="https://www.linkedin.com/in/vurata-jagadeesh/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn" title="LinkedIn">
              <Globe size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter" title="Twitter">
              <Share2 size={18} />
            </a>
            <a href="mailto:jagadeeshv514@gmail.com" className="social-icon-btn" aria-label="Email" title="Email">
              <Mail size={18} />
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Vurata Jagadeesh. All rights reserved
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
