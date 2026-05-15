import { Globe } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { WEB_PROJECTS } from './constants';
import './WebProjects.css';

const WebProjects = () => {
  return (
    <div className="web-projects-container fade-in">
      {/* Header da Página */}
      <div className="page-header">
        <div className="page-tag">
          <Globe size={16} className="tag-icon" />
          <span>Web Development</span>
        </div>
        <h1 className="page-title">Projetos Web</h1>
      </div>

      {/* Grid de Projetos */}
      <div className="projects-grid">
        {WEB_PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default WebProjects;
