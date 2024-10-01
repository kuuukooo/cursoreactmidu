import { useState, useEffect, useCallback } from 'react'

export const useAnimeFetch = (initialUrl) => {
  const [animeData, setAnimeData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(initialUrl)

  const fetchAnime = useCallback((newId) => {
    const newUrl = `https://api.jikan.moe/v4/anime/${newId}`
    setUrl(newUrl) // Cambiamos la URL para forzar el nuevo fetch
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la conexión con la API')
        }
        return res.json()
      })
      .then(data => {
        setAnimeData(data)
        setError(null)
      })
      .catch(err => {
        console.error(err)
        setError('No se pudo conectar con la API, recargue la página por favor.')
      })
      .finally(() => setLoading(false))
  }, [url])

  return { animeData, error, loading, fetchAnime }
}
