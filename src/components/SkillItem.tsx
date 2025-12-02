interface SkillItemProps {
  name: string;
  level: number;
}

export default function SkillItem({ name, level }: SkillItemProps) {
  return (
    <>
      <div className="skill-name">{name}</div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: '0%' }}></div>
      </div>
      <div className="skill-level">{level}%</div>
    </>
  );
}

