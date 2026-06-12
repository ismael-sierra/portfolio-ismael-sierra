import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <h1 className="home-title">
        ¡Hola! Soy <span className="highlight">Ismael Sierra Vega</span>
      </h1>
      <p className="home-description">
        Técnico Superior en Desarrollo de Aplicaciones Web, Desarrollo de
        Aplicaciones Multiplataforma y desarrollador Full Stack. Especializado
        en gran variedad de tecnologías, con experiencia en el desarrollo de
        aplicaciones web y móviles.
      </p>
      <section className="stats-section">
        {" "}
        <div className="stat-card">
          {" "}
          <h3>2</h3> <p>Proyectos principales</p>{" "}
        </div>{" "}
        <div className="stat-card">
          {" "}
          <h3>10+</h3> <p>Tecnologías</p>{" "}
        </div>{" "}
        <div className="stat-card">
          {" "}
          <h3>3</h3> <p>Titulaciones</p>{" "}
        </div>{" "}
      </section>
      <a href="/projects" className="home-button">
        Ver proyectos
      </a>
    </section>
  );
}

export default Home;
