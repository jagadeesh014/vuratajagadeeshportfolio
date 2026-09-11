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
              <p className="resume-subtitle">Frontend Developer & Python Developer</p>
              <p className="resume-loc">📍 Hyderabad • +91 9014177672 • jagadeeshv0114@gmail.com</p>
            </div>
            <button className="btn-primary flex-center gap-2" onClick={handleDownload}>
              <Download size={18} /> Download Official PDF
            </button>
          </div>

          <div className="resume-grid">
            <div className="resume-section">
              <h4><Briefcase size={18} className="text-blue" /> Work Experience</h4>
              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Application Developer</strong>
                  <span className="badge-year">July 2025 - Present</span>
                </div>
                <p className="resume-org">Hallmark Global Technologies Ltd</p>
                <ul>
                  <li>Developed business applications using KodeFast low-code/no-code platform.</li>
                  <li>Configured forms, entities, workflows, and business rules.</li>
                  <li>Built automation-driven solutions to streamline workflows.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Software Engineer</strong>
                  <span className="badge-year">Nov 2024 - Mar 2025</span>
                </div>
                <p className="resume-org">Spiffy 9</p>
                <ul>
                  <li>Developed Python automation scripts for extracting data from PDF documents.</li>
                  <li>Implemented Regex-based automation for pattern recognition and parsing.</li>
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
                <p className="resume-org">ST. Ann's College of Eng. & Tech (CGPA: 7.1/10)</p>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Intermediate (MPC)</strong>
                  <span className="badge-year">2018 - 2020</span>
                </div>
                <p className="resume-org">T.L.S.M.S Junior College (CGPA: 7.7/10)</p>
              </div>

              <h4 style={{ marginTop: '1.5rem' }}><Award size={18} className="text-blue" /> Certifications</h4>
              <ul className="resume-cert-list">
                <li><CheckCircle2 size={16} className="text-green" /> Certified Python Automation Intern (Spiffy9)</li>
                <li><CheckCircle2 size={16} className="text-green" /> Certified Python Full Stack Developer (Codegnan)</li>
                <li><CheckCircle2 size={16} className="text-green" /> Certified Machine Learning Intern (Indian Servers)</li>
                <li><CheckCircle2 size={16} className="text-green" /> Certified Internet of Things (NPTEL)</li>
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
