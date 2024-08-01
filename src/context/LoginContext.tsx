import { useState ,createContext, Dispatch, SetStateAction, ReactNode } from 'react'

interface LoginContextProps {
  auth: boolean
  setAuth: (state: boolean) => Dispatch<SetStateAction<boolean>> | void
}

export const LoginContext = createContext<LoginContextProps>({
  auth: localStorage.getItem('accessToken') ? true : false,
  setAuth: () => { return }
})

interface LoginProviderProps {
  children: ReactNode
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem('accessToken') ? true : false
  )

  return (
    <LoginContext.Provider value={{ auth, setAuth }}>
      { children }
    </LoginContext.Provider>
  )
}