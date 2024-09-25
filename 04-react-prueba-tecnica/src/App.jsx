import { useEffect, useState } from 'react'
import AnimeCard from './components/AnimeCard'
import Footer from './components/Footer'
import './App.css'

const id = Math.floor(Math.random() * 1000)
const animeEndpointRandom = `https://api.jikan.moe/v4/anime/${id}`

export function App () {
  const [animeData, setAnimeData] = useState(null)
  const [error, setError] = useState(null) // Estado para manejar errores

  useEffect(() => {
    fetch(animeEndpointRandom)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la conexión con la API')
        }
        return res.json()
      })
      .then(data => {
        setAnimeData(data)
      })
      .catch(err => {
        console.error(err)
        setError('No se pudo conectar con la API, recargue la página por favor.')
      })
  }, [])

  return (
    <main className='App'>
      <div className='AnimeCard'>
        {error
          ? (
            <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
              {error}
            </div>
            )
          : (
              animeData && animeData.data
                ? (
                  <AnimeCard
                    animeData={animeData}
                    title={animeData.data.title}
                    imgUrl={animeData.data.images.jpg.image_url}
                    synopsis={animeData.data.synopsis}
                    episodes={animeData.data.episodes}
                    year={animeData.data.year}
                    rating={animeData.data.rating}
                  />
                  )
                : (
                  <AnimeCard animeData={null} />
                  )
            )}
      </div>
      <Footer />
    </main>
  )
}
