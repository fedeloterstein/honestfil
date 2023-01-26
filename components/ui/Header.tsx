import { Button, Heading, HStack, Stack, Text, Link } from '@chakra-ui/react'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useAccount } from 'wagmi'
import { UnionIcon, WalletIcon } from '../icons'
import { ConnectButton } from './ConnectButton'

export const Header = () => {

  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount()

  if (!isConnected) return (
    <HStack justifyContent={'flex-end'} p={5} w={'100%'}>
      <ConnectButton />
    </HStack>
  )
  return (
    <HStack justifyContent={'space-between'} p={5} w={'100%'}>
      <Stack >
        <Heading fontWeight={700} fontSize={'30px'} lineHeight={'38px'} color={'#4C4C66'}>Dashboard FIL Reserves</Heading>
        <Text fontWeight={400} fontSize={'13px'} lineHeight={'16px'} color={'#6F6C99'} >Real-time data of the reserves of Filecoin on decentralized finance (DeFi) protocols or dapps.</Text>
      </Stack>
      <HStack>
        <Button bgGradient={'linear(to-r, #FF409A, #C438EF)'} width={'48px'} height={'28px'} borderRadius={'50px'} boxShadow={'0px 5px 34px 0px rgba(186, 19, 88, 0.42)'}><UnionIcon /></Button>
        <ConnectButton />
      </HStack>
    </HStack>
  )
}
