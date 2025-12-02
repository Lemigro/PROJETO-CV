import { GraduationCap, Rocket, Lightbulb, Code } from 'lucide-react';

export default function BioSection() {
  return (
    <div className="bio-section">
      <h2 className="section-title">
        <i className="fas fa-book"></i> BIOGRAFIA
      </h2>
      <div className="bio-card">
        <div className="bio-content">
          <p>
            <strong>
              <GraduationCap size={18} className="lucide-icon-inline" />
              Formado em Análise e Desenvolvimento de Sistemas
            </strong>
            {' '}e estudante de <strong>Ciências da Computação</strong>
          </p>
          <p>
            <strong>
              <Rocket size={18} className="lucide-icon-inline" />
              Focado em aprender mais todos os dias
            </strong>
            {' '}- Sempre em busca de novos desafios e tecnologias
          </p>
          <p>
            <strong>
              <Lightbulb size={18} className="lucide-icon-inline" />
              Sempre buscando criar soluções inovadoras
            </strong>
            {' '}que façam a diferença no mundo da tecnologia
          </p>
          <p>
            <strong>
              <Code size={18} className="lucide-icon-inline" />
              Desenvolvedor de software focado em back-end
            </strong>
            {' '}com Java e Oracle PL/SQL. Apaixonado por tecnologia e sempre em busca de novos desafios.
          </p>
        </div>
      </div>
    </div>
  );
}

