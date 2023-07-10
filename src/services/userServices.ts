import axios from 'axios'

const URL = 'http://localhost:8000'

interface userForm {
	username: FormDataEntryValue | string
	password: FormDataEntryValue | string
}

interface userRegisterForm extends userForm {
	passwordConfirm: FormDataEntryValue | string
}

export const SendLoginFormData = async (formData: userForm) => {
	const response = await axios.post(`${URL}/auth/login`, formData, { withCredentials: true })
		.then((res) => {
			return res.data
		})

	return response
}

export const SendRegisterFormData = async (formData: userRegisterForm) => {
	const response = await axios.post(`${URL}/user/create`, formData)
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
	'/user/getCurrentUser' | 
	'/user/getLeaderboard' | 
	'/user/logout'

export const getData = async (endpoint: Endpoint) => {
	const response = await axios.get(`${URL}${endpoint}`, { withCredentials: true })
		.then((res) => {
			return res.data
		})
	return response
}