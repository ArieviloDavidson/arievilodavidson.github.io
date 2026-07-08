import { Code, Briefcase, User, Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '../../assets/Davidson Oliveira.JPG';
import './About.css';

const About = () => {
  return (
    <div className="about-container fade-in">
      {/* Coluna da Esquerda: Imagem */}
      <div className="about-image-wrapper">
        <img src={profileImage} alt="Davidson Oliveira" className="about-image" />
      </div>
      
      {/* Coluna da Direita: Conteúdo */}
      <div className="about-content">
        <div className="about-tag">
          <User size={16} className="tag-icon" />
          <span>Desenvolvedor Full Stack</span>
        </div>
        
        <h1 className="about-title">
          Olá, sou Davidson Oliveira!
        </h1>
        
        <p className="about-description">
          Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis. Especializado em React, Python e desenvolvimento web moderno.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon-wrapper code-icon">
              <Code size={20} />
            </div>
            <div className="card-info">
              <span className="card-label">Experiência</span>
              <span className="card-value">5+ anos de desenvolvimento</span>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon-wrapper briefcase-icon">
              <Briefcase size={20} />
            </div>
            <div className="card-info">
              <span className="card-label">Projetos</span>
              <span className="card-value">50+ projetos completados</span>
            </div>
          </div>
        </div>

        <div className="about-social">
          <a href="#" className="social-btn github" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="social-btn linkedin" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="social-btn instagram" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
