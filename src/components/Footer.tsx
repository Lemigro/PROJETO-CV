export default function Footer() {
  return (
    <footer className="rpg-footer">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/pedro-nascimento-125073177/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Lemigro"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="footer-text">
        Desenvolvido por <strong>Pedro Nascimento</strong>
      </p>
    </footer>
  );
}

