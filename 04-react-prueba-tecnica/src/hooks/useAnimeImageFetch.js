import { useState, useEffect } from 'react'

export const useAnimeImageFetch = (animeData) => {
  const [animeImageUrl, setAnimeImageUrl] = useState(null)

  useEffect(() => {
    if (animeData && animeData.data) {
      setAnimeImageUrl(animeData.data.images.jpg.image_url)
    }
  }, [animeData])

  return animeImageUrl
}
