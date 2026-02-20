export interface Education {
  title: string;
  type: string;
  institution: string;
  period: string;
  link?: string;
}

interface EducationSectionProps {
  sectionTitle: string;
  educations: Education[];
}

export default function EducationSection({ sectionTitle, educations }: EducationSectionProps) {
  return (
    <div className="education-section">
      <h2 className="section-title">
        <i className="fas fa-graduation-cap"></i> {sectionTitle}
      </h2>
      
      {educations.map((edu, index) => {
        const CardContent = (
          <>
            <div className="education-header">
              <h3 className="education-title">{edu.title}</h3>
              <span className="education-type">{edu.type}</span>
            </div>
            <div className="education-info">
              <p>
                <i className="fas fa-university"></i> {edu.institution}
              </p>
              <p>
                <i className="fas fa-calendar"></i> {edu.period}
              </p>
            </div>
          </>
        );

        return edu.link ? (
          <a
            key={index}
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="education-card education-card-link"
          >
            {CardContent}
          </a>
        ) : (
          <div key={index} className="education-card">
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}