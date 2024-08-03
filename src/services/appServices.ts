import axios from 'axios'
import { shuffleArray } from '@/helpers/helpers'
import { API, AUTHORIZATION } from '@/consts'

/**
 * Service for getting random question
 * 
 * @url /question/:category
 * @method Get
 * @param category
 */
export interface Question {
  id: number
  title: string
  options: string[]
  difficulty: string
  category: string
  categoryImg: string
}

export const getQuestion = async (category?: string): Promise<Question>  => {
  const url = category ? `${API}/question/${category}` : `${API}/question`

  const response = await axios
    .get(url, { withCredentials: true, headers: AUTHORIZATION })
    .then((res) => {
      const options = shuffleArray(res.data.options)

      const mappedQuestion = {
        id: res.data.id,
        title: res.data.question,
        options: options,
        difficulty: res.data.difficulty,
        category: res.data.Category.name,
        categoryImg: res.data.Category.imgUrl,
      }

      return mappedQuestion
    })

  return response
}

export const sendAnswer = async (answer: string) => {
  const response = await axios.post(`${API}/question`, { answer }, { 
    withCredentials: true,
    headers: AUTHORIZATION
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
    withCredentials: true,
    headers: AUTHORIZATION
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
    withCredentials: true,
    headers: AUTHORIZATION
  })
    .then((res) => {

      const mappedCategories = res.data.categories.map((category: Category) => {
        return {
          id: category.id,
          name: category.name,
          imgUrl: category.imgUrl,
          slug: category.slug
        }
      })

      return mappedCategories
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
    headers: AUTHORIZATION
  })
    .then((res) => {
      return res.data.avatars
    })

  return response
}