import { ClientProps } from '../context/Context'

export function selectActiveClients(data: ClientProps[]) {
  const activeClients = data.filter((client) => client.ativo === true)

  return activeClients
}
