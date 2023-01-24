import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowDownIcon, FilIcon, VectorIcon, WalletCircleIcon } from '../icons'

export const BalanceCard = () => {
    return (
        <Stack bgGradient={'linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))'} width={'270px'} minHeight={'158px'} borderRadius={'20px'} padding={'20px'} justify={'space-between'} align={'start'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
            <HStack w={'100%'} justify='space-between'>
                <HStack>
                <WalletCircleIcon />
                <Text fontWeight={600} fontSize={'14px'} color={'white'}>Your Balance FIL</Text>
                </HStack>
               <VectorIcon />
            </HStack>
            <Text fontWeight={600} fontSize={'18px'} lineHeight={'26px'} color={'white'}>$40,000</Text>
            <HStack>
                <ArrowDownIcon />
                <Text fontWeight={600} fontSize={'12px'} lineHeight={'20px'} color={'#F46565'}>+35,74%</Text>
            </HStack>
           <HStack>
           <Text fontWeight={600} fontSize={'12px'} lineHeight={'17px'} color={'white'}>Allocation </Text>
           <FilIcon /> 
           <Text fontWeight={600} fontSize={'12px'} lineHeight={'17px'} color={'white'}>27.88%</Text>
           </HStack>
        </Stack>
    )
}
