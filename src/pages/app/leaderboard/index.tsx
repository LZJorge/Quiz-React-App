import { useState, useEffect, ReactNode } from 'react'
import { getData } from '../../../services/userServices'
import { formatDate } from '../../../helpers/helpers'
import Layout from '../../../components/layout'
import './index.css'

interface TopUser {
  username: string
  score: number
  createdAt: string
}

interface Props {
  imageUrl: string
  position: number
  children?: ReactNode
}

const TopUserBox: React.FC<Props> = ({ imageUrl, position, children }) => {
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
  const [leaderboard, setLeaderboard] = useState<TopUser[]>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData('/user/getLeaderboard')

      response.map((user: TopUser) => {
        user.createdAt = formatDate(user.createdAt)
      })

      setLeaderboard(response)
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <div className="top-3">
        {leaderboard && (
          leaderboard.map((user: TopUser, key: number) => {
            if(key > 2) {
              return
            }

            return <TopUserBox imageUrl='041-man.svg' position={key += 1}>
              <h3>{user.username}</h3>
              <h6>{user.score}</h6>
            </TopUserBox>
          })
        )}
      </div>

      <table>
        <thead>
          <th> Puesto </th>
          <th> Usuario </th>
          <th> Puntuación </th>
        </thead>
        {leaderboard && (
          leaderboard.map((user: TopUser, key: number) => {
            return <tr>
              <td className={`table-position position-${key}`}>{key += 1}</td>
              <td>{user.username}</td>
              <td className='score'>{user.score}</td>
            </tr>
          })
        )}
      </table>
    </Layout>
  )
}

export default Leaderboard