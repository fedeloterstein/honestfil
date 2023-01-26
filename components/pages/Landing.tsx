import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { LandingIlustrationOne, LandingIlustrationTwo, WalletIcon } from '../icons'
import { ConnectButton } from '../ui'

export const Landing = () => {
    return (
        <Stack m={'0px 115px'}  height={'100vh'}>
            <HStack gap={'82px'} mt={'39px'}>
                <Box w={'50%'}>
                    <SectionOne />
                </Box>
                <Box w={'50%'}>
                    <LandingIlustrationOne />
                </Box>
            </HStack>
            <HStack gap={'82px'}>
                <Box w={'50%'}>
                    <LandingIlustrationTwo />
                </Box>
                <Box w={'50%'}>
                    <SectionFour />
                </Box>
            </HStack>
        </Stack>
    )
}

const SectionOne = () => {
    return (
        <Stack align={'start'} gap={'27px'}>
            <Text fontWeight={700} fontSize={'30px'} lineHeight={'37px'}>Bringing transparency to Filecoin DeFi</Text>
            <Text fontWeight={400} fontSize={'16px'} lineHeight={'20px'} color={'#6F6C99'}>Real-time dashboard for tracking Filecoin reserve levels in protocols and dapps.</Text>
            <ConnectButton />
        </Stack>
    )
}

const SectionFour = () => {
    return (
        <Stack align={'start'} gap={'27px'}>
            <Text fontWeight={700} fontSize={'30px'} lineHeight={'37px'}>Stay ahead of the game with risk prevention</Text>
            <Text fontWeight={400} fontSize={'16px'} lineHeight={'20px'} color={'#6F6C99'}>Keep your Filecoin investment safe from risk or hacks with real-time alerts that notify you when reserve is low.</Text>
            <ConnectButton />
        </Stack>
    )
}