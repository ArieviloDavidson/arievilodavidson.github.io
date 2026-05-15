import { Briefcase, Calendar } from 'lucide-react';
import './ExperienceCard.css';

const ExperienceCard = ({ role, company, period, description, color = 'blue' }) => {
  return (
    <div className="experience-card fade-in">
      <div className={`experience-icon-container bg-${color}`}>
        <Briefcase size={24} className="experience-icon" />
      </div>
      
      <div className="experience-content">
        <h3 className="experience-role">{role}</h3>
        <span className="experience-company">{company}</span>
        <p className="experience-description">{description}</p>
      </div>

      <div className="experience-period-badge">
        <Calendar size={14} className="period-icon" />
        <span>{period}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
