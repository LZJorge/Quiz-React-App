import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"

interface SidebarContextProps {
  sidebarState: string
  setSidebarState: (state: string) => Dispatch<SetStateAction<string>> | void
}

export const SidebarContext = createContext<SidebarContextProps>({
  sidebarState: 'open',
  setSidebarState: () => {}
})

interface SidebarProviderProps {
  children: ReactNode
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarState, setSidebarState] = useState('open')

  return (
    <SidebarContext.Provider value={{ sidebarState, setSidebarState }}>
      { children }
    </SidebarContext.Provider>
  )
}