import React from 'react';
import { X, ExternalLink, Code, Database, Layers, CheckCircle2, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <Layers className="text-blue" size={24} />
            <h2>{project.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="project-modal-hero">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-modal-img" 
              onError={(e) => { e.target.onerror = null; e.target.src = '/project_analytics.jpg'; }}
            />
            <div className="project-modal-badges">
              <span className="category-pill">{project.category}</span>
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tech-pill">{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-modal-info">
            <h3>Overview & Objectives</h3>
            <p className="project-modal-desc">{project.fullDescription || project.description}</p>

            <div className="project-features-box">
              <h4><CheckCircle2 size={18} className="text-blue" /> Key System Highlights</h4>
              <ul>
                {project.highlights ? project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                )) : (
                  <>
                    <li>High-availability architecture designed for high throughput.</li>
                    <li>Integrated real-time database tracking and reporting API.</li>
                    <li>Fully responsive UI built with modern component-driven standards.</li>
                  </>
                )}
              </ul>
            </div>

            <div className="project-tech-architecture">
              <h4><Cpu size={18} className="text-blue" /> Tech Stack & Database Architecture</h4>
              <div className="tech-arch-grid">
                <div>
                  <strong>Frontend & UI:</strong>
                  <p>{project.tags.slice(0, 3).join(', ')}</p>
                </div>
                <div>
                  <strong>Backend & DB:</strong>
                  <p>{project.dbTech || 'PostgreSQL, Node.js REST APIs, Redis Caching'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <div className="flex-center gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-center gap-2">
                <Code size={16} /> Code Repository
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex-center gap-2">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

