import { useState, useEffect } from "react"
import { getData } from "../../services/userServices"
import Button from "../../components/button"
import Layout from "../../components/layout"
import { formatDate } from "../../helpers/helpers"
import './index.css'

interface User {
	id: string
	username: string
	score: number
	createdAt: string
}

interface ApiResponse {
	user: User
}

const Profile: React.FC = () => {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const fetchUserData = async (): Promise<void> => {
			const response: ApiResponse = await getData('/user/getCurrentUser')

			response.user.createdAt = formatDate(response.user.createdAt)

			if(response.user) {
				setUser(response.user)
			}
		}
		fetchUserData()
	}, [])

	return (
		<Layout>
			{user && (
				<>
					<div className="profile-section">
						<img src="/avatars/041-man.svg" alt="PROFILE MAN AVATAR" />
						
						<div className="profile-info">
							<div className="user-info">
								<h1> { user.username } </h1>
								<h4 className="created-info"> 
									Se unió el: 
									<span> { user.createdAt } </span>
								</h4>
							</div>

							<div className="score-info">
								<div>
									<h1>{ user.score }</h1>
									<h4> Puntuación: </h4>
								</div>
								<div className="score-box">
									<i className="bx bxs-star"></i>
								</div>
								
							</div>
						</div>
					</div>
				</>
			)}
		</Layout>
	)
}

export default Profile