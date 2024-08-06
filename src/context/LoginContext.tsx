import { useState ,createContext, Dispatch, SetStateAction, ReactNode } from 'react'
import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token: string) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp! < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

const setToken = () => {
  const token = localStorage.getItem("accessToken")

  if(!token) {
    return false
  }

  if(isTokenExpired(token)) {
    return false
  }

  return true
};

interface LoginContextProps {
  auth: boolean
  setAuth: (state: boolean) => Dispatch<SetStateAction<boolean>> | void
}

export const LoginContext = createContext<LoginContextProps>({
  auth: setToken(),
  setAuth: () => {
    return;
  },
});

interface LoginProviderProps {
  children: ReactNode
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(setToken());

  return (
    <LoginContext.Provider value={{ auth, setAuth }}>
      { children }
    </LoginContext.Provider>
  )
}