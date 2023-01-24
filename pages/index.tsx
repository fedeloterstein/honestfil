import Layout from '@/components/ui/Layout'
import { Dashboard, Header } from '@/components'

export default function Home() {
  return (
    <Layout header={<Header />}>
      <Dashboard />
    </Layout>
 
  )
}
