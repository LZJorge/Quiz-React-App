export const CATEGORY_PARAM = 'ctgy'

export const QUESTION_RESPONSE = {
  SUCCESS: 'success',
  FAIL: 'fail'
}

export const API = import.meta.env.VITE_API_URL

export const AUTHORIZATION = { 'Authorization': `bearer ${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json', 'Accept': 'application/json' }