import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { LandingIlustrationOne, LandingIlustrationTwo, WalletIcon } from '../icons'

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
            <Button leftIcon={<WalletIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} minW='154px' borderRadius={'50px'} p={'0px 20px'} color={'white'} boxShadow={'0px 4px 20px 0px rgba(0, 0, 0, 0.25)'}>Connect Wallet</Button>
        </Stack>
    )
}

const SectionFour = () => {
    return (
        <Stack align={'start'} gap={'27px'}>
            <Text fontWeight={700} fontSize={'30px'} lineHeight={'37px'}>Stay ahead of the game with risk prevention</Text>
            <Text fontWeight={400} fontSize={'16px'} lineHeight={'20px'} color={'#6F6C99'}>Keep your Filecoin investment safe from risk or hacks with real-time alerts that notify you when reserve is low.</Text>
            <Button leftIcon={<WalletIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} minW='154px' borderRadius={'50px'} p={'0px 20px'} color={'white'} boxShadow={'0px 4px 20px 0px rgba(0, 0, 0, 0.25)'}>Connect Wallet</Button>
        </Stack>
    )
}