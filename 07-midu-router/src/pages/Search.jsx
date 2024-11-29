import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Buscaste ${routeParams.query}`
  }, [])

  return (
    <h1>Buscaste {routeParams.query}</h1>
  )
}
