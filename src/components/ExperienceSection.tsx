import { Sword } from 'lucide-react';

interface Experience {
  title: string;
  period: string;
  description: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    title: 'Desenvolvedor Jr.',
    period: 'Jul 2024 - Atualmente',
    description: [
      'Responsável pelo desenvolvimento e manutenção de sistemas na equipe Prime da Unimed-BH, utilizando Java com Spring Framework, Angular 10 e PL/SQL (Oracle).',
      'Participei de melhorias e implementações em serviços corporativos. Nesse período, também idealizei e desenvolvi o projeto ZenMV, uma plataforma de bem-estar corporativo com agendamento de massagens e check-ins em atividades, construída em Laravel 11, TailwindCSS e Livewire.',
    ],
    tags: ['Java', 'Spring', 'PL/SQL', 'Laravel', 'Angular'],
  },
  {
    title: 'Assistente de TI',
    period: 'Fev 2021 - Fev 2024',
    description: [
      'Suporte aos Colaboradores do Cartório, manutenção de máquina, instalação de programas, elaboração de relatórios.',
    ],
    tags: ['Suporte Técnico', 'Manutenção'],
  },
];

export default function ExperienceSection() {
  return (
    <div className="experience-section">
      <h2 className="section-title">
        <i className="fas fa-trophy"></i> MISSÕES COMPLETADAS
      </h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="quest-card">
          <Sword size={30} className="quest-icon" />
          <div className="quest-header">
            <h3 className="quest-title">{exp.title}</h3>
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

