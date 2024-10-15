import { createContext, useState } from 'react'

export const filtersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <filtersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </filtersContext.Provider>
  )
}
