import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <span className="project-semester">{project.semester}</span>
      </div>
      <h3 className="project-card-title">{project.nama}</h3>
      <p className="project-card-description">{project.deskripsi}</p>
      <div className="project-card-tech">
        {project.teknologi.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      <a href={project.link} className="project-card-link">
        <span>View Project</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  );
}

export default ProjectCard;
