import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <h1 className="home-title">
        ¡Hola! Soy <span className="highlight">Ismael Sierra Vega</span>
      </h1>
      <p className="home-description">
        Desarrollador Full Stack con pasión por la tecnología, la innovación y
        el aprendizaje continuo. Bienvenido a mi portfolio.
      </p>
      <a href="/projects" className="home-button">
        Ver proyectos
      </a>
    </section>
  );
}

export default Home;
