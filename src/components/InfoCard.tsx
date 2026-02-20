interface InfoCardProps {
  readonly age: string;
  titleText: string;
  ageLabel: string;
  locationLabel: string;
  locationValue: string;
  emailLabel: string;
  whatsappLabel: string;
  hobbyLabel: string;
  hobbyValue: string;
  focusLabel: string;
}

export default function InfoCard({ 
  age, titleText, ageLabel, locationLabel, locationValue, 
  emailLabel, whatsappLabel, hobbyLabel, hobbyValue, focusLabel 
}: InfoCardProps) {
  return (
    <div className="info-card">
      <h3 className="card-title">
        <i className="fas fa-scroll"></i> {titleText}
      </h3>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <span>{ageLabel} <strong>{age}</strong></span>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>{locationLabel} <strong>{locationValue}</strong></span>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <span>{emailLabel} <strong>pedro.cosmica@gmail.com</strong></span>
        </div>
        <div className="info-item">
          <i className="fab fa-whatsapp"></i>
          <span>
            {whatsappLabel}{' '}
            <a 
              href="https://wa.me/5581997081146" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <strong>(81) 99708-1146</strong>
            </a>
          </span>
        </div>
        <div className="info-item">
          <i className="fas fa-music"></i>
          <span>{hobbyLabel} <strong>{hobbyValue}</strong></span>
        </div>
        <div className="info-item">
          <i className="fas fa-code"></i>
          <span>{focusLabel} <strong>Full Stack Development</strong></span>
        </div>
      </div>
    </div>
  );
}