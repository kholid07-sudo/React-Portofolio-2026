import { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { itProjects, generalProjects } from '../../data/projectData';
import AppCard from '../../data/Picture/App-card.png';
import Iphone from '../../data/Picture/iphone.png';
import AppHafalan from '../../data/Picture/App-hafalan.png';
import Port from '../../data/Picture/port.jpg';
import WeatherDashboard from '../../data/Picture/Weather-dashboard.png';
import TodoList from '../../data/Picture/Todo-List.png';
import GE from '../../data/Picture/GE.webp';
import Off1 from '../../data/Picture/off1.jpg';
import On from '../../data/Picture/on.jpg';
import Quran from "../../data/Picture/Qur'an.jpg";
import './ProjectPage.css';

const projectImages = {
  "Student Profile App": AppCard,
  "Landing Page Iphone": Iphone,
  "Memorization Tracking App": AppHafalan,
  "Website Portfolio": Port,
  "Weather Dashboard": WeatherDashboard,
  "React Todo-List": TodoList,
  "Global English": GE,
  "Offline Micro Teaching": Off1,
  "Online Micro Teaching": On,
  "Juz 28 Recitation Test": Quran,
  "Juz 27 Recitation Test": Quran,
};

const categories = [
  { key: 'it', label: 'IT Projects', data: itProjects },
  { key: 'general', label: 'General Projects', data: generalProjects },
];

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="project-card">
        <div className="project-thumb">
          <img
            src={projectImages[project.nama] || project.gambar}
            alt={project.nama}
            loading="lazy"
          />
          <div className="project-thumb-overlay">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
          <span className="project-semester-tag">{project.semester}</span>
        </div>
        <div className="project-body">
          <h3 className="project-title">{project.nama}</h3>
          <p className="project-desc">{project.deskripsi}</p>
          <div className="project-tech">
            {project.teknologi.map((tech, idx) => (
              <span key={idx} className="project-tech-badge">{tech}</span>
            ))}
          </div>
          <a href={project.link} className="project-link">
            <span>View Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

function ProjectPage() {
  const [activeTab, setActiveTab] = useState('it');

  const current = categories.find(c => c.key === activeTab);

  return (
    <div className="project-page">
      <div className="project-container">
        <ScrollReveal>
          <div className="project-header">
            <h1>My Projects</h1>
            <p>Explore my work across technology and creative fields</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="project-tabs">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`project-tab ${activeTab === cat.key ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="project-grid">
          {current.data.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
