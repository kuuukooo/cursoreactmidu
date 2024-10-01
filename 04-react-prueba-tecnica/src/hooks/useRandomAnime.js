import { useState, useCallback } from 'react'
import { useAnimeFetch } from './useAnimeFetch'

export const useRandomAnime = () => {
  const generateRandomId = () => Math.floor(Math.random() * 1000)
  const [animeId, setAnimeId] = useState(generateRandomId())

  // Utilizamos el custom hook para obtener el anime basado en el ID
  const animeEndpointRandom = `https://api.jikan.moe/v4/anime/${animeId}`
  const { animeData, error, loading, fetchAnime } = useAnimeFetch(animeEndpointRandom)

  // Función para cambiar el ID y volver a intentar la petición en caso de error
  const reloadAnime = useCallback(() => {
    const newId = generateRandomId()
    setAnimeId(newId)
    fetchAnime(newId) // Llamamos al hook para volver a obtener los datos
  }, [fetchAnime])

  return { animeData, error, loading, reloadAnime }
}
