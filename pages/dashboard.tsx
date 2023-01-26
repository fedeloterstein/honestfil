import Layout from '@/components/ui/Layout'
import { Dashboard, Header } from '@/components'

export default function DashboardPage() {
  return (
    <Layout header={<Header />}>
      <Dashboard />
    </Layout>
 
  )
}
