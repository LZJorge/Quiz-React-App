import { useState, useEffect } from "react"
import { getQuestion } from "../services/appServices"

interface Question {
    id: number
    title: string
    options: string[]
    difficulty: string
}

export const useQuestion = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    const [question, setQuestion] = useState<Question>({
        id: 0,
        title: '',
        options: [],
        difficulty: ''
    })
    const [newQuestion, setNewQuestion] = useState<boolean>(true)

    useEffect(() => {
        const fetchQuestionData = async () => {
            try {
                const response: Question = await getQuestion()
    
                setQuestion(response)
            } catch(err) {
                setQuestion({} as Question)
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