import { Trophy } from 'lucide-react';

export interface Certificate {
  title: string;
  hours: string;
  link: string;
}

interface CertificatesSectionProps {
  sectionTitle: string;
  viewText: string;
  certificates: Certificate[];
}

export default function CertificatesSection({ sectionTitle, viewText, certificates }: CertificatesSectionProps) {
  return (
    <div className="certificates-section">
      <h2 className="section-title">
        <i className="fas fa-certificate"></i> {sectionTitle}
      </h2>
      
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-icon">
              <Trophy size={48} className="lucide-icon" />
            </div>
            <h4>{cert.title}</h4>
            <p className="certificate-hours">{cert.hours}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
              {viewText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}