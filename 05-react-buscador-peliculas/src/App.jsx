import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState, useEffect } from 'react'
function App() {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(query)
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    if (newQuery === ' ') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (newQuery.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (newQuery.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }

  return (
    <div className="page">

      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} placeholder="Avengers, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
