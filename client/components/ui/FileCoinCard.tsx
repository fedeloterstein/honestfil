import { useCoingeckoApi } from '@/hooks/useCoingeckoApi'
import { HStack, Skeleton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowDownIcon, ArrowUp, FilIcon, VectorIcon } from '../icons'

export const FileCoinCard = () => {

    const {response, loading, error } = useCoingeckoApi()

    if (loading || error) return <Skeleton startColor='gba(0, 0, 0, 0.8)' endColor='rgba(0, 86, 180, 0.8)'  width={'270px'} minHeight={'158px'} borderRadius={'20px'} padding={'20px'}  boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'} />

   const change = response?.usd_24h_change.toString().includes('-');

    return (
        <Stack bgGradient={'linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 86, 180, 0.8))'} width={'270px'} minHeight={'158px'} borderRadius={'20px'} padding={'20px'} justify={'space-between'} align={'start'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
            <HStack w={'100%'} justify='space-between'>
                <HStack>
                    <FilIcon />
                    <Text fontWeight={600} fontSize={'14px'} color={'white'}>Filecoin FIL</Text>
                </HStack>
                <VectorIcon />
            </HStack>
            <Text fontWeight={600} fontSize={'18px'} lineHeight={'26px'} color={'white'}>Price {response?.usd} US$</Text>
            <HStack>
                {!change ? <ArrowUp /> : <ArrowDownIcon />}
                <Text fontWeight={600} fontSize={'12px'} lineHeight={'20px'} color={change ? '#F46565' : '#53D258'}>{response?.usd_24h_change.toFixed(2)}%</Text>
            </HStack>
            <Text fontWeight={600} fontSize={'12px'} lineHeight={'17px'} color={'white'}>Cap. market {response?.usd_market_cap.toFixed()} US$</Text>
        </Stack>
    )
}
