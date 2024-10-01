import { useRandomAnime } from './hooks/useRandomAnime'
import { useAnimeImageFetch } from './hooks/useAnimeImageFetch'
import AnimeCard from './components/AnimeCard'
import Footer from './components/Footer'
import Cargando from './components/Cargando'
import './App.css'

export function App () {
  const { animeData, error, loading, reloadAnime } = useRandomAnime()
  const animeImageUrl = useAnimeImageFetch(animeData)

  return (
    <main className='App'>
      <div className='AnimeCard'>
        {error
          ? (
            <div style={{ color: 'red', textAlign: 'center', padding: '10rem' }}>
              {error}
            </div>
            )
          : loading
            ? (
              <Cargando />
              )
            : animeData && animeData.data
              ? (
                <AnimeCard
                  animeData={animeData}
                  title={animeData.data.title}
                  imgUrl={animeImageUrl}
                  synopsis={animeData.data.synopsis}
                  episodes={animeData.data.episodes}
                  year={animeData.data.year}
                  rating={animeData.data.rating}
                  url={animeData.data.url}
                />
                )
              : (
                <AnimeCard animeData={null} />
                )}
        <button
          className='reloadButton'
          onClick={reloadAnime}
        >
          Nuevo anime!
        </button>
      </div>
      <Footer />
    </main>
  )
}
