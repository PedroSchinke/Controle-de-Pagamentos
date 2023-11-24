import { Outlet } from 'react-router-dom'
import { Layout } from './styles'
import { Header } from '../components/header/Header'

export function DefaultLayout() {
  return (
    <Layout>
      <Header />

      <Outlet />
    </Layout>
  )
}
