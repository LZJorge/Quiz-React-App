import axios from 'axios'
import { shuffleArray } from '../helpers/helpers'

const API = 'http://localhost:8000'

interface Question {
    title: string
    options: string[]
    difficulty: string
}

export const getQuestion = async (): Promise<Question>  => {
    const response = await axios.get(`${API}/question`, { withCredentials: true })
    .then((res) => {
        const options = shuffleArray(res.data.options)

        return {
            title: res.data.question,
            options: options,
            difficulty: res.data.difficulty
        }
    })

    return response;
}

export const sendAnswer = async (answer: string) => {
    const response = await axios.put(`${API}/question`, { answer }, { withCredentials: true })
    .then((res) => {
        return res.data
    })

    return response
}