import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from '@/components/PrivateRoutes'
import PrivateLogin from '@/components/PrivateLogin'

import Login from '@/pages/auth/login'
import Register from '@/pages/auth/register'

import Profile from '@/pages/app'

import Game from '@/pages/app/main/game'
import SelectGame from '@/pages/app/main'

import Leaderboard from '@/pages/app/leaderboard'

import Settings from '@/pages/app/settings'

import UpdateAvatar from '@/pages/app/settings/updateAvatar'
import UpdatePassword from '@/pages/app/settings/updatePassword'
import DeleteUser from '@/pages/app/settings/deleteUser'

import PageNotFound from '@/pages/pageNotFound'

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/auth' element={ <PrivateLogin /> }>
        <Route path='/auth/login' element={ <Login /> } />
        <Route path='/auth/register' element={ <Register /> } />
      </Route>

      <Route path='/' element={ <PrivateRoutes /> }>
        <Route path='/' element={ <Profile /> } />

        <Route path='/app' element={ <SelectGame /> } />
        <Route path='/app/play' element={ <Game /> } />

        <Route path='/leaderboard' element={ <Leaderboard /> } />

        <Route path='/settings' element={ <Settings /> } />

        <Route path='/settings/user/updateAvatar' element={ <UpdateAvatar /> } />
        <Route path='/settings/user/updatePassword' element={ <UpdatePassword /> } />
        <Route path='/settings/user/delete' element={ <DeleteUser /> } />
      </Route>

      <Route path='*' element={ <PageNotFound /> } />
    </Routes>
  )
}

export default Router