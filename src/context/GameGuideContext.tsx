import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

interface GuideContextProps {
  show: boolean;
  setShow: (state: boolean) => Dispatch<SetStateAction<boolean>> | void;
}

export const GuideContext = createContext<GuideContextProps>({
  show: false,
  setShow: () => {
    return
  },
})

interface GuideProviderProps {
  children: ReactNode;
}

export const GuideProvider: React.FC<GuideProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false)

  return (
    <GuideContext.Provider value={{ show, setShow }}>
      {children}
    </GuideContext.Provider>
  )
}
