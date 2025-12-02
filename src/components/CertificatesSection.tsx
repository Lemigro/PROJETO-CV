import { Trophy } from 'lucide-react';

interface Certificate {
  title: string;
  hours: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: 'Curso Completo de Banco de Dados Oracle SQL e PL/SQL',
    hours: '16h 33m',
    link: '/certificados/CERTIFICADO_PL_SQL.pdf',
  },
  {
    title: 'Java Completo',
    hours: '77h 7m',
    link: '/certificados/CERTIFICADO_JAVA.pdf',
  },
  {
    title: 'Santander Coders',
    hours: '19h',
    link: '/certificados/CERTIFICADO_SANTANDER.pdf',
  },
  {
    title: 'Formação A partir do zero - iniciante em programação',
    hours: '31h',
    link: '/certificados/Pedro Henrique De Almeida Nascimento - Formação A partir do zero_ iniciante em programação - Alura.pdf',
  },
  {
    title: 'Formação Aprenda a programar em Java com Orientação a Objetos',
    hours: '40h',
    link: '/certificados/Pedro Henrique De Almeida Nascimento - Formação Aprenda a programar em Java com Orientação a Objetos - Alura',
  },
];

export default function CertificatesSection() {
  return (
    <div className="certificates-section">
      <h2 className="section-title">
        <i className="fas fa-certificate"></i> CONQUISTAS
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
              Ver Certificado
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

