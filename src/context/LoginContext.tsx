import { useState ,createContext, Dispatch, SetStateAction, ReactNode } from "react"

interface LoginContextProps {
    auth: boolean
    setAuth: (state: boolean) => Dispatch<SetStateAction<boolean>> | void
  }

export const LoginContext = createContext<LoginContextProps>({
    auth: false,
    setAuth: () => {}
})

interface LoginProviderProps {
    children: ReactNode
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState(false)

    return (
        <LoginContext.Provider value={{ auth, setAuth }}>
            { children }
        </LoginContext.Provider>
    )
}