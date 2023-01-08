import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/layout';
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi'
import { arbitrum, avalanche, bsc, fantom, mainnet, optimism, polygon, polygonMumbai } from 'wagmi/chains'

if (!"2437b6ee508a24481ec9cfa2ff6ddadf") {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
}

const projectId = "2437b6ee508a24481ec9cfa2ff6ddadf"

// 2. Configure wagmi client
const chains = [polygonMumbai,goerli,arbitrum, avalanche, bsc, fantom,optimism, polygon]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

// 3. Configure modal ethereum client
export const ethereumClient = new EthereumClient(wagmiClient, chains)

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  return (
    <>
    {ready ? (
      <WagmiConfig client={wagmiClient}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </WagmiConfig>
      ) : null}
      {pathname === '/custom' ? null : (
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      )}
  </>
  )
}

export default MyApp
