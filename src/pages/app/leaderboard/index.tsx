import { ReactNode } from 'react'
import Layout from '../../../components/layout'
import { useLeaderboard, User } from '../../../hooks/useLeaderboard'
import Loader from '../../../components/loader'
import './index.css'

interface Props {
  imageUrl: string
  position: number
  children?: ReactNode
}

const UserBox: React.FC<Props> = ({ imageUrl, position, children }) => {
  return (
    <div className={`user-order user-order-${position}`}>
      <img src={`/public/avatars/${imageUrl}`} />

      { children }

      <div className="tooltip">
        {position}
      </div>
    </div>
  )
}

const Leaderboard: React.FC = () => {
  const { leaderboard, isLoading } = useLeaderboard()

  return (
    <Layout>
      { isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="top-3">
            {leaderboard && (
              leaderboard.map((user: User, key: number) => {
                if(key > 2) {
                  return
                }

                return <UserBox imageUrl='041-man.svg' position={key += 1}>
                  <h3>{user.username}</h3>
                  <h6>{user.score}</h6>
                </UserBox>
              })
            )}
          </div>

          <table>
            <thead>
              <th></th>
              <th> Puesto </th>
              <th> Usuario </th>
              <th> Respuestas acertadas </th>
              <th> Puntuación </th>
            </thead>
            {leaderboard && (
              leaderboard.map((user: User, key: number) => {
                return <tr>
                  { key === 0 ? 
                    (<td className='icon'><i className="bx bxs-crown"></i></td>) : 
                    (<td></td>) 
                  }
                  <td className={`table-position position-${key}`}>{key += 1}</td>
                  <td className='table-username'>{user.username}</td>
                  <td> {user.successResponses} </td>
                  <td className='score'>{user.score}</td>
                </tr>
              })
            )}
          </table>
        </>
      )}
    </Layout>
  )
}

export default Leaderboard