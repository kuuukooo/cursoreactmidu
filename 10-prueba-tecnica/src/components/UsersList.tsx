/* eslint-disable react/react-in-jsx-scope */
import { SortBy, type User } from '../types.d'

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (uuid: string) => void
  showColors: boolean
  users: User[]
}

export function UsersList ({ changeSorting, deleteUser, showColors, users }: Props) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer' onClick={() => changeSorting(SortBy.NAME)}>Nombre</th>
          <th className='pointer' onClick={() => changeSorting(SortBy.LAST)}>Apellido</th>
          <th className='pointer' onClick={() => changeSorting(SortBy.COUNTRY)}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {
          users.map((user, index)=> {
            const backgroundColor = index % 2 === 0 ? '#ecffe9' : '#d9ffd3'
            const color = showColors ? backgroundColor : 'transparent'
            console.log(user.login.uuid)
            return (
              <tr key={user.login.uuid} style={{ backgroundColor: color }}>
                
                <td>
                  <img src={user.picture.thumbnail} />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                  {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
                <td>
                  <button onClick={() => deleteUser(user.login.uuid)}>
                    Borrar
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
// table, thead, tbody
// tr, th, td
// partes importantes de una tabla.