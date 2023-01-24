import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const BalanceCard = () => {
    return (
        <Stack bg={'gray.100'} width={'270px'} minHeight={'158px'} borderRadius={'20px'} padding={'16px'}>
            <HStack>
                <Text>😀</Text>
                <Text fontWeight={600} fontSize={'14px'}>Your Balance FIL</Text>
                <Text>⏖</Text>
            </HStack>
            <Text>$40,000</Text>
            <Text>+35,74%</Text>
            <Text>Allocation 😀 27.88%</Text>
        </Stack>
    )
}
