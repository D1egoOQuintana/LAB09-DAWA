export default function Home() {
  const projects = [
    {
      title: 'Pokémon CSR',
      description: 'Client-Side Rendering - Datos cargados en el navegador',
      href: '/pokemon-csr',
      color: 'from-blue-500 to-purple-600',
      badge: 'CSR'
    },
    {
      title: 'Pokémon SSR',
      description: 'Server-Side Rendering - Datos precargados en el servidor',
      href: '/pokemon-ssr',
      color: 'from-green-500 to-teal-600',
      badge: 'SSR'
    },
    {
      title: 'Dashboard del Clima',
      description: 'Combinación híbrida de SSR y CSR',
      href: '/weather',
      color: 'from-sky-400 to-indigo-600',
      badge: 'HÍBRIDO'
    },
    {
      title: 'Galería de Películas',
      description: 'Aplicación completa con OMDb API',
      href: '/movies',
      color: 'from-purple-600 to-red-600',
      badge: 'PROYECTO FINAL'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Next.js App
          </h1>
          <p className="text-xl text-purple-200">
            Ejercicios de CSR, SSR y aplicaciones híbridas
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm">
            Conceptos fundamentales de Next.js 14
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="group relative bg-white/10 backdrop-blur rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                    {project.badge}
                  </span>
                </div>
                <p className="text-purple-200 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Ver proyecto 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-green-400/30">
            <h3 className="text-lg font-bold text-white mb-2">SSR</h3>
            <p className="text-sm text-purple-200">
              SEO optimizado, primera carga rápida, contenido visible instantáneamente
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-blue-400/30">
            <h3 className="text-lg font-bold text-white mb-2">CSR</h3>
            <p className="text-sm text-purple-200">
              Interactividad total, actualizaciones sin recargar, menor carga en el servidor
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-purple-400/30">
            <h3 className="text-lg font-bold text-white mb-2">Híbrido</h3>
            <p className="text-sm text-purple-200">
              Combina lo mejor de ambos mundos según las necesidades de cada componente
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-purple-300 text-sm">
          <p>Built with Next.js 14 • Tailwind CSS • TypeScript</p>
          <p className="mt-2 text-purple-400">{new Date().getFullYear()} • Ejercicios de aprendizaje</p>
        </div>
      </div>
    </div>
  );
}

