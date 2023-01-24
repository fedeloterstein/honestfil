import { Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { WalletIcon } from '../icons'

export const Header = () => {
  return (
    <HStack justifyContent={'space-between'} p={5}>
        <Stack>
            <Heading fontWeight={700} fontSize={'30px'} lineHeight={'38px'} color={'#4C4C66'}>Dashboard FIL Reserves</Heading>
            <Text fontWeight={400} fontSize={'13px'} lineHeight={'16px'} color={'#6F6C99'} >Real-time data of the reserves of Filecoin on decentralized finance (DeFi) protocols or dapps.</Text>
        </Stack>
        <HStack>
            <Button leftIcon={<WalletIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} borderRadius={'50px'} p={'0px 20px'} color={'white'}>Connect Wallet</Button>
        </HStack>
    </HStack>
  )
}
