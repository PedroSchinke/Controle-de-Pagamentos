import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { RegisterPage } from './pages/register page/RegisterPage'
import { SearchPage } from './pages/search page/SearchPage'
import { Dashboard } from './pages/dashboard/Dashboard'
import { DetailedItemPage } from './pages/detailed item page/DetailedItemPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastrar" element={<RegisterPage />} />
        <Route path="/consultar" element={<SearchPage />} />
        <Route path="/detalhes" element={<DetailedItemPage />} />
      </Route>
    </Routes>
  )
}
