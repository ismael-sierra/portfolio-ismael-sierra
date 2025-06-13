function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Proyectos
      </h2>

      <div className="grid gap-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="..\assets\Dashboard-p1.png"
                alt="Dashboard FutStats"
                className="w-full h-64 object-cover md:h-full"
              />
              <img
                src="..\assets\Dashboard-p2.png"
                alt="Dashboard FutStats"
                className="w-full h-64 object-cover md:h-full"
              />
              <img
                src="..\assets\Mis-Partidos.png"
                alt="Mis Partidos FutStats"
                className="w-full h-64 object-cover md:h-full"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">FutStats</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                FutStats es una aplicación web Full Stack desarrollada como
                Trabajo Fin de Máster. Permite a futbolistas amateur registrar,
                visualizar y analizar sus estadísticas personales partido a
                partido. La app ofrece un dashboard interactivo con métricas
                detalladas, funcionalidades CRUD de partidos, formularios
                mejorados y un diseño Mobile First completamente responsive.
              </p>
              <a
                href="https://futstats.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-400 transition"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
