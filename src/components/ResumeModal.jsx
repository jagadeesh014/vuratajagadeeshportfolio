import React from 'react';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Create a simulated PDF download / print action
    const element = document.createElement("a");
    const file = new Blob([
      `==================================================\n` +
      `             VURATA JAGADEESH                     \n` +
      ` Application Developer | Web Developer | Database  \n` +
      ` Email: jagadeesh.vurata@example.com              \n` +
      ` Location: Hyderabad, Telangana, India            \n` +
      `==================================================\n\n` +
      `SUMMARY\n` +
      `Results-driven Application, Web & Database Developer with 3+ years of experience designing scalable enterprise web software, optimizing complex database systems, and building responsive user interfaces.\n\n` +
      `TECHNICAL SKILLS\n` +
      `* Web: JavaScript (ES6+), React.js, Vite, HTML5, CSS3, REST APIs\n` +
      `* Databases: PostgreSQL, MySQL, SQL Server, MongoDB, Query Tuning\n` +
      `* App Dev: C#, .NET Core, Java, Python, Microservices\n` +
      `* Tools: Git, Docker, Postman, CI/CD, Azure Cloud\n\n` +
      `EXPERIENCE\n` +
      `* Senior Application & Database Developer | Tech Solutions (2023 - Present)\n` +
      `* Full Stack Web Developer | NexGen Systems (2022 - 2023)\n` +
      `* Database & Software Engineer Intern | DataCore Tech (2021 - 2022)\n\n` +
      `CERTIFICATIONS\n` +
      `* AWS Certified Solutions Architect - Associate\n` +
      `* Microsoft Certified: Azure Database Administrator\n` +
      `* Oracle Certified Professional: MySQL 8.0 Developer\n`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "Vurata_Jagadeesh_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <FileText className="text-blue" size={24} />
            <h2>Vurata Jagadeesh - Resume Overview</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="resume-hero-banner">
            <div>
              <h3>Vurata Jagadeesh</h3>
              <p className="resume-subtitle">Application Developer | Web Developer | Database Developer</p>
              <p className="resume-loc">📍 Hyderabad, Telangana, India • Available for Full-Time / Contract</p>
            </div>
            <button className="btn-primary flex-center gap-2" onClick={handleDownload}>
              <Download size={18} /> Download CV
            </button>
          </div>

          <div className="resume-grid">
            <div className="resume-section">
              <h4><Briefcase size={18} className="text-blue" /> Work Experience</h4>
              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Senior Application & Database Developer</strong>
                  <span className="badge-year">2023 - Present</span>
                </div>
                <p className="resume-org">Tech Solutions Inc.</p>
                <ul>
                  <li>Architected scalable REST microservices handling 50,000+ daily operational requests.</li>
                  <li>Optimized PostgreSQL database indexes, reducing query response time by 45%.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Full Stack Web Developer</strong>
                  <span className="badge-year">2022 - 2023</span>
                </div>
                <p className="resume-org">NexGen Systems</p>
                <ul>
                  <li>Engineered interactive React & Vite enterprise analytics dashboards.</li>
                  <li>Implemented real-time data sync with WebSockets and Node.js.</li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h4><GraduationCap size={18} className="text-blue" /> Education</h4>
              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>B.Tech in Computer Science & Engineering</strong>
                  <span className="badge-year">2018 - 2022</span>
                </div>
                <p className="resume-org">First Class with Distinction (GPA: 8.8/10)</p>
              </div>

              <h4 style={{ marginTop: '1.5rem' }}><Award size={18} className="text-blue" /> Key Certifications</h4>
              <ul className="resume-cert-list">
                <li><CheckCircle2 size={16} className="text-green" /> AWS Certified Solutions Architect</li>
                <li><CheckCircle2 size={16} className="text-green" /> Microsoft Certified Azure DB Admin</li>
                <li><CheckCircle2 size={16} className="text-green" /> Oracle Certified Professional: MySQL 8.0</li>
                <li><CheckCircle2 size={16} className="text-green" /> Meta Front-End Developer Certificate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close Preview</button>
          <button className="btn-primary flex-center gap-2" onClick={handleDownload}>
            <Download size={18} /> Download Document
          </button>
        </div>
      </div>
    </div>
  );
}
