import "./Projects.css";

function Projects() {
  const images = ["Dashboard-p1.png", "Dashboard-p2.png", "Mis-Partidos.png"];

  const duplicatedImages = [...images, ...images];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Proyectos</h2>

      <div className="project-card">
        <div className="slider-container">
          <div className="slider-track">
            {duplicatedImages.map((img, index) => (
              <a
                key={index}
                href={`/assets/${img}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/assets/${img}`}
                  alt={`Captura FutStats ${index + 1}`}
                  className="project-image"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="project-info">
          <h3 className="project-name">FutStats</h3>
          <p className="project-description">
            FutStats es una aplicación web Full Stack desarrollada como Trabajo
            Fin de Máster. Permite a futbolistas amateur registrar, visualizar y
            analizar sus estadísticas personales partido a partido. La app
            ofrece un dashboard interactivo con métricas detalladas,
            funcionalidades CRUD de partidos, formularios mejorados y un diseño
            Mobile First completamente responsive.
          </p>

          <div className="project-tech">
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">MongoDB</span>
            <span className="badge">CSS</span>
            <span className="badge">Vercel</span>
            <span className="badge">Render</span>
          </div>

          <a
            href="https://futstats.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver proyecto
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
