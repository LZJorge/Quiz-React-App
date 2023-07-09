import { useState, useEffect } from "react"
import { getQuestion } from "../services/appServices"

interface Question {
    title: string
    options: string[]
    difficulty: string
}

export const useQuestion = () => {
    const [question, setQuestion] = useState<Question | any>({
        title: '',
        options: [],
        difficulty: ''
    })
    const [condition, setCondition] = useState<boolean>(true)

    useEffect(() => {
        const fetchQuestionData = async () => {
            const response: Question = await getQuestion()
    
            setCondition(false)
            setQuestion(response)
        }

        if(condition) {
            fetchQuestionData()
        }
    }, [condition])

    return { question, setCondition }
}