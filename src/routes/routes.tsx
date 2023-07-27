import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from '../components/PrivateRoutes'

import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import Profile from '../pages/app'
import Game from '../pages/app/game'
import Leaderboard from '../pages/app/leaderboard'

import Settings from '../pages/app/settings'

import UpdateAvatar from '../pages/app/settings/updateAvatar'
import UpdatePassword from '../pages/app/settings/updatePassword'
import DeleteUser from '../pages/app/settings/deleteUser'

const Router = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/login' element={ <Login /> } />
			<Route path='/register' element={ <Register /> } />

			<Route path='/' element={ <PrivateRoutes /> }>
				<Route path='/' element={ <Profile /> } />
				<Route path='/app' element={ <Game /> } />
				<Route path='/leaderboard' element={ <Leaderboard /> } />

				<Route path='/settings' element={ <Settings /> } />

				<Route path='/settings/user/updateAvatar' element={ <UpdateAvatar /> } />
				<Route path='/settings/user/updatePassword' element={ <UpdatePassword /> } />
				<Route path='/settings/user/delete' element={ <DeleteUser /> } />
			</Route>
		</Routes>
	)
}

export default Router