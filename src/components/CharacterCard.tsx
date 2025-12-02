import { useEffect, useState } from 'react';
import { Code, Sword, Shield, Brain, Zap } from 'lucide-react';
import InfoCard from './InfoCard';

export default function CharacterCard() {
  const [age, setAge] = useState<string>('Calculando...');

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('1992-06-19');
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(`${calculatedAge} anos`);
    };

    calculateAge();
  }, []);

  return (
    <div className="character-section">
      <div className="character-card">
        <div className="character-avatar">
          <img src="/img/pedro_pixel.jpg" alt="Pedro Nascimento" className="avatar-img" />
          <div className="level-badge">
            <span className="level-number">25</span>
            <span className="level-label">LVL</span>
          </div>
        </div>
        
        <div className="character-info">
          <h2 className="character-name">
            <Code size={28} className="lucide-icon" />
            Pedro Nascimento
          </h2>
          <p className="character-class">Back-end Developer | Java | PL/SQL</p>
          
          <div className="xp-bar-container">
            <div className="xp-label">
              <span>EXPERIENCE</span>
              <span className="xp-value">8,500 / 10,000 XP</span>
            </div>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="main-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <Sword size={32} className="lucide-icon" />
              </div>
              <div className="stat-info">
                <div className="stat-name">FORÇA</div>
                <div className="stat-value">85</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Shield size={32} className="lucide-icon" />
              </div>
              <div className="stat-info">
                <div className="stat-name">DEFESA</div>
                <div className="stat-value">78</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Brain size={32} className="lucide-icon" />
              </div>
              <div className="stat-info">
                <div className="stat-name">INTELIGÊNCIA</div>
                <div className="stat-value">92</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Zap size={32} className="lucide-icon" />
              </div>
              <div className="stat-info">
                <div className="stat-name">VELOCIDADE</div>
                <div className="stat-value">80</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoCard age={age} />
    </div>
  );
}

