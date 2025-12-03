interface InfoCardProps {
  readonly age: string;
}

export default function InfoCard({ age }: InfoCardProps) {
  return (
    <div className="info-card">
      <h3 className="card-title">
        <i className="fas fa-scroll"></i> SOBRE O PERSONAGEM
      </h3>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <span>Idade: <strong>{age}</strong></span>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Localização: <strong>Recife, PE</strong></span>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <span>Email: <strong>pedro.cosmica@gmail.com</strong></span>
        </div>
        <div className="info-item">
          <i className="fab fa-whatsapp"></i>
          <span>
            WhatsApp:{' '}
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
          <span>Hobby: <strong>Músico</strong></span>
        </div>
        <div className="info-item">
          <i className="fas fa-code"></i>
          <span>Foco: <strong>Full Stack Development</strong></span>
        </div>
      </div>
    </div>
  );
}

