import axios from 'axios'
import { API } from '@/consts'

export interface UserForm {
	username: FormDataEntryValue
	password: FormDataEntryValue
}

export const SendLoginFormData = async (formData: UserForm) => {
  const response = await axios.post(`${API}/auth/login`, formData, { withCredentials: true })
    .then((res) => {
      return res.data
    })

  return response
}

export interface UserRegisterForm extends UserForm {
	passwordConfirm: FormDataEntryValue
}

export const SendRegisterFormData = async (formData: UserRegisterForm) => {
  const response = await axios.post(`${API}/user/create`, formData)
    .then((res) => {
      return res.data
    })
  return response
}

/***
 * @url /user/getCurrentUser
 * @url /user/getLeaderboard
 * @url /user/logout
 */
type Endpoint = 
	'/user/current' | 
	'/user/getLeaderboard' | 
	'/user/logout'

export const getData = async (endpoint: Endpoint) => {
  const response = await axios.get(`${API}${endpoint}`, { withCredentials: true })
    .then((res) => {
      return res.data
    })
  return response
}

export interface DeleteFormData {
  password: FormDataEntryValue
}

export const deleteUser = async (formData: DeleteFormData) => {
  const { user } = await getData('/user/current')

  const response = await axios.delete(`${API}/user/delete`, { 
    withCredentials: true,
    data: {
      password: formData.password,
      userID: user.id
    }
  })
    .then((res) => {
      return res.data
    })

  return response
}

/**
 * Set Avatars Service
 * 
 * @url '/avatars'
 */
export const updateAvatar = async (newAvatar: string) => {
  const response = await axios.put(`${API}/user/update/avatar`, { newAvatar }, {
    withCredentials: true
  })
    .then((res) => {
      return res.data
    })

  return response
}