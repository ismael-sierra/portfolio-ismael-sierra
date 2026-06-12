import "./Projects.css";

function Projects() {
  const futstatsImages = [
    "Dashboard-p1.png",
    "Dashboard-p2.png",
    "Mis-Partidos.png",
  ];

  const fitmanagerImages = [
    "Home.png",
    "Rutinas.png",
    "Progreso.png",
    "Perfil.png",
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Proyectos</h2>

      {/* FITMANAGER */}

      <div className="project-card">
        <div className="slider-container">
          <div className="slider-track">
            {[...fitmanagerImages, ...fitmanagerImages].map((img, index) => (
              <a
                key={index}
                href={`/assets/${img}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/assets/${img}`}
                  alt={`Captura FitManager ${index + 1}`}
                  className="project-image fitmanager-image"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="project-info">
          <h3 className="project-name">FitManager</h3>

          <p className="project-description">
            FitManager es una aplicación Android nativa desarrollada como
            Proyecto Fin de Ciclo DAM. Permite a los usuarios crear y gestionar
            rutinas de entrenamiento personalizadas, iniciar sesiones de
            ejercicio, registrar su progreso físico y consultar estadísticas. La
            aplicación integra autenticación y almacenamiento en la nube con
            Firebase, seguimiento de peso corporal, control de objetivos y una
            interfaz moderna diseñada para mejorar la experiencia de
            entrenamiento.
          </p>

          <div className="project-tech">
            <span className="badge">Java</span>
            <span className="badge">Android Studio</span>
            <span className="badge">Firebase Auth</span>
            <span className="badge">Firestore</span>
            <span className="badge">Material Design</span>
            <span className="badge">Fragments</span>
            <span className="badge">RecyclerView</span>
            <span className="badge">SharedPreferences</span>
          </div>

          <a
            href="https://github.com/ismael-sierra/fitmanager-app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Código fuente
          </a>
        </div>
      </div>

      {/* FUTSTATS */}

      <div className="project-card">
        <div className="slider-container">
          <div className="slider-track">
            {[...futstatsImages, ...futstatsImages].map((img, index) => (
              <a
                key={index}
                href={`/assets/${img}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/assets/${img}`}
                  alt={`Captura FutStats ${index + 1}`}
                  className="project-image futstats-image"
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
            analizar sus estadísticas personales partido a partido. Incluye un
            dashboard interactivo con métricas avanzadas, gestión completa de
            partidos, gráficos estadísticos y diseño responsive Mobile First.
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
