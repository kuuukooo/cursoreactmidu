/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'
import { SortBy, User } from './types.d'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  
  const originalUsers = useRef<User[]>([])
  

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const handleDelete = (uuid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }
  
  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then((res) => res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter((user) => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    
    if (sorting === SortBy.NONE) return filteredUsers

    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    }

    if (sorting === SortBy.NAME) {
      return filteredUsers.toSorted((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
    }

    if (sorting === SortBy.LAST) {
      return filteredUsers.toSorted((a, b) => {
        return a.name.last.localeCompare(b.name.last)
      })
    }

  }, [filteredUsers, sorting])

  return (
    <>
      <div className='App'>
        <h1>Prueba Técnica</h1>
      </div>
      <header>
        <button onClick={toggleColors}>Colorear Filas</button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY ? 'No ordenar por país' : 'Ordenar por País'}
        </button>
        <button onClick={handleReset}>
          Resetear Usuarios
        </button>
        <input placeholder='Filtra por país' onChange={(e) => setFilterCountry(e.target.value)} />
      </header>
      <UsersList changeSorting={handleChangeSort} deleteUser={handleDelete} showColors={showColors} users={sortedUsers}/>
    </>
  )
}

export default App
