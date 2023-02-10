import Layout from '@/components/ui/Layout'
import { Dashboard, Header, Landing } from '@/components'
import { useAccount } from 'wagmi'
import Script from 'next/script'

export default function Home() {
  const { isConnected } = useAccount()
  return (
    <>
    <Script
    async src="https://www.googletagmanager.com/gtag/js?id=G-D95QZF84HQ"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-T7LMD5KFWQ');
      `}
    </Script>
    <Layout header={<Header />}>
      {isConnected ? (<Dashboard />) : (<Landing />)}
   
    </Layout>
    </>
  )
}
