import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const fevmChain: Chain = {
  id: 3141,
  name: 'Filecoin - Hyperspace testnet',
  network: 'Filecoin - Hyperspace testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Filecoin - Hyperspace testnet',
    symbol: 'tFIL',
  },
  rpcUrls: {
    default: {http: ['https://api.hyperspace.node.glif.io/rpc/v1']},
    public:  {http: ['https://api.hyperspace.node.glif.io/rpc/v1']},
  },
  testnet: true,
}

const { chains, provider } = configureChains(
  [fevmChain],
  [
    publicProvider()
  ]
);


const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}
