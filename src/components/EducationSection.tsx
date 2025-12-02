interface Education {
  title: string;
  type: string;
  institution: string;
  period: string;
}

const educations: Education[] = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    type: 'Tecnólogo',
    institution: 'Faculdade Nova Roma',
    period: 'Fev 2023 - Jun 2025',
  },
  {
    title: 'Ciências da Computação',
    type: 'Bacharelado',
    institution: 'Faculdade Nova Roma',
    period: 'Ago 2025 - Dez 2026',
  },
];

export default function EducationSection() {
  return (
    <div className="education-section">
      <h2 className="section-title">
        <i className="fas fa-graduation-cap"></i> FORMAÇÃO
      </h2>
      
      {educations.map((edu, index) => (
        <div key={index} className="education-card">
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
        </div>
      ))}
    </div>
  );
}

