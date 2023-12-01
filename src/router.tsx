import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { RegisterPage } from './pages/register pages/RegisterPage'
import { Dashboard } from './pages/dashboard/Dashboard'
import { DetailedReceipt } from './pages/detailed item pages/detailed receipt page/DetailedReceipt'
import { RegisterReceipt } from './pages/register pages/pages/register receipt page/RegisterReceipt'
import { RegisterClient } from './pages/register pages/pages/register client page/RegisterClient'
import { SearchReceipt } from './pages/search pages/pages/search receipt page/SearchReceipt'
import { SearchPage } from './pages/search pages/SearchPage'
import { SearchClient } from './pages/search pages/pages/search client page/SearchClient'
import { DetailedClient } from './pages/detailed item pages/detailed client page/DetailedClient'
import { EditClient } from './pages/edit client/editClient'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastrar" element={<RegisterPage />} />
        <Route path="/cadastrar/recebimento" element={<RegisterReceipt />} />
        <Route path="/cadastrar/cliente" element={<RegisterClient />} />
        <Route path="/consultar" element={<SearchPage />} />
        <Route path="/consultar/recebimento" element={<SearchReceipt />} />
        <Route
          path="/consultar/recebimento/detalhes/:id"
          element={<DetailedReceipt />}
        />
        <Route path="/consultar/cliente" element={<SearchClient />} />
        <Route
          path="/consultar/cliente/detalhes/:id"
          element={<DetailedClient />}
        />
        <Route path="/editar/cliente/:id" element={<EditClient />} />
      </Route>
    </Routes>
  )
}
