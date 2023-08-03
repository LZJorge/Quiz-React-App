import { useState, useEffect } from 'react'
import { getQuestion, Question } from '@/services/appServices'

export const useQuestion = (category?: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
    
  const [question, setQuestion] = useState<Question | undefined>({
    id: 0,
    title: '',
    options: [],
    difficulty: '',
    category: '',
    categoryImg: ''
  })
  const [newQuestion, setNewQuestion] = useState<boolean>(true)

  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const response: Question = category ?
          await getQuestion(category) : await getQuestion()
    
        setQuestion(response)
      } catch(err) {
        setQuestion(undefined)
      } finally {
        setNewQuestion(false)
        setIsLoading(false)
      }
    }

    if(newQuestion) {
      fetchQuestionData()
    }
  }, [newQuestion])

  return { question, isLoading, setIsLoading, setNewQuestion }
}