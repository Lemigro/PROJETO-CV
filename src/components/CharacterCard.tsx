import { useEffect, useState } from 'react';
import { Code, Sword, Shield, Brain, Zap } from 'lucide-react';
import InfoCard from './InfoCard';

interface CharacterCardProps {
  calculatingText: string;
  yearsText: string;
  strText: string;
  defText: string;
  intText: string;
  spdText: string;
  nameText: string;
  classText: string;
  xpLabel: string;
  xpText: string;
  infoCardTexts: {
    titleText: string;
    ageLabel: string;
    locationLabel: string;
    locationValue: string;
    emailLabel: string;
    whatsappLabel: string;
    hobbyLabel: string;
    hobbyValue: string;
    focusLabel: string;
  };
}

export default function CharacterCard({
  calculatingText, yearsText, strText, defText, intText, spdText,
  nameText, classText, xpLabel, xpText, infoCardTexts
}: CharacterCardProps) {
  const [age, setAge] = useState<string>(calculatingText);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('1992-06-19');
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(`${calculatedAge} ${yearsText}`);
    };

    calculateAge();
  }, [yearsText]);

  return (
    <div className="character-section">
      <div className="character-card">
        <div className="character-avatar">
          <img src="/img/pedro_pixel_02.jpg" alt={nameText} className="avatar-img" />
          <div className="level-badge">
            <span className="level-number">33</span>
            <span className="level-label">LVL</span>
          </div>
        </div>
        
        <div className="character-info">
          <h2 className="character-name">
            <Code size={28} className="lucide-icon" />
            {nameText}
          </h2>
          <p className="character-class">{classText}</p>
          
          <div className="xp-bar-container">
            <div className="xp-label">
              <span>{xpLabel}</span>
              <span className="xp-value">{xpText}</span>
            </div>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="main-stats">
            <div className="stat-item">
              <div className="stat-icon"><Sword size={32} className="lucide-icon" /></div>
              <div className="stat-info">
                <div className="stat-name">{strText}</div>
                <div className="stat-value">85</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Shield size={32} className="lucide-icon" /></div>
              <div className="stat-info">
                <div className="stat-name">{defText}</div>
                <div className="stat-value">78</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Brain size={32} className="lucide-icon" /></div>
              <div className="stat-info">
                <div className="stat-name">{intText}</div>
                <div className="stat-value">92</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Zap size={32} className="lucide-icon" /></div>
              <div className="stat-info">
                <div className="stat-name">{spdText}</div>
                <div className="stat-value">80</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoCard 
        age={age} 
        titleText={infoCardTexts.titleText}
        ageLabel={infoCardTexts.ageLabel}
        locationLabel={infoCardTexts.locationLabel}
        locationValue={infoCardTexts.locationValue}
        emailLabel={infoCardTexts.emailLabel}
        whatsappLabel={infoCardTexts.whatsappLabel}
        hobbyLabel={infoCardTexts.hobbyLabel}
        hobbyValue={infoCardTexts.hobbyValue}
        focusLabel={infoCardTexts.focusLabel}
      />
    </div>
  );
}