'use client'

import { MovieDetail } from '@/lib/omdb'

interface MovieModalProps {
  movie: MovieDetail
  onClose: () => void
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold">{movie.Title}</h2>
              <p className="text-purple-100 mt-1">{movie.Year} • {movie.Runtime} • {movie.Rated}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Poster */}
            <div className="md:col-span-1">
              {movie.Poster !== 'N/A' ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-lg">
                  N/A
                </div>
              )}

              {/* Ratings */}
              <div className="mt-4 space-y-2">
                <div className="bg-yellow-100 p-3 rounded-lg border-2 border-yellow-300">
                  <p className="text-xs text-yellow-800 font-semibold">IMDb Rating</p>
                  <p className="text-2xl font-bold text-yellow-900">{movie.imdbRating}/10</p>
                  <p className="text-xs text-yellow-700">{movie.imdbVotes} votos</p>
                </div>
                {movie.Metascore !== 'N/A' && (
                  <div className="bg-green-100 p-3 rounded-lg border-2 border-green-300">
                    <p className="text-xs text-green-800 font-semibold">Metascore</p>
                    <p className="text-2xl font-bold text-green-900">{movie.Metascore}/100</p>
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sinopsis</h3>
                <p className="text-gray-700 leading-relaxed">{movie.Plot}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Género</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.Genre.split(', ').map((genre) => (
                      <span key={genre} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Director</h3>
                  <p className="text-gray-700">{movie.Director}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Escritor</h3>
                  <p className="text-gray-700 text-sm">{movie.Writer}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Actores</h3>
                  <p className="text-gray-700 text-sm">{movie.Actors}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">País</h3>
                  <p className="text-gray-700">{movie.Country}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Idioma</h3>
                  <p className="text-gray-700">{movie.Language}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Estreno</h3>
                  <p className="text-gray-700">{movie.Released}</p>
                </div>

                {movie.BoxOffice !== 'N/A' && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-2">Taquilla</h3>
                    <p className="text-gray-700">{movie.BoxOffice}</p>
                  </div>
                )}
              </div>

              {movie.Awards !== 'N/A' && (
                <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
                  <h3 className="text-sm font-bold text-amber-900 mb-2">Premios</h3>
                  <p className="text-amber-800">{movie.Awards}</p>
                </div>
              )}

              {movie.Ratings.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Otras Valoraciones</h3>
                  <div className="space-y-2">
                    {movie.Ratings.map((rating, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm text-gray-700">{rating.Source}</span>
                        <span className="text-sm font-bold text-gray-900">{rating.Value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
