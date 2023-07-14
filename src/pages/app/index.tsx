import { useMemo } from "react"
import { useUser } from "../../hooks/useUser"
import Layout from "../../components/layout"
import Loader from "../../components/loader"
import './index.css'

const Profile: React.FC = () => {
	const { user, isLoading } = useUser()

	const userSuccessRate = useMemo(() =>
		(successResponses: number, totalQuestions: number) => {
			const rate = Math.round((successResponses / totalQuestions) * 100)

			return rate
		}, [])

	return (
		<Layout>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{user && (
						<>
							<div className="profile-container">
								<section className="profile">
									<section className="profile-info">
										<div className="profile-image">
											<img
												src={`${import.meta.env.VITE_API_URL}${user.profileImgUrl}`}
												alt="PROFILE MAN AVATAR"
											/>
										</div>

										<div className="user-info">
											<h1> {user.username} </h1>
											<h4 className="created-info">
												<span> {user.createdAt} </span>
											</h4>
										</div>
									</section>

									<div className="success-rate-bar">
										<div className="success-rate-bar-text">
											Porcentaje de éxito:
											<span>
												{userSuccessRate(user.successResponses, user.totalQuestions)}%
											</span>
										</div>

										<div
											className="rate"
											style={{ width: `${userSuccessRate(user.successResponses, user.totalQuestions)}%` }}
										></div>
									</div>
								</section>

								<section className="profile-stats">
									<div>
										<p>Puntuación:</p>
										<h1>{user.score}</h1>
										<i className="bx bxs-star"></i>
									</div>

									<div>
										<p>Respuestas acertadas:</p>
										<h1>{user.successResponses}</h1>
										<i className="bx bxs-check-circle"></i>
									</div>

									<div>
										<p>Preguntas totales:</p>
										<h1>{user.totalQuestions}</h1>
										<i className="bx bxs-help-circle"></i>
									</div>
								</section>
							</div>
						</>
					)}
				</>
			)}
		</Layout>
	)
}

export default Profile