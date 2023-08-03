import { useState, useEffect } from 'react'
import { getAvatars } from '@/services/appServices'

const useAvatars = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [avatars, setAvatars] = useState<string[] | undefined>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAvatars()

        setAvatars(response)
      } catch(error) {
        setAvatars(undefined)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { isLoading, setIsLoading, avatars }
}

export default useAvatars