import { Database } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { DATA_PROJECTS } from './constants';
import './PythonProjects.css';

const PythonProjects = () => {
  return (
    <div className="python-projects-container fade-in">
      {/* Header da Página */}
      <div className="page-header">
        <div className="page-tag-data">
          <Database size={16} className="tag-icon-data" />
          <span>Data & Analytics</span>
        </div>
        <h1 className="page-title-data">Projetos de Dados</h1>
      </div>

      {/* Grid de Projetos */}
      <div className="projects-grid">
        {DATA_PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
            variant="data"
          />
        ))}
      </div>
    </div>
  );
};

export default PythonProjects;
