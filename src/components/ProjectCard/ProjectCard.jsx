import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card fade-in">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-image-overlay">
          <ExternalLink size={32} className="overlay-icon" />
          <span className="overlay-text">Clique para visitar</span>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
