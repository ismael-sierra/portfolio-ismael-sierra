function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Sobre mí
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Me llamo Ismael Sierra Vega. He cursado el Grado Superior de Desarrollo
        de Aplicaciones Web y un Máster especializado en Desarrollo Full Stack &
        Inteligencia Artificial. Soy una persona proactiva, con gran capacidad
        de adaptación y trabajo en equipo. Me motiva la oportunidad de seguir
        aprendiendo de profesionales con experiencia y aportar mis ganas de
        innovar y mejorar continuamente.
      </p>
      <h3 className="text-2xl font-semibold mt-10 mb-4">
        Tecnologías que utilizo
      </h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 dark:text-gray-200">
        <li>HTML, CSS, SASS, Bootstrap 5</li>
        <li>JavaScript, PHP, Java</li>
        <li>Node.js, React</li>
        <li>MySQL, MongoDB</li>
        <li>Git, GitHub</li>
        <li>WordPress</li>
      </ul>
    </section>
  );
}

export default About;
