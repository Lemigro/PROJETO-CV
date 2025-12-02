import { useEffect, useRef } from 'react';
import { Code2, Sword, Wrench } from 'lucide-react';
import SkillItem from './SkillItem';

interface Skill {
  name: string;
  level: number;
}

const languages: Skill[] = [
  { name: 'Java', level: 90 },
  { name: 'PL/SQL', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'PHP', level: 70 },
  { name: 'Dart', level: 50 },
  { name: 'Kotlin', level: 50 },
];

const frameworks: Skill[] = [
  { name: 'Spring Boot', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Vue.js', level: 75 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'Angular', level: 70 },
  { name: 'Laravel', level: 70 },
  { name: 'Flutter', level: 50 },
];

const tools: Skill[] = [
  { name: 'Git', level: 85 },
  { name: 'Firebase', level: 80 },
  { name: 'Vercel', level: 75 },
  { name: 'Render', level: 70 },
  { name: 'VSCode', level: 85 },
  { name: 'IntelliJ', level: 80 },
  { name: 'PhpStorm', level: 70 },
  { name: 'Android Studio', level: 75 },
  { name: 'Eclipse', level: 70 },
  { name: 'Putty', level: 50 },
];

export default function SkillsSection() {
  const skillItemsRef = useRef<HTMLDivElement[]>([]);

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

