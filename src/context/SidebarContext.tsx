import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface SidebarContextProps {
  sidebarState: string
  setSidebarState: (state: string) => Dispatch<SetStateAction<string>> | void
}

export const SidebarContext = createContext<SidebarContextProps>({
  sidebarState: 'closed',
  setSidebarState: () => { return }
})

interface SidebarProviderProps {
  children: ReactNode
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarState, setSidebarState] = useState('closed')

  return (
    <SidebarContext.Provider value={{ sidebarState, setSidebarState }}>
      { children }
    </SidebarContext.Provider>
  )
}