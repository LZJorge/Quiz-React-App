import axios from 'axios'
import { shuffleArray } from '@/helpers/helpers'

const API = import.meta.env.VITE_API_URL

export interface Question {
  id: number
  title: string
  options: string[]
  difficulty: string
  category: string
  categoryImg: string
}

export const getQuestion = async (category?: string): Promise<Question>  => {
  const response = category ? 
    await axios.get(`${API}/question/${category}`, { withCredentials: true })
    .then((res) => {
      const options = shuffleArray(res.data.options)

      return {
        id: res.data.id,
        title: res.data.question,
        options: options,
        difficulty: res.data.difficulty,
        category: res.data.Category.name,
        categoryImg: res.data.Category.imgUrl
      }
    })
    :
    await axios.get(`${API}/question`, { withCredentials: true })
    .then((res) => {
      const options = shuffleArray(res.data.options)

      return {
        id: res.data.id,
        title: res.data.question,
        options: options,
        difficulty: res.data.difficulty,
        category: res.data.Category.name,
        categoryImg: res.data.Category.imgUrl
      }
    })    

  return response
}

export const sendAnswer = async (answer: string) => {
  const response = await axios.put(`${API}/question`, { answer }, { 
    withCredentials: true 
  })
  .then((res) => {
    return res.data
  })

  return response
}

/**
 * Update Password Service
 * 
 * @url '/user/update/password'
 */
export interface UpdatePasswordForm {
  password: FormDataEntryValue | string
  newPassword: FormDataEntryValue | string
  newPasswordConfirm: FormDataEntryValue | string
}

export const sendUpdatePasswordForm = async (formData: UpdatePasswordForm) => {
  const response = await axios.put(`${API}/user/update/password`, formData, { 
    withCredentials: true 
  })
  .then((res) => {
    return res.data
  })

  return response
}

/**
 * Get Categories service
 * 
 * @url '/category/get'
 */
export interface Category {
  id: string
  name: string
  imgUrl: string
  slug: string
}

export const getCategories = async (): Promise<Category[]> => {
  const response = axios.get(`${API}/category/get`, {
    withCredentials: true
  })
  .then((res) => {
    return res.data
  })

  return response
}

/**
 * Get Avatars Service
 * 
 * @url '/avatars'
 */
export const getAvatars = async () => {
  const response = await axios.get(`${API}/avatars/get`, { 
    withCredentials: true,
  })
  .then((res) => {
    return res.data
  })

  return response
}