import axios from 'axios'
import { OMDB_API_KEY, OMDB_BASE_URL, Movie } from '@/lib/omdb'
import SearchMovies from './SearchMovies'

// Función para obtener películas populares en el servidor
async function getPopularMovies(): Promise<Movie[]> {
  const searches = ['Marvel', 'Star Wars', 'Harry Potter', 'Batman']
  const randomSearch = searches[Math.floor(Math.random() * searches.length)]
  
  try {
    const response = await axios.get(
      `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${randomSearch}`
    )
    
    if (response.data.Response === 'True') {
      return response.data.Search.slice(0, 10) // Top 10
    }
    return []
  } catch (error) {
    console.error('Error fetching movies:', error)
    return []
  }
}

export default async function MoviesPage() {
  const allMovies = await getPopularMovies()
  
  // Filtrar duplicados basados en imdbID
  const popularMovies = Array.from(
    new Map(allMovies.map(movie => [movie.imdbID, movie])).values()
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
            Galería de Películas y Series
          </h1>
          <p className="text-white/90 text-lg">Explora el mundo del cine con OMDb API</p>
        </div>

        {/* Películas Populares - SSR */}
        <div className="mb-8 bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 border-4 border-pink-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-bold text-gray-800">Películas Populares - SSR</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
            {popularMovies.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
              >
                <div className="aspect-[2/3] bg-gray-200 relative">
                  {movie.Poster !== 'N/A' ? (
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                      N/A
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {movie.Type === 'movie' ? 'Movie' : 'Series'}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm text-gray-800 line-clamp-2">{movie.Title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-pink-50 rounded-lg border-2 border-pink-200">
            <p className="text-xs text-pink-800">
              <strong>SSR:</strong> Estas películas se cargan en el servidor antes de enviar la página. 
              Aparecen instantáneamente y son indexables por motores de búsqueda (SEO friendly).
            </p>
          </div>
        </div>

        {/* Búsqueda Interactiva - CSR */}
        <SearchMovies />

        {/* Tabla Justificación */}
        <div className="mt-8 bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 border-4 border-yellow-300">
          <h3 className="text-gray-700 text-2xl font-bold mb-4">Justificación Técnica</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-gray-700 px-4 py-3 text-left font-bold">Componente</th>
                  <th className="text-gray-700 px-4 py-3 text-left font-bold">Estrategia</th>
                  <th className="text-gray-700 px-4 py-3 text-left font-bold">Justificación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="text-gray-700 px-4 py-3 font-semibold">Películas Populares</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                      SSR
                    </span>
                  </td>
                  <td className="text-gray-600 px-4 py-3 text-sm">
                    Contenido estático que debe ser visible inmediatamente. Mejora SEO y performance inicial.
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="text-gray-700 px-4 py-3 font-semibold">Búsqueda Interactiva</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                      CSR
                    </span>
                  </td>
                  <td className="text-gray-600 px-4 py-3 text-sm">
                    Requiere interactividad en tiempo real. Los resultados cambian dinámicamente sin recargar.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="text-gray-700 px-4 py-3 font-semibold">Modal de Detalles</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                      CSR
                    </span>
                  </td>
                  <td className="text-gray-600 px-4 py-3 text-sm">
                    Componente interactivo que se abre/cierra dinámicamente. Carga datos bajo demanda.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <h4 className="font-bold text-green-900 mb-2">Ventajas SSR</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• SEO optimizado</li>
                <li>• Primera carga rápida</li>
                <li>• Contenido visible instantáneamente</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Ventajas CSR</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Interactividad total</li>
                <li>• Actualizaciones sin recargar</li>
                <li>• Menor carga en el servidor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/80 text-sm">
          <p>Powered by OMDb API • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}
