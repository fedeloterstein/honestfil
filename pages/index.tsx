import Layout from '@/components/ui/Layout'
import { Dashboard, Header, Landing } from '@/components'

export default function Home() {
  return (
    <Layout header={<Header />}>
      <Landing />
    </Layout>
 
  )
}
