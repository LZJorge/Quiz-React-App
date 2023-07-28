import { ReactNode } from 'react'
import Layout from '../../../components/layout'
import { useLeaderboard, User } from '../../../hooks/useLeaderboard'
import Loader from '../../../components/loader'
import styles from './style.module.scss'

interface Props {
  imageUrl: string
  position: number
  children?: ReactNode
}

const UserBox: React.FC<Props> = ({ imageUrl, position, children }) => {
  return (
    <div className={`${styles['user-order']} ${styles[`user-order-${position}`]}`}>
      <img src={`${import.meta.env.VITE_API_URL}/${imageUrl}`} />

      { children }

      <div className={styles.tooltip}>
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
          <div className={styles['top-3']}>
            {leaderboard && (
              leaderboard.map((user: User, key: number) => {
                if(key > 2) {
                  return
                }

                return (
                  <UserBox 
                    imageUrl={user.avatar} 
                    position={key += 1}
                    key={key}
                  >
                    <h3>{user.username}</h3>
                    <h6>{user.score}</h6>
                  </UserBox>
                )
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
                return (
                  <tr key={key}>
                    { key === 0 ? 
                      (<td className={styles.icon}><i className="bx bxs-crown"></i></td>) : 
                      (<td></td>) 
                    }
                    <td className={`${styles['table-position']} ${styles[`position-${key}`]}`}>{key += 1}</td>
                    <td className={styles['table-username']}>{user.username}</td>
                    <td> {user.successResponses} </td>
                    <td className={styles.score}>{user.score}</td>
                  </tr>
                )
              })
            )}
          </table>
        </>
      )}
    </Layout>
  )
}

export default Leaderboard