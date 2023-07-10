import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import Profile from '../pages/app'
import Game from '../pages/app/game'
import Leaderboard from '../pages/app/leaderboard'

const Router = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/login' element={ <Login /> } />
			<Route path='/register' element={ <Register /> } />

			<Route path='/' element={ <Profile /> } />
			<Route path='/app' element={ <Game /> } />
			<Route path='/leaderboard' element={ <Leaderboard /> } />
		</Routes>
	)
}

export default Router