import { useState, useEffect, useRef } from "react"
import { getData } from "../services/userServices"
import { formatDate } from "../helpers/helpers"

export interface User {
	id: string
	username: string
	profileImgUrl: string
	score: number
	totalQuestions: number
	successResponses: number
	createdAt: string
}

export const useUser = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const fetchUserData = async (): Promise<void> => {
			try {
                const response = await getData('/user/getCurrentUser')

                response.user.createdAt = formatDate(response.user.createdAt)

                setUser(response.user)
            } catch (err) {
                setUser({} as any)
            } finally {
                setIsLoading(false)
            }
		}
		fetchUserData()
	}, [])

    return { user, isLoading }
}