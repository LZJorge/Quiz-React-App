import { useState, useEffect } from "react"
import { getData } from "../services/userServices"

export interface User {
    username: string
    score: number
	successResponses: number
    createdAt: string
}

export const useLeaderboard = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [leaderboard, setLeaderboard] = useState<User[]>()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getData('/user/getLeaderboard')

				setLeaderboard(response)
			} catch (err) {
				setLeaderboard({} as any)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	return { leaderboard, isLoading }
}