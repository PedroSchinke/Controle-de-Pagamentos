import { ReactNode, createContext, useState } from 'react'

export interface ClientProps {
  id: number
  nome: string
  email: string
  celular: number
  dataCadastro: string
  dataAtualizacao?: string
}

export interface ReceiptProps {
  id: number
  valor: number
  tipoPagamento: string
  dataPagamento: string
  cliente: ClientProps
}

interface ClientsContextType {
  clients: ClientProps[]
  setClients: (value: ClientProps[]) => void
  clientsForReceiptSearch: ClientProps[]
  setClientsForReceiptSearch: (value: ClientProps[]) => void
  isClientSelectOverlayActive: boolean
  setIsClientSelectOverlayActive: (value: boolean) => void
  clientName: string | null
  setClientName: (value: string | null) => void
  clientNameForRegister: string | null
  setClientNameForRegister: (value: string | null) => void
  clientNameForEdit: string | null
  setClientNameForEdit: (value: string | null) => void
  clientIdForSearch: number | null
  setClientIdForSearch: (value: number | null) => void
  clientIdForRegister: number | null
  setClientIdForRegister: (value: number | null) => void
  clientIdForEdit: number | null
  setClientIdForEdit: (value: number | null) => void
  receipts: ReceiptProps[]
  setReceipts: (value: ReceiptProps[]) => void
  showNoResultsMessage: boolean
  setShowNoResultsMessage: (value: boolean) => void
  showNoResultsMessageInOverlay: boolean
  setShowNoResultsMessageInOverlay: (value: boolean) => void
  isClientSelectForEditOverlayActive: boolean
  setIsClientSelectForEditOverlayActive: (value: boolean) => void
}

export const ClientsContext = createContext({} as ClientsContextType)

interface ContextProviderProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [clients, setClients] = useState<ClientProps[]>([])

  const [clientsForReceiptSearch, setClientsForReceiptSearch] = useState<
    ClientProps[]
  >([])

  const [isClientSelectOverlayActive, setIsClientSelectOverlayActive] =
    useState<boolean>(false)

  const [clientName, setClientName] = useState<string | null>(null)

  const [clientNameForRegister, setClientNameForRegister] = useState<
    string | null
  >(null)

  const [clientNameForEdit, setClientNameForEdit] = useState<string | null>(
    null,
  )

  const [clientIdForSearch, setClientIdForSearch] = useState<number | null>(
    null,
  )

  const [clientIdForRegister, setClientIdForRegister] = useState<number | null>(
    null,
  )

  const [clientIdForEdit, setClientIdForEdit] = useState<number | null>(null)

  const [receipts, setReceipts] = useState<ReceiptProps[]>([])

  const [showNoResultsMessage, setShowNoResultsMessage] =
    useState<boolean>(false)

  const [showNoResultsMessageInOverlay, setShowNoResultsMessageInOverlay] =
    useState<boolean>(false)

  const [
    isClientSelectForEditOverlayActive,
    setIsClientSelectForEditOverlayActive,
  ] = useState<boolean>(false)

  return (
    <ClientsContext.Provider
      value={{
        clients,
        setClients,
        clientsForReceiptSearch,
        setClientsForReceiptSearch,
        isClientSelectOverlayActive,
        setIsClientSelectOverlayActive,
        clientName,
        setClientName,
        clientNameForRegister,
        setClientNameForRegister,
        clientNameForEdit,
        setClientNameForEdit,
        clientIdForSearch,
        setClientIdForSearch,
        clientIdForRegister,
        setClientIdForRegister,
        clientIdForEdit,
        setClientIdForEdit,
        receipts,
        setReceipts,
        showNoResultsMessage,
        setShowNoResultsMessage,
        showNoResultsMessageInOverlay,
        setShowNoResultsMessageInOverlay,
        isClientSelectForEditOverlayActive,
        setIsClientSelectForEditOverlayActive,
      }}
    >
      {children}
    </ClientsContext.Provider>
  )
}
