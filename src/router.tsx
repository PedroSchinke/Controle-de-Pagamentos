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
import { EditClient } from './pages/edit client/EditClient'
import { EditReceipt } from './pages/edit receipt/EditReceipt'
import { RegisterActivity } from './pages/register pages/pages/register activity/RegisterActivity'
import { MyActivities } from './pages/search pages/pages/my activities page/MyActivities'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrar" element={<RegisterPage />} />
        <Route path="/registrar/pagamento" element={<RegisterReceipt />} />
        <Route path="/registrar/cliente" element={<RegisterClient />} />
        <Route path="/registrar/atividade" element={<RegisterActivity />} />
        <Route path="/buscar" element={<SearchPage />} />
        <Route path="/buscar/pagamento" element={<SearchReceipt />} />
        <Route
          path="/buscar/pagamento/detalhes/:id"
          element={<DetailedReceipt />}
        />
        <Route path="/buscar/cliente" element={<SearchClient />} />
        <Route
          path="/buscar/cliente/detalhes/:id"
          element={<DetailedClient />}
        />
        <Route path="/buscar/atividades" element={<MyActivities />} />
        <Route path="/editar/cliente/:id" element={<EditClient />} />
        <Route path="/editar/pagamento/:id" element={<EditReceipt />} />
      </Route>
    </Routes>
  )
}
