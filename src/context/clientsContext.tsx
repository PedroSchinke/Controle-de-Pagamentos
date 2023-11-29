import { ReactNode, createContext, useState } from 'react'

export interface ClientProps {
  id: number
  nome: string
  email: string
  celular: number
  dataCadastro: string
  dataAtualizacao?: string
}

interface ClientsContextType {
  clients: ClientProps[]
  setClients: (value: ClientProps[]) => void
}

export const ClientsContext = createContext({} as ClientsContextType)

interface ContextProviderProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [clients, setClients] = useState<ClientProps[]>([])

  return (
    <ClientsContext.Provider
      value={{
        clients,
        setClients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  )
}
