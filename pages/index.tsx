import Layout from '@/components/ui/Layout'
import { Dashboard, Header, Landing } from '@/components'
import { useAccount } from 'wagmi'

export default function Home() {
  const { isConnected } = useAccount()
  return (
    <Layout header={<Header />}>
      {isConnected ? (<Dashboard />) : (<Landing />)}
   
    </Layout>
 
  )
}
