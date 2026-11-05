import React from 'react';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap, Globe, Code, Database } from 'lucide-react';
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

    // Direct download of the official PDF file
    const link = document.createElement("a");
    link.href = "/Vurata_Jagadeesh_Resume.pdf";
    link.download = "Vurata_Jagadeesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <FileText className="text-blue" size={24} />
            <h2>Vurata Jagadeesh - Official Resume Overview</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="resume-hero-banner">
            <div>
              <h3>VURATA JAGADEESH</h3>
              <p className="resume-subtitle">Application Developer | Python Automation | Data Management</p>
              <p className="resume-loc">📍 Hyderabad • +91 9014177672 • jagadeeshv514@gmail.com</p>
              <p className="resume-loc" style={{ marginTop: '0.2rem' }}>
                🔗 <a href="https://www.linkedin.com/in/vurata-jagadeesh/" target="_blank" rel="noreferrer" style={{ color: 'var(--blue-light)' }}>linkedin.com/in/vurata-jagadeesh</a>
              </p>
            </div>
            <button className="btn-primary flex-center gap-2" onClick={handleDownload}>
              <Download size={18} /> Download Official PDF
            </button>
          </div>

          <div className="resume-grid">
            <div className="resume-section">
              <h4><Briefcase size={18} className="text-blue" /> Work Experience (2.5 Years)</h4>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Application Developer</strong>
                  <span className="badge-year">July 2025 - June 2026</span>
                </div>
                <p className="resume-org">Hallmark Global Technologies Ltd</p>
                <ul>
                  <li>Developed business applications using the KodeFast low-code/no-code platform.</li>
                  <li>Configured application forms, entities, workflows, and business rules.</li>
                  <li>Implemented workflow automation and built reusable templates and platform components.</li>
                  <li>Customized application features and performed testing, debugging, and issue resolution.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Customer Data Management Executive</strong>
                  <span className="badge-year">March 2025 - May 2025</span>
                </div>
                <p className="resume-org">HDB Financial Services</p>
                <ul>
                  <li>Collected, gathered, and organized customer data from available sources.</li>
                  <li>Verified customer details to maintain data accuracy for telecalling operations.</li>
                  <li>Categorized customer records and maintained databases in Excel and internal systems.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Application Developer</strong>
                  <span className="badge-year">Feb 2024 - Feb 2025</span>
                </div>
                <p className="resume-org">Truefy Technologies</p>
                <ul>
                  <li>Developed responsive web components using HTML5, CSS3, JavaScript, and React.js.</li>
                  <li>Designed online shopping interfaces, product management, and shopping cart modules.</li>
                  <li>Integrated frontend with Python-based backend services & managed data in MySQL.</li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h4><GraduationCap size={18} className="text-blue" /> Education</h4>
              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>B.Tech in Computer Science & Engineering</strong>
                  <span className="badge-year">2020 - 2024</span>
                </div>
                <p className="resume-org">ST. Ann's College of Engineering & Technology (CGPA: 7.1/10)</p>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Intermediate (MPC)</strong>
                  <span className="badge-year">2018 - 2020</span>
                </div>
                <p className="resume-org">T.L.S.M.S Junior College (CGPA: 7.7/10)</p>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Secondary School Certificate (SSC)</strong>
                  <span className="badge-year">2017 - 2018</span>
                </div>
                <p className="resume-org">Apex High School (CGPA: 9.2/10)</p>
              </div>

              <h4 style={{ marginTop: '1.5rem' }}><Award size={18} className="text-blue" /> Certifications & Details</h4>
              <ul className="resume-cert-list">
                <li><CheckCircle2 size={16} className="text-green" /> Certified "Python Automation Intern" (Spiffy9)</li>
                <li><CheckCircle2 size={16} className="text-green" /> Certified "Python Full Stack Developer Intern" (Codegnan)</li>
                <li><CheckCircle2 size={16} className="text-green" /> Certified "Machine Learning Intern" (Indian Servers)</li>
                <li><CheckCircle2 size={16} className="text-green" /> Certified "Internet of Things" (NPTEL)</li>
                <li><CheckCircle2 size={16} className="text-green" /> <strong>Languages:</strong> English, Telugu</li>
                <li><CheckCircle2 size={16} className="text-green" /> <strong>Achievements:</strong> Multiple technical certifications in Python</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close Preview</button>
          <button className="btn-primary flex-center gap-2" onClick={handleDownload}>
            <Download size={18} /> Download Official PDF
          </button>
        </div>
      </div>
    </div>
  );
}
