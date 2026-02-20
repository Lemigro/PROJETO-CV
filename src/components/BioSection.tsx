import { GraduationCap, Rocket, Lightbulb, Code } from 'lucide-react';

interface BioSectionProps {
  title: string;
  gradStrong: string;
  gradText: string;
  learnStrong: string;
  learnText: string;
  innovateStrong: string;
  innovateText: string;
  devStrong: string;
  devText: string;
}

export default function BioSection({
  title, gradStrong, gradText, learnStrong, learnText, 
  innovateStrong, innovateText, devStrong, devText
}: BioSectionProps) {
  return (
    <div className="bio-section">
      <h2 className="section-title">
        <i className="fas fa-book"></i> {title}
      </h2>
      <div className="bio-card">
        <div className="bio-content">
          <p>
            <strong>
              <GraduationCap size={18} className="lucide-icon-inline" />
              {gradStrong}
            </strong>
            {' '}{gradText}
          </p>
          <p>
            <strong>
              <Rocket size={18} className="lucide-icon-inline" />
              {learnStrong}
            </strong>
            {' '}{learnText}
          </p>
          <p>
            <strong>
              <Lightbulb size={18} className="lucide-icon-inline" />
              {innovateStrong}
            </strong>
            {' '}{innovateText}
          </p>
          <p>
            <strong>
              <Code size={18} className="lucide-icon-inline" />
              {devStrong}
            </strong>
            {' '}{devText}
          </p>
        </div>
      </div>
    </div>
  );
}