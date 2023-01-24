import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowUp, FilIcon, VectorIcon } from '../icons'

export const FileCoinCard = () => {
    return (
        <Stack bgGradient={'linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 86, 180, 0.8))'} width={'270px'} minHeight={'158px'} borderRadius={'20px'} padding={'20px'} justify={'space-between'} align={'start'}>
            <HStack w={'100%'} justify='space-between'>
                <HStack>
                    <FilIcon />
                    <Text fontWeight={600} fontSize={'14px'} color={'white'}>Filecoin FIL</Text>
                </HStack>
                <VectorIcon />
            </HStack>
            <Text fontWeight={600} fontSize={'18px'} lineHeight={'26px'} color={'white'}>Price 5,36 US$</Text>
            <HStack>
                <ArrowUp />
                <Text fontWeight={600} fontSize={'12px'} lineHeight={'20px'} color={'#53D258'}>+35,74%</Text>
            </HStack>
            <Text fontWeight={600} fontSize={'12px'} lineHeight={'17px'} color={'white'}>Cap. market   1.982.341.175 US$</Text>
        </Stack>
    )
}
