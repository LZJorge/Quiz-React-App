import { useState, useEffect } from 'react'
import { getCategories, Category } from '@/services/appServices'

const useCategory = () => {
  const [categories, setCategories] = useState<Category[] | undefined>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Category[] = await getCategories()

        setCategories(response)
      } catch (error) {
        setCategories(undefined)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { categories, isLoading }
}

export default useCategory