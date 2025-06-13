function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        ¡Hola! Soy{" "}
        <span className="text-blue-600 dark:text-blue-400">
          Ismael Sierra Vega
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        Desarrollador Full Stack con pasión por la tecnología, la innovación y
        el aprendizaje continuo. Bienvenido a mi portfolio.
      </p>
      <a
        href="/projects"
        className="mt-8 inline-block bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-400 transition"
      >
        Ver proyectos
      </a>
    </section>
  );
}

export default Home;
