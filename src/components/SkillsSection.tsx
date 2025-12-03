import { useEffect, useRef, useMemo } from 'react';
import { Code2, Sword, Wrench } from 'lucide-react';
import SkillItem from './SkillItem';

interface Skill {
  name: string;
  baseLevel: number; // Nível base quando começou
  category: 'primary' | 'secondary' | 'learning' | 'tool';
  startDate?: string; // Data que começou a usar (opcional)
}

// Data de início da carreira como desenvolvedor
const CAREER_START_DATE = new Date('2024-07-01'); // Jul 2024

// Função para calcular meses de experiência
const calculateMonthsOfExperience = (): number => {
  const today = new Date();
  const months = (today.getFullYear() - CAREER_START_DATE.getFullYear()) * 12 +
    (today.getMonth() - CAREER_START_DATE.getMonth());
  return Math.max(0, months);
};

// Função para calcular nível baseado na experiência
const calculateSkillLevel = (skill: Skill, monthsOfExp: number): number => {
  const { baseLevel, category } = skill;
  
  // Taxa de crescimento mensal baseada na categoria
  const growthRates = {
    primary: 2.5,    // Tecnologias principais (usadas diariamente no trabalho)
    secondary: 1.8, // Tecnologias secundárias (projetos pessoais)
    learning: 1.2,  // Tecnologias em aprendizado
    tool: 2,        // Ferramentas
  };
  
  const growthRate = growthRates[category];
  const monthsUsing = skill.startDate 
    ? calculateMonthsOfExperience() - getMonthsSince(skill.startDate)
    : monthsOfExp;
  
  // Calcular nível: baseLevel + (meses usando * taxa de crescimento)
  // Com limite máximo baseado na categoria
  const maxLevels = {
    primary: 75,
    secondary: 65,
    learning: 50,
    tool: 70,
  };
  
  const calculatedLevel = Math.min(
    baseLevel + (monthsUsing * growthRate),
    maxLevels[category]
  );
  
  return Math.round(calculatedLevel);
};

// Função auxiliar para calcular meses desde uma data
const getMonthsSince = (dateString: string): number => {
  const date = new Date(dateString);
  const today = new Date();
  return (today.getFullYear() - date.getFullYear()) * 12 +
    (today.getMonth() - date.getMonth());
};

const languagesData: Skill[] = [
  { name: 'Java', baseLevel: 40, category: 'primary', startDate: '2024-07-01' },
  { name: 'PL/SQL', baseLevel: 40, category: 'primary', startDate: '2024-07-01' },
  { name: 'JavaScript', baseLevel: 35, category: 'secondary', startDate: '2024-01-01' },
  { name: 'TypeScript', baseLevel: 30, category: 'secondary', startDate: '2024-09-01' },
  { name: 'PHP', baseLevel: 30, category: 'secondary', startDate: '2024-10-01' },
  { name: 'Dart', baseLevel: 20, category: 'learning', startDate: '2025-01-01' },
  { name: 'Kotlin', baseLevel: 20, category: 'learning', startDate: '2025-01-01' },
];

const frameworksData: Skill[] = [
  { name: 'Spring Boot', baseLevel: 40, category: 'primary', startDate: '2024-07-01' },
  { name: 'React', baseLevel: 35, category: 'secondary', startDate: '2024-08-01' },
  { name: 'Node.js', baseLevel: 30, category: 'secondary', startDate: '2024-08-01' },
  { name: 'Vue.js', baseLevel: 30, category: 'secondary', startDate: '2024-09-01' },
  { name: 'Tailwind CSS', baseLevel: 35, category: 'secondary', startDate: '2024-10-01' },
  { name: 'Angular', baseLevel: 35, category: 'primary', startDate: '2024-07-01' },
  { name: 'Laravel', baseLevel: 30, category: 'secondary', startDate: '2024-10-01' },
  { name: 'Flutter', baseLevel: 20, category: 'learning', startDate: '2025-01-01' },
];

const toolsData: Skill[] = [
  { name: 'Git', baseLevel: 45, category: 'tool', startDate: '2024-01-01' },
  { name: 'Firebase', baseLevel: 35, category: 'tool', startDate: '2024-08-01' },
  { name: 'Vercel', baseLevel: 30, category: 'tool', startDate: '2024-08-01' },
  { name: 'Render', baseLevel: 30, category: 'tool', startDate: '2024-09-01' },
  { name: 'VSCode', baseLevel: 50, category: 'tool', startDate: '2024-01-01' },
  { name: 'IntelliJ', baseLevel: 40, category: 'tool', startDate: '2024-07-01' },
  { name: 'PhpStorm', baseLevel: 30, category: 'tool', startDate: '2024-10-01' },
  { name: 'Android Studio', baseLevel: 30, category: 'tool', startDate: '2025-01-01' },
  { name: 'Eclipse', baseLevel: 35, category: 'tool', startDate: '2024-07-01' },
  { name: 'Putty', baseLevel: 30, category: 'tool', startDate: '2024-07-01' },
];

export default function SkillsSection() {
  const skillItemsRef = useRef<HTMLDivElement[]>([]);
  
  // Calcular níveis baseados na experiência atual
  const monthsOfExp = useMemo(() => calculateMonthsOfExperience(), []);
  
  const languages = useMemo(() => 
    languagesData.map(skill => ({
      name: skill.name,
      level: calculateSkillLevel(skill, monthsOfExp),
    })), [monthsOfExp]
  );
  
  const frameworks = useMemo(() => 
    frameworksData.map(skill => ({
      name: skill.name,
      level: calculateSkillLevel(skill, monthsOfExp),
    })), [monthsOfExp]
  );
  
  const tools = useMemo(() => 
    toolsData.map(skill => ({
      name: skill.name,
      level: calculateSkillLevel(skill, monthsOfExp),
    })), [monthsOfExp]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillFill = entry.target.querySelector('.skill-fill') as HTMLElement;
            const skillLevel = (entry.target as HTMLElement).dataset.level;
            if (skillFill && skillLevel) {
              skillFill.style.width = `${skillLevel}%`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    skillItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      skillItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="skills-section">
      <h2 className="section-title">
        <i className="fas fa-magic"></i> HABILIDADES TÉCNICAS
      </h2>
      
      <div className="skill-category">
        <h3 className="category-title">
          <Code2 size={20} className="lucide-icon-inline" />
          LINGUAGENS
        </h3>
        <div className="skills-grid">
          {languages.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                if (el) skillItemsRef.current[index] = el;
              }}
              className="skill-item"
              data-level={skill.level}
            >
              <SkillItem name={skill.name} level={skill.level} />
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3 className="category-title">
          <Sword size={20} className="lucide-icon-inline" />
          FRAMEWORKS & BIBLIOTECAS
        </h3>
        <div className="skills-grid">
          {frameworks.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                if (el) skillItemsRef.current[languages.length + index] = el;
              }}
              className="skill-item"
              data-level={skill.level}
            >
              <SkillItem name={skill.name} level={skill.level} />
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3 className="category-title">
          <Wrench size={20} className="lucide-icon-inline" />
          FERRAMENTAS & CLOUD
        </h3>
        <div className="skills-grid">
          {tools.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                if (el) skillItemsRef.current[languages.length + frameworks.length + index] = el;
              }}
              className="skill-item"
              data-level={skill.level}
            >
              <SkillItem name={skill.name} level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

