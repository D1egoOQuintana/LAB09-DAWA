'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { OMDB_API_KEY, OMDB_BASE_URL, Movie, MovieDetail } from '@/lib/omdb'

interface MovieModalProps {
    movie: MovieDetail
    onClose: () => void
}

function MovieModal({ movie, onClose }: MovieModalProps) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 transition z-10"
                    >
                        ✕
                    </button>

                    <div className="grid md:grid-cols-2 gap-6 p-6">
                        <div>
                            {movie.Poster !== 'N/A' ? (
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="w-full rounded-xl shadow-lg"
                                />
                            ) : (
                                <div className="w-full aspect-[2/3] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-6xl">
                                    N/A
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800">{movie.Title}</h2>
                            
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-yellow-400 text-gray-800 rounded-full text-sm font-semibold">
                                    {movie.Year}
                                </span>
                                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                                    {movie.Type === 'movie' ? 'Movie' : 'Series'}
                                </span>
                                {movie.Rated && (
                                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                                        {movie.Rated}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Genre:</strong> {movie.Genre}</p>
                                <p className="text-gray-700"><strong>Director:</strong> {movie.Director}</p>
                                <p className="text-gray-700"><strong>Actors:</strong> {movie.Actors}</p>
                                <p className="text-gray-700"><strong>Runtime:</strong> {movie.Runtime}</p>
                                {movie.imdbRating && (
                                    <p className="text-gray-700">
                                        <strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}/10
                                    </p>
                                )}
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-700"><strong>Plot:</strong></p>
                                <p className="text-gray-600 mt-2">{movie.Plot}</p>
                            </div>

                            {movie.Awards && movie.Awards !== 'N/A' && (
                                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
                                    <p className="text-sm text-yellow-800"><strong>Awards:</strong></p>
                                    <p className="text-yellow-700 mt-1">{movie.Awards}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SearchMovies() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (searchTerm.length < 3) {
      setMovies([])
      setError('')
      return
    }

    const delaySearch = setTimeout(async () => {
      setLoading(true)
      setError('')
      
      try {
        const response = await axios.get(
          `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${searchTerm}`
        )
        
        if (response.data.Response === 'True') {
          setMovies(response.data.Search)
        } else {
          setMovies([])
          setError(response.data.Error)
        }
      } catch (err) {
        setError('Error al buscar películas')
      } finally {
        setLoading(false)
      }
    }, 500) // Debounce de 500ms

    return () => clearTimeout(delaySearch)
  }, [searchTerm])

  const handleMovieClick = async (imdbID: string) => {
    try {
      const response = await axios.get(
        `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}`
      )
      setSelectedMovie(response.data)
      setShowModal(true)
    } catch (err) {
      console.error('Error al obtener detalles:', err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Búsqueda Interactiva */}
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 border-4 border-purple-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <h2 className="text-2xl font-bold text-gray-800">Búsqueda en Tiempo Real - CSR</h2>
        </div>

        <input
          type="text"
          placeholder="Busca películas o series... (ej: Marvel, Star Wars, Friends)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 text-lg border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none transition text-gray-700"
        />

        <div className="mt-3 p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
          <p className="text-xs text-purple-800">
            <strong>CSR:</strong> Los resultados se actualizan dinámicamente sin recargar la página. 
            Búsqueda en tiempo real con debounce.
          </p>
        </div>
      </div>

      {/* Resultados */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-white text-lg">Buscando...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
          {error}
        </div>
      )}

      {!loading && movies.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie.imdbID)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl"
            >
                <div className="aspect-[2/3] bg-gray-200 relative">
                {movie.Poster !== 'N/A' ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
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
      )}

      {/* Modal de Detalles */}
      {showModal && selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => {
            setShowModal(false)
            setSelectedMovie(null)
          }}
        />
      )}
    </div>
  )
}
