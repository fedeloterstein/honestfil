import { Button } from '@chakra-ui/react'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import React from 'react'
import { useAccount, useDisconnect } from 'wagmi';
import { WalletIcon } from '../icons';

export const ConnectButton = () => {
    const { openConnectModal } = useConnectModal();
    const { disconnect } = useDisconnect()
    const { isConnected } = useAccount()

    if (isConnected) return <Button onClick={() => disconnect()} leftIcon={<WalletIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} borderRadius={'50px'} p={'0px 20px'} color={'white'} boxShadow={'0px 4px 20px 0px rgba(0, 0, 0, 0.25)'}>Disconnect Wallet</Button>
    
    return (
        <Button onClick={openConnectModal} leftIcon={<WalletIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} borderRadius={'50px'} p={'0px 20px'} color={'white'} boxShadow={'0px 4px 20px 0px rgba(0, 0, 0, 0.25)'}>Connect Wallet</Button>
    )
}
