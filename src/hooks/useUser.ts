import { useState, useEffect } from 'react'
import { getData } from '../services/userServices'
import { formatDate } from '../helpers/helpers'

export interface User {
	id: string
	username: string
	avatar: string
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
        const response = await getData('/user/current')

        response.user.createdAt = formatDate(response.user.createdAt)

        setUser(response.user)
      } catch (err) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUserData()
  }, [])

  return { user, isLoading }
}