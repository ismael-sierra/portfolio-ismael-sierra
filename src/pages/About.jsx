import "./About.css";

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">Sobre mí</h2>

      <p className="about-text">
        Soy Ismael Sierra Vega, desarrollador Full Stack apasionado por la
        tecnología y el desarrollo de software. He finalizado el Grado Superior
        en Desarrollo de Aplicaciones Web (DAW), el Grado Superior en Desarrollo
        de Aplicaciones Multiplataforma (DAM) y un Máster especializado en
        Desarrollo Full Stack & Inteligencia Artificial.
      </p>

      <p className="about-text">
        Me considero una persona proactiva, con gran capacidad de adaptación y
        orientada al trabajo en equipo. Disfruto enfrentándome a nuevos retos,
        aprendiendo constantemente y mejorando tanto a nivel técnico como
        personal. Busco oportunidades donde seguir creciendo como desarrollador
        y aportar valor con soluciones eficientes y bien diseñadas.
      </p>

      <h3 className="tech-subtitle">Tecnologías que utilizo</h3>

      <ul className="tech-badges">
        {/* Frontend */}
        <li>
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-SASS-CC6699?style=flat&logo=sass&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=000" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=000" />
        </li>

        {/* Backend */}
        <li>
          <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-PHP-777BB4?style=flat&logo=php&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white" />
        </li>

        {/* Multiplataforma */}
        <li>
          <img src="https://img.shields.io/badge/-Android-3DDC84?style=flat&logo=android&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-JavaFX-007396?style=flat" />
        </li>

        {/* Bases de datos */}
        <li>
          <img src="https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-SQLite-003B57?style=flat&logo=sqlite&logoColor=white" />
        </li>

        {/* APIs / Datos */}
        <li>
          <img src="https://img.shields.io/badge/-REST%20API-02569B?style=flat" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-JSON-000000?style=flat&logo=json&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-XML-FF6600?style=flat&logo=xml&logoColor=white" />
        </li>

        {/* ERP / Empresa */}
        <li>
          <img src="https://img.shields.io/badge/-Odoo-714B67?style=flat&logo=odoo&logoColor=white" />
        </li>

        {/* Herramientas */}
        <li>
          <img src="https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-Postman-FF6C37?style=flat&logo=postman&logoColor=white" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white" />
        </li>

        {/* DevOps / Deploy */}
        <li>
          <img src="https://img.shields.io/badge/-Vercel-000000?style=flat&logo=vercel" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/-Render-46E3B7?style=flat" />
        </li>

        {/* CMS */}
        <li>
          <img src="https://img.shields.io/badge/-WordPress-21759B?style=flat&logo=wordpress&logoColor=white" />
        </li>
      </ul>
    </section>
  );
}

export default About;
