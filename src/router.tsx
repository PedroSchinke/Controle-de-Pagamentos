import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { RegisterPage } from './pages/register page/RegisterPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cadastrar" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}
