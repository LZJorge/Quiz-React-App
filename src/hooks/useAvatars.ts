import { useState, useEffect } from 'react'
import { getAvatars } from '../services/appServices'

const useAvatars = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [avatars, setAvatars] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAvatars()
        console.log(response)

        setAvatars(response)
      } catch(error) {
        setAvatars([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { isLoading, setIsLoading, avatars }
}

export default useAvatars