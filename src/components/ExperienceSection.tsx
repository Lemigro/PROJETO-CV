import { Sword } from 'lucide-react';

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

interface ExperienceSectionProps {
  sectionTitle: string;
  experiences: Experience[];
}

export default function ExperienceSection({ sectionTitle, experiences }: ExperienceSectionProps) {
  return (
    <div className="experience-section">
      <h2 className="section-title">
        <i className="fas fa-trophy"></i> {sectionTitle}
      </h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="quest-card">
          <Sword size={30} className="quest-icon" />
          <div className="quest-header">
            <div className="quest-title-container">
              <h3 className="quest-title">{exp.title}</h3>
              <div className="quest-company">{exp.company}</div>
            </div>
            <span className="quest-period">{exp.period}</span>
          </div>
          <div className="quest-description">
            {exp.description.map((desc, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </div>
          <div className="quest-rewards">
            {exp.tags.map((tag, i) => (
              <span key={i} className="reward-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}