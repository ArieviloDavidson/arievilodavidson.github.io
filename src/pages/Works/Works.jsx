import { Briefcase } from 'lucide-react';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import { EXPERIENCES } from './constants';
import './Works.css';

const Works = () => {
  return (
    <div className="works-container fade-in">
      {/* Header da Página */}
      <div className="page-header">
        <div className="page-tag-works">
          <Briefcase size={16} className="tag-icon-works" />
          <span>Experiência Profissional</span>
        </div>
        <h1 className="page-title-works">Trabalhos Recentes</h1>
      </div>

      {/* Lista de Experiências */}
      <div className="experiences-list">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard
            key={exp.id}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            color={exp.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
