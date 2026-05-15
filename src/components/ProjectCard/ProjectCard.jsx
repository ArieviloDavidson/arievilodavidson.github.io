import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, tags, link, codeLink, demoLink, variant = 'web' }) => {
  const isInteractive = codeLink || demoLink;

  // Se tiver botões específicos, o card não é um link gigante para evitar links aninhados
  const CardWrapper = isInteractive ? 'div' : 'a';
  const wrapperClass = `project-card fade-in variant-${variant}`;
  const wrapperProps = isInteractive 
    ? { className: wrapperClass }
    : { href: link, target: "_blank", rel: "noopener noreferrer", className: wrapperClass };

  // O overlay da imagem só deve ser tag <a> se o card principal for uma <div>, senão teremos <a> dentro de <a> (erro fatal no HTML/React)
  const OverlayWrapper = isInteractive ? 'a' : 'div';
  const overlayProps = isInteractive 
    ? { href: demoLink || link || "#", target: "_blank", rel: "noopener noreferrer", className: "project-image-overlay" }
    : { className: "project-image-overlay" };

  return (
    <CardWrapper {...wrapperProps}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <OverlayWrapper {...overlayProps}>
          <ExternalLink size={32} className="overlay-icon" />
          <span className="overlay-text">Clique para visitar</span>
        </OverlayWrapper>
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

        {isInteractive && (
          <div className="project-actions">
            {codeLink && (
              <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn-code">
                <Github size={16} /> Código
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-demo">
                <ExternalLink size={16} /> Demo
              </a>
            )}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
